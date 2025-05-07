import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
// import { db } from "@/lib/firebase";

// API keys from environment variables
const apiKeys = [
  process.env.NEXT_RAPID_API_KEY1,
  process.env.NEXT_RAPID_API_KEY2,
  process.env.NEXT_RAPID_API_KEY3,
  process.env.NEXT_RAPID_API_KEY4,
];

// Function to fetch data with key rotation in case of errors
async function fetchWithKeyRotation(matchId, keyIndex = 0) {
  if (keyIndex >= apiKeys.length) {
    throw new Error("All RapidAPI keys failed or quota exceeded");
  }

  try {
    const response = await axios.get(`https://crickbuzz-official-apis.p.rapidapi.com/match/${matchId}`, {
      headers: {
        "x-rapidapi-key": apiKeys[keyIndex],
        "x-rapidapi-host": "crickbuzz-official-apis.p.rapidapi.com",
      },
    });
    return response.data;
  } catch (err) {
    if (err.response?.status === 429) {
      console.warn(`Key ${keyIndex + 1} quota exceeded. Trying next key...`);
      return fetchWithKeyRotation(matchId, keyIndex + 1);
    }
    console.error(`Key ${keyIndex + 1} failed:`, err.message);
    return fetchWithKeyRotation(matchId, keyIndex + 1);
  }
}

// GET request handler for fetching match details and updating Firestore
export async function GET(request, { params }) {
  const matchId = params.matchId;

  try {
    // Fetch match data from RapidAPI
    const data = await fetchWithKeyRotation(matchId);

    // Get the Firestore reference and data
    const matchRef = doc(db, "matchinfo", matchId);
    const matchSnap = await getDoc(matchRef);

    // If match not found in Firestore, return error
    if (!matchSnap.exists()) {
      return NextResponse.json({ success: false, error: "Match not found in Firestore" }, { status: 404 });
    }

    const existingMatchData = matchSnap.data();
    const matchInfo = existingMatchData?.matchInfo || {};

    // Update toss results if available
    const updatedTossResults = data?.matchInfo?.tossResults || matchInfo?.tossResults || {};

    await updateDoc(matchRef, {
      "matchInfo.tossResults": updatedTossResults,
    });

    // Return updated toss results
    return NextResponse.json({ success: true, tossResults: updatedTossResults });
  } catch (error) {
    console.error("🔥 Error updating Firestore:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
