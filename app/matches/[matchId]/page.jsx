// // // // // // // //app/matches/[matchId]/page.jsx

// // // // // // // 'use client';

// // // // // // // import { useEffect, useState } from 'react';
// // // // // // // import { doc, onSnapshot } from 'firebase/firestore';
// // // // // // // // import { db } from '@/lib/firebase';
// // // // // // // import TeamSquadManager from './components/TeamSquadManager';
// // // // // // // import { db } from '@/app/lib/firebase';

// // // // // // // export default function MatchPage({ params }) {
// // // // // // //   const [matchData, setMatchData] = useState(null);
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const matchId = params.matchId;

// // // // // // //   useEffect(() => {
// // // // // // //     const unsubscribe = onSnapshot(doc(db, "matchinfo", matchId), (doc) => {
// // // // // // //       if (doc.exists()) {
// // // // // // //         setMatchData(doc.data());
// // // // // // //       }
// // // // // // //       setLoading(false);
// // // // // // //     });

// // // // // // //     return () => unsubscribe();
// // // // // // //   }, [matchId]);

// // // // // // //   if (loading) return <div>Loading match data...</div>;
// // // // // // //   if (!matchData) return <div>Match not found</div>;

// // // // // // //   return (
// // // // // // //     <div className="p-4">
// // // // // // //       <h1 className="text-2xl font-bold mb-6">
// // // // // // //         {matchData.matchInfo.team1.name} vs {matchData.matchInfo.team2.name}
// // // // // // //       </h1>
      
// // // // // // //       <div className="grid gap-4 md:grid-cols-2">
// // // // // // //         <TeamSquadManager
// // // // // // //           team={matchData.matchInfo.team1}
// // // // // // //           matchId={matchId}
// // // // // // //         />
// // // // // // //         <TeamSquadManager
// // // // // // //           team={matchData.matchInfo.team2}
// // // // // // //           matchId={matchId}
// // // // // // //         />
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }








// // // // // // 'use client';

// // // // // // import { useEffect, useState } from 'react';
// // // // // // import { doc, onSnapshot } from 'firebase/firestore';
// // // // // // import { db } from '@/app/lib/firebase';
// // // // // // import TeamSquadManager from './components/TeamSquadManager';
// // // // // // import { Toaster } from '@/components/ui/toaster';

// // // // // // export default function MatchPage({ params }) {
// // // // // //   const [matchData, setMatchData] = useState(null);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const matchId = params.matchId;

// // // // // //   useEffect(() => {
// // // // // //     const unsubscribe = onSnapshot(doc(db, "matchinfo", matchId), (doc) => {
// // // // // //       if (doc.exists()) {
// // // // // //         setMatchData(doc.data());
// // // // // //       }
// // // // // //       setLoading(false);
// // // // // //     });

// // // // // //     return () => unsubscribe();
// // // // // //   }, [matchId]);

// // // // // //   if (loading) return (
// // // // // //     <div className="flex items-center justify-center h-64">
// // // // // //       <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
// // // // // //     </div>
// // // // // //   );
  
// // // // // //   if (!matchData) return (
// // // // // //     <div className="text-center py-10">
// // // // // //       <h2 className="text-xl font-medium">Match not found</h2>
// // // // // //       <p className="text-gray-400 mt-2">The requested match could not be loaded</p>
// // // // // //     </div>
// // // // // //   );

// // // // // //   return (
// // // // // //     <div className="container mx-auto px-4 py-8">
// // // // // //       <h1 className="text-3xl font-bold text-center mb-2">
// // // // // //         {matchData.matchInfo.team1.name} vs {matchData.matchInfo.team2.name}
// // // // // //       </h1>
// // // // // //       <p className="text-gray-400 text-center mb-8">
// // // // // //         Manage team squads and substitutions
// // // // // //       </p>
      
// // // // // //       <div className="grid gap-8 md:grid-cols-2">
// // // // // //         <TeamSquadManager
// // // // // //           team={matchData.matchInfo.team1}
// // // // // //           matchId={matchId}
// // // // // //         />
// // // // // //         <TeamSquadManager
// // // // // //           team={matchData.matchInfo.team2}
// // // // // //           matchId={matchId}
// // // // // //         />
// // // // // //       </div>
// // // // // //       <Toaster />
// // // // // //     </div>
// // // // // //   );
// // // // // // }





// // // // // // good working version

// // // // // 'use client';

// // // // // import { useEffect, useState } from 'react';
// // // // // import { doc, onSnapshot } from 'firebase/firestore';
// // // // // import { db } from '@/app/lib/firebase';
// // // // // import TeamSquadManager from './components/TeamSquadManager';
// // // // // import { Toaster } from '@/components/ui/sonner';

// // // // // export default function MatchPage({ params }) {
// // // // //   const [matchData, setMatchData] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const matchId = params.matchId;

// // // // //   useEffect(() => {
// // // // //     const unsubscribe = onSnapshot(doc(db, "matchinfo", matchId), (doc) => {
// // // // //       if (doc.exists()) {
// // // // //         setMatchData(doc.data());
// // // // //       }
// // // // //       setLoading(false);
// // // // //     });

// // // // //     return () => unsubscribe();
// // // // //   }, [matchId]);

// // // // //   if (loading) return (
// // // // //     <div className="flex items-center justify-center h-64">
// // // // //       <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
// // // // //     </div>
// // // // //   );
  
// // // // //   if (!matchData) return (
// // // // //     <div className="text-center py-10">
// // // // //       <h2 className="text-xl font-medium">Match not found</h2>
// // // // //       <p className="text-gray-400 mt-2">The requested match could not be loaded</p>
// // // // //     </div>
// // // // //   );

// // // // //   return (
// // // // //     <div className="container mx-auto px-4 py-8">
// // // // //       <h1 className="text-3xl font-bold text-center mb-2">
// // // // //         {matchData.matchInfo.team1.name} vs {matchData.matchInfo.team2.name}
// // // // //       </h1>
// // // // //       <p className="text-gray-400 text-center mb-8">
// // // // //         Manage team squads and substitutions
// // // // //       </p>
      
// // // // //       <div className="grid gap-8 md:grid-cols-2">
// // // // //         <TeamSquadManager
// // // // //           team={matchData.matchInfo.team1}
// // // // //           matchId={matchId}
// // // // //         />
// // // // //         <TeamSquadManager
// // // // //           team={matchData.matchInfo.team2}
// // // // //           matchId={matchId}
// // // // //         />
// // // // //       </div>
// // // // //       <Toaster position="top-center" />
// // // // //     </div>
// // // // //   );
// // // // // }




// // // // // // app/matches/[matchId]/page.jsx

// // // // 'use client';

// // // // import { useState, useEffect } from 'react';
// // // // import { doc, onSnapshot } from 'firebase/firestore';
// // // // import { db } from '@/app/lib/firebase';
// // // // import TeamSquadManager from './components/TeamSquadManager';
// // // // import { Toaster } from '@/components/ui/sonner';
// // // // import { Loader2 } from 'lucide-react';

// // // // export default function MatchPage({ params }) {
// // // //   const [matchData, setMatchData] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const matchId = params.matchId;

// // // //   useEffect(() => {
// // // //     if (!matchId) return;

// // // //     const unsubscribe = onSnapshot(doc(db, "matchinfo", matchId), (doc) => {
// // // //       if (doc.exists()) {
// // // //         setMatchData(doc.data());
// // // //       }
// // // //       setLoading(false);
// // // //     });

// // // //     return () => unsubscribe();
// // // //   }, [matchId]);

// // // //   if (loading) return (
// // // //     <div className="flex items-center justify-center h-64">
// // // //       <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
// // // //     </div>
// // // //   );
  
// // // //   if (!matchData) return (
// // // //     <div className="text-center py-10">
// // // //       <h2 className="text-xl font-medium text-gray-900">Match not found</h2>
// // // //       <p className="text-gray-500 mt-2">The requested match could not be loaded</p>
// // // //     </div>
// // // //   );

// // // //   return (
// // // //     <div className="container mx-auto px-4 py-8 bg-white min-h-screen">
// // // //       <h1 className="text-2xl font-bold text-center mb-2 text-gray-900">
// // // //         {matchData.matchInfo.team1.name} vs {matchData.matchInfo.team2.name}
// // // //       </h1>
// // // //       <p className="text-gray-500 text-center mb-8">
// // // //         Manage team squads and substitutions
// // // //       </p>
      
// // // //       <div className="grid gap-8 md:grid-cols-2">
// // // //         <TeamSquadManager
// // // //           team={matchData.matchInfo.team1}
// // // //           matchId={matchId}
// // // //         />
// // // //         <TeamSquadManager
// // // //           team={matchData.matchInfo.team2}
// // // //           matchId={matchId}
// // // //         />
// // // //       </div>
// // // //       <Toaster position="top-center" />
// // // //     </div>
// // // //   );
// // // // }




// // // // app/matches/[matchId]/page.jsx

// // // 'use client';

// // // import { useState, useEffect } from 'react';
// // // import { doc, onSnapshot } from 'firebase/firestore';
// // // import { db } from '@/app/lib/firebase';
// // // import TeamSquadManager from './components/TeamSquadManager';
// // // import { Toaster } from '@/components/ui/sonner';
// // // import { Loader2 } from 'lucide-react';

// // // export default function MatchPage({ params }) {
// // //   const [matchData, setMatchData] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const matchId = params.matchId;

// // //   useEffect(() => {
// // //     if (!matchId) return;

// // //     const unsubscribe = onSnapshot(doc(db, "matchinfo", matchId), (doc) => {
// // //       if (doc.exists()) {
// // //         setMatchData(doc.data());
// // //       }
// // //       setLoading(false);
// // //     });

// // //     return () => unsubscribe();
// // //   }, [matchId]);

// // //   if (loading) return (
// // //     <div className="flex items-center justify-center h-64">
// // //       <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
// // //     </div>
// // //   );
  
// // //   if (!matchData) return (
// // //     <div className="text-center py-10">
// // //       <h2 className="text-xl font-medium text-gray-900">Match not found</h2>
// // //       <p className="text-gray-500 mt-2">The requested match could not be loaded</p>
// // //     </div>
// // //   );

// // //   return (
// // //     <div className="container mx-auto px-4 py-8 bg-white min-h-screen">
// // //       <h1 className="text-2xl font-bold text-center mb-2 text-gray-900">
// // //         {matchData.matchInfo.team1.name} vs {matchData.matchInfo.team2.name}
// // //       </h1>
// // //       <p className="text-gray-500 text-center mb-8">
// // //         Manage team squads and substitutions
// // //       </p>
      
// // //       <div className="grid gap-8 md:grid-cols-2">
// // //         <TeamSquadManager
// // //           team={matchData.matchInfo.team1}
// // //           teamType="team1"
// // //           matchId={matchId}
// // //           matchData={matchData}
// // //         />
// // //         <TeamSquadManager
// // //           team={matchData.matchInfo.team2}
// // //           teamType="team2"
// // //           matchId={matchId}
// // //           matchData={matchData}
// // //         />
// // //       </div>
// // //       <Toaster position="top-center" />
// // //     </div>
// // //   );
// // // }



// // 'use client';

// // import { useState, useEffect } from 'react';
// // import { doc, onSnapshot } from 'firebase/firestore';
// // import { db } from '@/app/lib/firebase';
// // import TeamSquadManager from './components/TeamSquadManager';
// // import { Toaster } from '@/components/ui/sonner';
// // import { Loader2 } from 'lucide-react';

// // export default function MatchPage({ params }) {
// //   const [matchData, setMatchData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const matchId = params.matchId;

// //   useEffect(() => {
// //     if (!matchId) return;

// //     const unsubscribe = onSnapshot(doc(db, "matchinfo", matchId), (doc) => {
// //       if (doc.exists()) {
// //         const data = doc.data();
// //         console.log("Match data loaded:", data); // Debug log
// //         setMatchData(data);
// //       }
// //       setLoading(false);
// //     });

// //     return () => unsubscribe();
// //   }, [matchId]);

// //   if (loading) return (
// //     <div className="flex items-center justify-center h-64">
// //       <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
// //     </div>
// //   );
  
// //   if (!matchData) return (
// //     <div className="text-center py-10">
// //       <h2 className="text-xl font-medium text-gray-900">Match not found</h2>
// //       <p className="text-gray-500 mt-2">The requested match could not be loaded</p>
// //     </div>
// //   );

// //   // Debug team data
// //   console.log("Team1 players:", matchData.matchInfo.team1.playerDetails);
// //   console.log("Team2 players:", matchData.matchInfo.team2.playerDetails);

// //   return (
// //     <div className="container mx-auto px-4 py-8 bg-white min-h-screen">
// //       <h1 className="text-2xl font-bold text-center mb-2 text-gray-900">
// //         {matchData.matchInfo.team1.name} vs {matchData.matchInfo.team2.name}
// //       </h1>
// //       <p className="text-gray-500 text-center mb-8">
// //         Manage team squads and substitutions
// //       </p>
      
// //       <div className="grid gap-8 md:grid-cols-2">
// //         <TeamSquadManager
// //           team={matchData.matchInfo.team1}
// //           teamType="team1"
// //           matchId={matchId}
// //           matchData={matchData}
// //         />
// //         <TeamSquadManager
// //           team={matchData.matchInfo.team2}
// //           teamType="team2"
// //           matchId={matchId}
// //           matchData={matchData}
// //         />
// //       </div>
// //       <Toaster position="top-center" />
// //     </div>
// //   );
// // }







// // app/matches/[matchId]/page.jsx

// 'use client';

// import { useState, useEffect } from 'react';
// import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
// import { db } from '@/app/lib/firebase';
// import TeamSquadManager from './components/TeamSquadManager';
// import { Toaster } from '@/components/ui/sonner';
// import { Loader2 } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Save } from 'lucide-react';

// export default function MatchPage({ params }) {
//   const [matchData, setMatchData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [savingAll, setSavingAll] = useState(false);
//   const matchId = params?.matchId; // Fixed params access

//   // Track modified players from both teams
//   const [team1Modified, setTeam1Modified] = useState({});
//   const [team2Modified, setTeam2Modified] = useState({});

//   useEffect(() => {
//     if (!matchId) return;

//     const unsubscribe = onSnapshot(doc(db, "matchinfo", matchId), (doc) => {
//       if (doc.exists()) {
//         setMatchData(doc.data());
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [matchId]);

//   const saveAllTeams = async () => {
//     if (!matchId || !matchData) return;
    
//     setSavingAll(true);
//     try {
//       const updates = {};
      
//       // Apply team1 changes if any
//       if (Object.keys(team1Modified).length > 0) {
//         const updatedPlayers = matchData.matchInfo.team1.playerDetails.map(player => ({
//           ...player,
//           substitute: player.id in team1Modified ? team1Modified[player.id] : player.substitute
//         }));
//         updates['matchInfo.team1.playerDetails'] = updatedPlayers;
//       }

//       // Apply team2 changes if any
//       if (Object.keys(team2Modified).length > 0) {
//         const updatedPlayers = matchData.matchInfo.team2.playerDetails.map(player => ({
//           ...player,
//           substitute: player.id in team2Modified ? team2Modified[player.id] : player.substitute
//         }));
//         updates['matchInfo.team2.playerDetails'] = updatedPlayers;
//       }

//       if (Object.keys(updates).length > 0) {
//         await updateDoc(doc(db, "matchinfo", matchId), updates);
//         toast.success('All teams saved successfully');
//         setTeam1Modified({});
//         setTeam2Modified({});
//       } else {
//         toast.message('No changes to save');
//       }
//     } catch (error) {
//       console.error("Error saving all teams:", error);
//       toast.error("Failed to save all teams");
//     } finally {
//       setSavingAll(false);
//     }
//   };

//   if (loading) return (
//     <div className="flex items-center justify-center h-64">
//       <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
//     </div>
//   );
  
//   if (!matchData) return (
//     <div className="text-center py-10">
//       <h2 className="text-xl font-medium text-gray-900">Match not found</h2>
//       <p className="text-gray-500 mt-2">The requested match could not be loaded</p>
//     </div>
//   );

//   const hasChanges = Object.keys(team1Modified).length > 0 || Object.keys(team2Modified).length > 0;

//   return (
//     <div className="container mx-auto px-4 py-8 bg-white min-h-screen">
//       <h1 className="text-2xl font-bold text-center mb-2 text-gray-900">
//         {matchData.matchInfo.team1.name} vs {matchData.matchInfo.team2.name}
//       </h1>
//       <p className="text-gray-500 text-center mb-8">
//         Manage team squads and substitutions
//       </p>
      
//       <div className="grid gap-8 md:grid-cols-2">
//         <TeamSquadManager
//           team={matchData.matchInfo.team1}
//           teamType="team1"
//           matchId={matchId}
//           matchData={matchData}
//           onPlayerToggle={(playerId, isSubstitute) => {
//             setTeam1Modified(prev => ({ ...prev, [playerId]: isSubstitute }));
//           }}
//           modifiedPlayers={team1Modified}
//         />
//         <TeamSquadManager
//           team={matchData.matchInfo.team2}
//           teamType="team2"
//           matchId={matchId}
//           matchData={matchData}
//           onPlayerToggle={(playerId, isSubstitute) => {
//             setTeam2Modified(prev => ({ ...prev, [playerId]: isSubstitute }));
//           }}
//           modifiedPlayers={team2Modified}
//         />
//       </div>

//       {hasChanges && (
//         <div className="mt-8 flex justify-center">
//           <Button
//             onClick={saveAllTeams}
//             disabled={savingAll}
//             className="px-6 py-3"
//           >
//             {savingAll ? (
//               <Loader2 className="h-5 w-5 animate-spin mr-2" />
//             ) : (
//               <Save className="h-5 w-5 mr-2" />
//             )}
//             Save All Teams
//           </Button>
//         </div>
//       )}

//       <Toaster position="top-center" />
//     </div>
//   );
// }



'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '@/app/lib/firebase';
import TeamSquadManager from './components/TeamSquadManager';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { Loader2, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MatchPage() {
  const params = useParams();
  const matchId = params?.matchId;
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [savingAll, setSavingAll] = useState(false);
  const [team1Modified, setTeam1Modified] = useState({});
  const [team2Modified, setTeam2Modified] = useState({});

  useEffect(() => {
    if (!matchId) return;

    const unsubscribe = onSnapshot(doc(db, "matchinfo", matchId), (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setMatchData(data);
        // Reset modified states when new data comes in
        setTeam1Modified({});
        setTeam2Modified({});
      } else {
        setMatchData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [matchId]);

  const handlePlayerToggle = (teamType, playerId, isPlaying) => {
    // Convert playing status to substitute status (Firebase stores substitute status)
    const isSubstitute = !isPlaying;
    
    if (teamType === 'team1') {
      setTeam1Modified(prev => ({ ...prev, [playerId]: isSubstitute }));
    } else {
      setTeam2Modified(prev => ({ ...prev, [playerId]: isSubstitute }));
    }
  };

  const saveAllTeams = async () => {
    if (!matchId || !matchData) return;
    
    setSavingAll(true);
    try {
      const updates = {};
      
      // Prepare team1 updates
      if (Object.keys(team1Modified).length > 0) {
        updates['matchInfo.team1.playerDetails'] = 
          matchData.matchInfo.team1.playerDetails.map(player => {
            // Use modified value if exists, otherwise fall back to original
            const substitute = player.id in team1Modified 
              ? team1Modified[player.id] 
              : player.substitute;
            return {
              ...player,
              substitute
            };
          });
      }

      // Prepare team2 updates
      if (Object.keys(team2Modified).length > 0) {
        updates['matchInfo.team2.playerDetails'] = 
          matchData.matchInfo.team2.playerDetails.map(player => {
            const substitute = player.id in team2Modified 
              ? team2Modified[player.id] 
              : player.substitute;
            return {
              ...player,
              substitute
            };
          });
      }

      if (Object.keys(updates).length > 0) {
        // Update the document with merge: true to preserve other fields
        await updateDoc(doc(db, "matchinfo", matchId), updates, { merge: true });
        toast.success('Player statuses updated successfully');
        // Reset modified states after successful save
        setTeam1Modified({});
        setTeam2Modified({});
      } else {
        toast.info('No changes to save');
      }
    } catch (error) {
      console.error("Error saving player statuses:", error);
      toast.error("Failed to save changes");
    } finally {
      setSavingAll(false);
    }
  };

  // ... loading and error states remain the same ...

  const hasChanges = Object.keys(team1Modified).length > 0 || 
                     Object.keys(team2Modified).length > 0;

  return (
    <div className="container mx-auto px-4 py-8 bg-white min-h-screen">
      {/* ... header and other UI elements ... */}
      
      <div className="grid gap-8 md:grid-cols-2">
        {matchData?.matchInfo?.team1 && (
          <TeamSquadManager 
            team={matchData.matchInfo.team1} 
            teamType="team1"
            matchData={matchData}
            onPlayerToggle={(playerId, isPlaying) => 
              handlePlayerToggle('team1', playerId, isPlaying)
            }
            modifiedPlayers={team1Modified}
          />
        )}
        
        {matchData?.matchInfo?.team2 && (
          <TeamSquadManager 
            team={matchData.matchInfo.team2} 
            teamType="team2"
            matchData={matchData}
            onPlayerToggle={(playerId, isPlaying) => 
              handlePlayerToggle('team2', playerId, isPlaying)
            }
            modifiedPlayers={team2Modified}
          />
        )}
      </div>

      {/* Save button */}
      <div className="mt-8 flex justify-center">
        <Button 
          onClick={saveAllTeams}
          disabled={savingAll || !hasChanges}
          className="px-6 py-3"
        >
          {savingAll ? (
            <Loader2 className="h-5 w-5 animate-spin mr-2" />
          ) : (
            <Save className="h-5 w-5 mr-2" />
          )}
          Save All Teams
        </Button>
      </div>

      <Toaster position="top-center" />
    </div>
  );
}