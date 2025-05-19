// // // // // // // // app/matches/[matchId]/components/teamSquadManager.jsx
// // // // // // // "use client";

// // // // // // // import { useState, useCallback } from "react";
// // // // // // // import { doc, updateDoc } from "firebase/firestore";
// // // // // // // import { db } from "@/app/lib/firebase";

// // // // // // // const PlayerRow = ({ player, onToggle }) => (
// // // // // // //   <div className="flex items-center justify-between">
// // // // // // //     <div className="flex items-center">
// // // // // // //       <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
// // // // // // //         player.substitute ? 'bg-red-500' : 'bg-green-500'
// // // // // // //       }`} />
// // // // // // //       <img
// // // // // // //         src={player.imgURL || "/fallback-player.png"}
// // // // // // //         alt={player.name}
// // // // // // //         className="w-4 h-4 mr-2 rounded-full object-cover"
// // // // // // //         onError={(e) => {
// // // // // // //           e.currentTarget.src = "/fallback-player.png";
// // // // // // //         }}
// // // // // // //       />
// // // // // // //       <span className={player.substitute ? 'text-gray-400' : ''}>
// // // // // // //         {player.name} ({player.role})
// // // // // // //       </span>
// // // // // // //     </div>
// // // // // // //     <button
// // // // // // //       onClick={() => onToggle(player.id)}
// // // // // // //       className={`ml-2 p-1 rounded-full ${
// // // // // // //         player.substitute
// // // // // // //           ? 'bg-red-500 hover:bg-red-600'
// // // // // // //           : 'bg-green-500 hover:bg-green-600'
// // // // // // //       }`}
// // // // // // //       aria-label={player.substitute ? 'Add to playing XI' : 'Move to substitutes'}
// // // // // // //     >
// // // // // // //       <svg
// // // // // // //         xmlns="http://www.w3.org/2000/svg"
// // // // // // //         className="h-3 w-3 text-white"
// // // // // // //         viewBox="0 0 20 20"
// // // // // // //         fill="currentColor"
// // // // // // //       >
// // // // // // //         {player.substitute ? (
// // // // // // //           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// // // // // // //         ) : (
// // // // // // //           <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
// // // // // // //         )}
// // // // // // //       </svg>
// // // // // // //     </button>
// // // // // // //   </div>
// // // // // // // );

// // // // // // // const TeamSquadManager = ({ team, matchId }) => {
// // // // // // //   const [saving, setSaving] = useState(false);
// // // // // // //   const [players, setPlayers] = useState(() => {
// // // // // // //     const playing = team.playerDetails?.filter(p => !p.substitute) || [];
// // // // // // //     const substitutes = team.playerDetails?.filter(p => p.substitute) || [];
// // // // // // //     return [...playing, ...substitutes];
// // // // // // //   });

// // // // // // //   const togglePlayerStatus = useCallback((playerId) => {
// // // // // // //     setPlayers(prevPlayers =>
// // // // // // //       prevPlayers.map(player =>
// // // // // // //         player.id === playerId
// // // // // // //           ? { ...player, substitute: !player.substitute }
// // // // // // //           : player
// // // // // // //       )
// // // // // // //     );
// // // // // // //   }, []);

// // // // // // //   const saveChanges = async () => {
// // // // // // //     if (!matchId || !team?.id) return;
    
// // // // // // //     setSaving(true);
// // // // // // //     try {
// // // // // // //       const teamRef = doc(db, "matchinfo", matchId);
// // // // // // //       const teamField = team.id === team.team1?.id ? 'team1' : 'team2';

// // // // // // //       await updateDoc(teamRef, {
// // // // // // //         [`matchInfo.${teamField}.playerDetails`]: players
// // // // // // //       });

// // // // // // //       alert("Team squad updated successfully!");
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error updating squad:", error);
// // // // // // //       alert("Failed to update squad");
// // // // // // //     } finally {
// // // // // // //       setSaving(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   if (!team?.playerDetails?.length) {
// // // // // // //     return (
// // // // // // //       <div className="bg-gray-700 p-3 rounded">
// // // // // // //         <h4 className="font-medium flex items-center">
// // // // // // //           <img
// // // // // // //             src={team?.image || '/fallback-team.png'}
// // // // // // //             alt={team?.name}
// // // // // // //             className="w-6 h-6 mr-2 object-contain"
// // // // // // //             onError={(e) => {
// // // // // // //               e.currentTarget.src = '/fallback-team.png';
// // // // // // //             }}
// // // // // // //           />
// // // // // // //           {team?.name || 'Team'}
// // // // // // //         </h4>
// // // // // // //         <p className="text-gray-400 mt-2">No player data available</p>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="bg-gray-700 p-3 rounded">
// // // // // // //       <h4 className="font-medium flex items-center">
// // // // // // //         <img
// // // // // // //           src={team.image || '/fallback-team.png'}
// // // // // // //           alt={team.name}
// // // // // // //           className="w-6 h-6 mr-2 object-contain"
// // // // // // //           onError={(e) => {
// // // // // // //             e.currentTarget.src = '/fallback-team.png';
// // // // // // //           }}
// // // // // // //         />
// // // // // // //         {team.name}
// // // // // // //       </h4>
      
// // // // // // //       <div className="mt-4 mb-4">
// // // // // // //         <h5 className="font-medium text-sm mb-2">Playing XI</h5>
// // // // // // //         <div className="space-y-1">
// // // // // // //           {players.filter(p => !p.substitute).map(player => (
// // // // // // //             <PlayerRow
// // // // // // //               key={player.id}
// // // // // // //               player={player}
// // // // // // //               onToggle={togglePlayerStatus}
// // // // // // //             />
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <div className="mt-4 mb-4">
// // // // // // //         <h5 className="font-medium text-sm mb-2">Substitutes</h5>
// // // // // // //         <div className="space-y-1">
// // // // // // //           {players.filter(p => p.substitute).map(player => (
// // // // // // //             <PlayerRow
// // // // // // //               key={player.id}
// // // // // // //               player={player}
// // // // // // //               onToggle={togglePlayerStatus}
// // // // // // //             />
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <button
// // // // // // //         onClick={saveChanges}
// // // // // // //         disabled={saving}
// // // // // // //         className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded disabled:opacity-50 transition-colors"
// // // // // // //       >
// // // // // // //         {saving ? (
// // // // // // //           <span className="flex items-center justify-center">
// // // // // // //             <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // // // // //               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // // // //               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // // // //             </svg>
// // // // // // //             Saving...
// // // // // // //           </span>
// // // // // // //         ) : 'Save Changes'}
// // // // // // //       </button>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default TeamSquadManager;








// // // // // // 'use client';

// // // // // // import { useState, useCallback, useEffect } from 'react';
// // // // // // import { doc, updateDoc } from 'firebase/firestore';
// // // // // // import { db } from '@/app/lib/firebase';
// // // // // // import { Button } from '@/components/ui/button';
// // // // // // import { Toggle } from '@/components/ui/toggle';
// // // // // // import { useToast } from '@/components/ui/use-toast';
// // // // // // import { Check, X, Loader2 } from 'lucide-react';

// // // // // // const PlayerRow = ({ player, onToggle, saving }) => (
// // // // // //   <div className="flex items-center justify-between p-2 hover:bg-gray-600/50 rounded transition-colors">
// // // // // //     <div className="flex items-center gap-3 flex-1 min-w-0">
// // // // // //       <img
// // // // // //         src={player.imgURL || "/fallback-player.png"}
// // // // // //         alt={player.name}
// // // // // //         className="w-6 h-6 rounded-full object-cover"
// // // // // //         onError={(e) => {
// // // // // //           e.currentTarget.src = "/fallback-player.png";
// // // // // //         }}
// // // // // //       />
// // // // // //       <div className="flex-1 min-w-0">
// // // // // //         <p className={`text-sm font-medium truncate ${player.substitute ? 'text-gray-400' : ''}`}>
// // // // // //           {player.name}
// // // // // //         </p>
// // // // // //         <p className="text-xs text-gray-400 truncate">
// // // // // //           {player.role}
// // // // // //         </p>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //     <Toggle
// // // // // //       variant="outline"
// // // // // //       aria-label="Toggle player status"
// // // // // //       pressed={!player.substitute}
// // // // // //       onPressedChange={() => onToggle(player.id)}
// // // // // //       disabled={saving}
// // // // // //       className={`data-[state=on]:bg-green-600 data-[state=on]:text-white data-[state=off]:bg-red-600 data-[state=off]:text-white h-8 w-8 p-0`}
// // // // // //     >
// // // // // //       {!player.substitute ? (
// // // // // //         <Check className="h-4 w-4" />
// // // // // //       ) : (
// // // // // //         <X className="h-4 w-4" />
// // // // // //       )}
// // // // // //     </Toggle>
// // // // // //   </div>
// // // // // // );

// // // // // // const TeamSquadManager = ({ team, matchId }) => {
// // // // // //   const [saving, setSaving] = useState(false);
// // // // // //   const [players, setPlayers] = useState([]);
// // // // // //   const { toast } = useToast();

// // // // // //   // Initialize players state
// // // // // //   useEffect(() => {
// // // // // //     if (team?.playerDetails) {
// // // // // //       const playing = team.playerDetails.filter(p => !p.substitute);
// // // // // //       const substitutes = team.playerDetails.filter(p => p.substitute);
// // // // // //       setPlayers([...playing, ...substitutes]);
// // // // // //     }
// // // // // //   }, [team]);

// // // // // //   const togglePlayerStatus = useCallback((playerId) => {
// // // // // //     setPlayers(prevPlayers =>
// // // // // //       prevPlayers.map(player =>
// // // // // //         player.id === playerId
// // // // // //           ? { ...player, substitute: !player.substitute }
// // // // // //           : player
// // // // // //       )
// // // // // //     );
// // // // // //   }, []);

// // // // // //   const saveChanges = async () => {
// // // // // //     if (!matchId || !team?.id) return;

// // // // // //     setSaving(true);
// // // // // //     try {
// // // // // //       const teamRef = doc(db, "matchinfo", matchId);
// // // // // //       const teamField = team.id === team.team1?.id ? 'team1' : 'team2';

// // // // // //       await updateDoc(teamRef, {
// // // // // //         [`matchInfo.${teamField}.playerDetails`]: players
// // // // // //       });

// // // // // //       toast({
// // // // // //         title: "Success",
// // // // // //         description: "Team squad updated successfully!",
// // // // // //         variant: "default",
// // // // // //       });
// // // // // //     } catch (error) {
// // // // // //       console.error("Error updating squad:", error);
// // // // // //       toast({
// // // // // //         title: "Error",
// // // // // //         description: "Failed to update squad",
// // // // // //         variant: "destructive",
// // // // // //       });
// // // // // //     } finally {
// // // // // //       setSaving(false);
// // // // // //     }
// // // // // //   };

// // // // // //   if (!team?.playerDetails?.length) {
// // // // // //     return (
// // // // // //       <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
// // // // // //         <div className="flex items-center gap-3 mb-4">
// // // // // //           <img
// // // // // //             src={team?.image || '/fallback-team.png'}
// // // // // //             alt={team?.name}
// // // // // //             className="w-8 h-8 object-contain"
// // // // // //             onError={(e) => {
// // // // // //               e.currentTarget.src = '/fallback-team.png';
// // // // // //             }}
// // // // // //           />
// // // // // //           <h3 className="font-semibold">{team?.name || 'Team'}</h3>
// // // // // //         </div>
// // // // // //         <p className="text-gray-400 text-sm">No player data available</p>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   const playingPlayers = players.filter(p => !p.substitute);
// // // // // //   const substitutePlayers = players.filter(p => p.substitute);

// // // // // //   return (
// // // // // //     <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
// // // // // //       <div className="flex items-center gap-3 mb-6">
// // // // // //         <img
// // // // // //           src={team.image || '/fallback-team.png'}
// // // // // //           alt={team.name}
// // // // // //           className="w-8 h-8 object-contain"
// // // // // //           onError={(e) => {
// // // // // //             e.currentTarget.src = '/fallback-team.png';
// // // // // //           }}
// // // // // //         />
// // // // // //         <h3 className="font-semibold">{team.name}</h3>
// // // // // //       </div>

// // // // // //       <div className="space-y-6">
// // // // // //         <div>
// // // // // //           <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
// // // // // //             <span className="w-2 h-2 rounded-full bg-green-500"></span>
// // // // // //             Playing XI ({playingPlayers.length})
// // // // // //           </h4>
// // // // // //           <div className="space-y-2 border-l-2 border-green-500/30 pl-3">
// // // // // //             {playingPlayers.length > 0 ? (
// // // // // //               playingPlayers.map(player => (
// // // // // //                 <PlayerRow
// // // // // //                   key={player.id}
// // // // // //                   player={player}
// // // // // //                   onToggle={togglePlayerStatus}
// // // // // //                   saving={saving}
// // // // // //                 />
// // // // // //               ))
// // // // // //             ) : (
// // // // // //               <p className="text-gray-400 text-sm py-2">No players selected</p>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <div>
// // // // // //           <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
// // // // // //             <span className="w-2 h-2 rounded-full bg-red-500"></span>
// // // // // //             Substitutes ({substitutePlayers.length})
// // // // // //           </h4>
// // // // // //           <div className="space-y-2 border-l-2 border-red-500/30 pl-3">
// // // // // //             {substitutePlayers.length > 0 ? (
// // // // // //               substitutePlayers.map(player => (
// // // // // //                 <PlayerRow
// // // // // //                   key={player.id}
// // // // // //                   player={player}
// // // // // //                   onToggle={togglePlayerStatus}
// // // // // //                   saving={saving}
// // // // // //                 />
// // // // // //               ))
// // // // // //             ) : (
// // // // // //               <p className="text-gray-400 text-sm py-2">No substitutes selected</p>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <Button
// // // // // //         onClick={saveChanges}
// // // // // //         disabled={saving}
// // // // // //         className="w-full mt-6"
// // // // // //       >
// // // // // //         {saving ? (
// // // // // //           <>
// // // // // //             <Loader2 className="mr-2 h-4 w-4 animate-spin" />
// // // // // //             Saving...
// // // // // //           </>
// // // // // //         ) : (
// // // // // //           'Save Changes'
// // // // // //         )}
// // // // // //       </Button>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default TeamSquadManager;





// // // // // // working good version


// // // // // 'use client';

// // // // // import { useState, useCallback, useEffect } from 'react';
// // // // // import { doc, updateDoc } from 'firebase/firestore';
// // // // // import { db } from '@/app/lib/firebase';
// // // // // import { Button } from '@/components/ui/button';
// // // // // import { Toggle } from '@/components/ui/toggle';
// // // // // import { toast } from 'sonner';
// // // // // import { Check, X, Loader2 } from 'lucide-react';

// // // // // const PlayerRow = ({ player, onToggle, saving }) => (
// // // // //   <div className="flex items-center justify-between p-2 hover:bg-gray-600/50 rounded transition-colors">
// // // // //     <div className="flex items-center gap-3 flex-1 min-w-0">
// // // // //       <img
// // // // //         src={player.imgURL || "/fallback-player.png"}
// // // // //         alt={player.name}
// // // // //         className="w-6 h-6 rounded-full object-cover"
// // // // //         onError={(e) => {
// // // // //           e.currentTarget.src = "/fallback-player.png";
// // // // //         }}
// // // // //       />
// // // // //       <div className="flex-1 min-w-0">
// // // // //         <p className={`text-sm font-medium truncate ${player.substitute ? 'text-gray-400' : ''}`}>
// // // // //           {player.name}
// // // // //         </p>
// // // // //         <p className="text-xs text-gray-400 truncate">
// // // // //           {player.role}
// // // // //         </p>
// // // // //       </div>
// // // // //     </div>
// // // // //     <Toggle
// // // // //       variant="outline"
// // // // //       aria-label="Toggle player status"
// // // // //       pressed={!player.substitute}
// // // // //       onPressedChange={() => onToggle(player.id)}
// // // // //       disabled={saving}
// // // // //       className={`data-[state=on]:bg-green-600 data-[state=on]:text-white data-[state=off]:bg-red-600 data-[state=off]:text-white h-8 w-8 p-0`}
// // // // //     >
// // // // //       {!player.substitute ? (
// // // // //         <Check className="h-4 w-4" />
// // // // //       ) : (
// // // // //         <X className="h-4 w-4" />
// // // // //       )}
// // // // //     </Toggle>
// // // // //   </div>
// // // // // );

// // // // // const TeamSquadManager = ({ team, matchId }) => {
// // // // //   const [saving, setSaving] = useState(false);
// // // // //   const [players, setPlayers] = useState([]);

// // // // //   // Initialize players state
// // // // //   useEffect(() => {
// // // // //     if (team?.playerDetails) {
// // // // //       const playing = team.playerDetails.filter(p => !p.substitute);
// // // // //       const substitutes = team.playerDetails.filter(p => p.substitute);
// // // // //       setPlayers([...playing, ...substitutes]);
// // // // //     }
// // // // //   }, [team]);

// // // // //   const togglePlayerStatus = useCallback((playerId) => {
// // // // //     setPlayers(prevPlayers =>
// // // // //       prevPlayers.map(player =>
// // // // //         player.id === playerId
// // // // //           ? { ...player, substitute: !player.substitute }
// // // // //           : player
// // // // //       )
// // // // //     );
// // // // //   }, []);

// // // // //   const saveChanges = async () => {
// // // // //     if (!matchId || !team?.id) return;

// // // // //     setSaving(true);
// // // // //     try {
// // // // //       const teamRef = doc(db, "matchinfo", matchId);
// // // // //       const teamField = team.id === team.team1?.id ? 'team1' : 'team2';

// // // // //       const savePromise = updateDoc(teamRef, {
// // // // //         [`matchInfo.${teamField}.playerDetails`]: players
// // // // //       });

// // // // //       toast.promise(savePromise, {
// // // // //         loading: 'Saving squad changes...',
// // // // //         success: () => {
// // // // //           return 'Team squad updated successfully!';
// // // // //         },
// // // // //         error: 'Failed to update squad',
// // // // //       });

// // // // //       await savePromise;
// // // // //     } catch (error) {
// // // // //       console.error("Error updating squad:", error);
// // // // //     } finally {
// // // // //       setSaving(false);
// // // // //     }
// // // // //   };

// // // // //   if (!team?.playerDetails?.length) {
// // // // //     return (
// // // // //       <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
// // // // //         <div className="flex items-center gap-3 mb-4">
// // // // //           <img
// // // // //             src={team?.image || '/fallback-team.png'}
// // // // //             alt={team?.name}
// // // // //             className="w-8 h-8 object-contain"
// // // // //             onError={(e) => {
// // // // //               e.currentTarget.src = '/fallback-team.png';
// // // // //             }}
// // // // //           />
// // // // //           <h3 className="font-semibold">{team?.name || 'Team'}</h3>
// // // // //         </div>
// // // // //         <p className="text-gray-400 text-sm">No player data available</p>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   const playingPlayers = players.filter(p => !p.substitute);
// // // // //   const substitutePlayers = players.filter(p => p.substitute);

// // // // //   return (
// // // // //     <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
// // // // //       <div className="flex items-center gap-3 mb-6">
// // // // //         <img
// // // // //           src={team.image || '/fallback-team.png'}
// // // // //           alt={team.name}
// // // // //           className="w-8 h-8 object-contain"
// // // // //           onError={(e) => {
// // // // //             e.currentTarget.src = '/fallback-team.png';
// // // // //           }}
// // // // //         />
// // // // //         <h3 className="font-semibold">{team.name}</h3>
// // // // //       </div>

// // // // //       <div className="space-y-6">
// // // // //         <div>
// // // // //           <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
// // // // //             <span className="w-2 h-2 rounded-full bg-green-500"></span>
// // // // //             Playing XI ({playingPlayers.length})
// // // // //           </h4>
// // // // //           <div className="space-y-2 border-l-2 border-green-500/30 pl-3">
// // // // //             {playingPlayers.length > 0 ? (
// // // // //               playingPlayers.map(player => (
// // // // //                 <PlayerRow
// // // // //                   key={player.id}
// // // // //                   player={player}
// // // // //                   onToggle={togglePlayerStatus}
// // // // //                   saving={saving}
// // // // //                 />
// // // // //               ))
// // // // //             ) : (
// // // // //               <p className="text-gray-400 text-sm py-2">No players selected</p>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>

// // // // //         <div>
// // // // //           <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
// // // // //             <span className="w-2 h-2 rounded-full bg-red-500"></span>
// // // // //             Substitutes ({substitutePlayers.length})
// // // // //           </h4>
// // // // //           <div className="space-y-2 border-l-2 border-red-500/30 pl-3">
// // // // //             {substitutePlayers.length > 0 ? (
// // // // //               substitutePlayers.map(player => (
// // // // //                 <PlayerRow
// // // // //                   key={player.id}
// // // // //                   player={player}
// // // // //                   onToggle={togglePlayerStatus}
// // // // //                   saving={saving}
// // // // //                 />
// // // // //               ))
// // // // //             ) : (
// // // // //               <p className="text-gray-400 text-sm py-2">No substitutes selected</p>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <Button
// // // // //         onClick={saveChanges}
// // // // //         disabled={saving}
// // // // //         className="w-full mt-6"
// // // // //       >
// // // // //         {saving ? (
// // // // //           <>
// // // // //             <Loader2 className="mr-2 h-4 w-4 animate-spin" />
// // // // //             Saving...
// // // // //           </>
// // // // //         ) : (
// // // // //           'Save Changes'
// // // // //         )}
// // // // //       </Button>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default TeamSquadManager;








// // // // // app/matches/[matchId]/components/TeamSquadManager.jsx



// // // // 'use client';

// // // // import { useState, useEffect } from 'react';
// // // // import { doc, updateDoc, onSnapshot } from 'firebase/firestore';
// // // // import { db } from '@/app/lib/firebase';
// // // // import { Button } from '@/components/ui/button';
// // // // import { Switch } from '@/components/ui/switch';
// // // // import { toast } from 'sonner';
// // // // import { Loader2, RefreshCw } from 'lucide-react';

// // // // const PlayerRow = ({ player, onToggle, saving }) => (
// // // //   <div className="flex items-center justify-between p-3 hover:bg-gray-100 rounded transition-colors border-b">
// // // //     <div className="flex items-center gap-3 flex-1 min-w-0">
// // // //       <img
// // // //         src={player.imgURL || "/fallback-player.png"}
// // // //         alt={player.name}
// // // //         className="w-8 h-8 rounded-full object-cover border"
// // // //         onError={(e) => {
// // // //           e.currentTarget.src = "/fallback-player.png";
// // // //         }}
// // // //       />
// // // //       <div className="flex-1 min-w-0">
// // // //         <p className={`text-sm font-medium truncate ${player.substitute ? 'text-gray-500' : 'text-gray-900'}`}>
// // // //           {player.name}
// // // //         </p>
// // // //         <p className="text-xs text-gray-500 truncate">
// // // //           {player.role}
// // // //         </p>
// // // //       </div>
// // // //     </div>
// // // //     <div className="flex items-center gap-2">
// // // //       <span className={`text-xs ${player.substitute ? 'text-red-500' : 'text-green-500'}`}>
// // // //         {player.substitute ? 'Substitute' : 'Playing'}
// // // //       </span>
// // // //       <Switch
// // // //         checked={!player.substitute}
// // // //         onCheckedChange={() => onToggle(player.id)}
// // // //         disabled={saving}
// // // //         className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
// // // //       />
// // // //     </div>
// // // //   </div>
// // // // );

// // // // export default function TeamSquadManager({ team, matchId }) {
// // // //   const [saving, setSaving] = useState(false);
// // // //   const [players, setPlayers] = useState([]);
// // // //   const [refreshing, setRefreshing] = useState(false);

// // // //   // Fetch and listen for real-time updates
// // // //   useEffect(() => {
// // // //     if (!matchId || !team?.id) return;

// // // //     const unsubscribe = onSnapshot(doc(db, "matchinfo", matchId), (doc) => {
// // // //       if (doc.exists()) {
// // // //         const matchData = doc.data();
// // // //         const teamField = team.id === matchData.matchInfo.team1.id ? 'team1' : 'team2';
// // // //         const teamPlayers = matchData.matchInfo[teamField]?.playerDetails || [];
// // // //         setPlayers(teamPlayers);
// // // //       }
// // // //       setRefreshing(false);
// // // //     });

// // // //     return () => unsubscribe();
// // // //   }, [matchId, team.id]);

// // // //   const togglePlayerStatus = async (playerId) => {
// // // //     setSaving(true);
// // // //     try {
// // // //       const updatedPlayers = players.map(player =>
// // // //         player.id === playerId
// // // //           ? { ...player, substitute: !player.substitute }
// // // //           : player
// // // //       );

// // // //       const teamRef = doc(db, "matchinfo", matchId);
// // // //       const teamField = team.id === team.team1?.id ? 'team1' : 'team2';

// // // //       await updateDoc(teamRef, {
// // // //         [`matchInfo.${teamField}.playerDetails`]: updatedPlayers
// // // //       });

// // // //       toast.success('Player status updated');
// // // //     } catch (error) {
// // // //       console.error("Error updating player:", error);
// // // //       toast.error("Failed to update player status");
// // // //     } finally {
// // // //       setSaving(false);
// // // //     }
// // // //   };

// // // //   const refreshData = () => {
// // // //     setRefreshing(true);
// // // //   };

// // // //   if (!players.length) {
// // // //     return (
// // // //       <div className="bg-white p-4 rounded-lg border shadow-sm">
// // // //         <div className="flex items-center justify-between gap-3 mb-4">
// // // //           <div className="flex items-center gap-2">
// // // //             <img
// // // //               src={team?.image || '/fallback-team.png'}
// // // //               alt={team?.name}
// // // //               className="w-8 h-8 object-contain"
// // // //               onError={(e) => {
// // // //                 e.currentTarget.src = '/fallback-team.png';
// // // //               }}
// // // //             />
// // // //             <h3 className="font-semibold">{team?.name || 'Team'}</h3>
// // // //           </div>
// // // //           <Button
// // // //             variant="outline"
// // // //             size="sm"
// // // //             onClick={refreshData}
// // // //             disabled={refreshing}
// // // //           >
// // // //             {refreshing ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
// // // //           </Button>
// // // //         </div>
// // // //         <p className="text-gray-500 text-sm">No player data available</p>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   const playingPlayers = players.filter(p => !p.substitute);
// // // //   const substitutePlayers = players.filter(p => p.substitute);

// // // //   return (
// // // //     <div className="bg-white p-4 rounded-lg border shadow-sm">
// // // //       <div className="flex items-center justify-between gap-3 mb-6">
// // // //         <div className="flex items-center gap-2">
// // // //           <img
// // // //             src={team.image || '/fallback-team.png'}
// // // //             alt={team.name}
// // // //             className="w-8 h-8 object-contain"
// // // //             onError={(e) => {
// // // //               e.currentTarget.src = '/fallback-team.png';
// // // //             }}
// // // //           />
// // // //           <h3 className="font-semibold">{team.name}</h3>
// // // //         </div>
// // // //         <Button
// // // //           variant="outline"
// // // //           size="sm"
// // // //           onClick={refreshData}
// // // //           disabled={refreshing}
// // // //         >
// // // //           {refreshing ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
// // // //         </Button>
// // // //       </div>

// // // //       <div className="space-y-6">
// // // //         <div>
// // // //           <h4 className="font-medium text-sm mb-3 flex items-center gap-2 text-gray-700">
// // // //             <span className="w-2 h-2 rounded-full bg-green-500"></span>
// // // //             Playing XI ({playingPlayers.length})
// // // //           </h4>
// // // //           <div className="space-y-1 border-l-2 border-green-500/30 pl-3">
// // // //             {playingPlayers.length > 0 ? (
// // // //               playingPlayers.map(player => (
// // // //                 <PlayerRow
// // // //                   key={player.id}
// // // //                   player={player}
// // // //                   onToggle={togglePlayerStatus}
// // // //                   saving={saving}
// // // //                 />
// // // //               ))
// // // //             ) : (
// // // //               <p className="text-gray-500 text-sm py-2 pl-4">No players selected</p>
// // // //             )}
// // // //           </div>
// // // //         </div>

// // // //         <div>
// // // //           <h4 className="font-medium text-sm mb-3 flex items-center gap-2 text-gray-700">
// // // //             <span className="w-2 h-2 rounded-full bg-red-500"></span>
// // // //             Substitutes ({substitutePlayers.length})
// // // //           </h4>
// // // //           <div className="space-y-1 border-l-2 border-red-500/30 pl-3">
// // // //             {substitutePlayers.length > 0 ? (
// // // //               substitutePlayers.map(player => (
// // // //                 <PlayerRow
// // // //                   key={player.id}
// // // //                   player={player}
// // // //                   onToggle={togglePlayerStatus}
// // // //                   saving={saving}
// // // //                 />
// // // //               ))
// // // //             ) : (
// // // //               <p className="text-gray-500 text-sm py-2 pl-4">No substitutes selected</p>
// // // //             )}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // // TeamSquadManager.jsx




// // // 'use client';

// // // import { useState, useEffect } from 'react';
// // // import { doc, updateDoc } from 'firebase/firestore';
// // // import { db } from '@/app/lib/firebase';
// // // import { Button } from '@/components/ui/button';
// // // import { Switch } from '@/components/ui/switch';
// // // import { toast } from 'sonner';
// // // import { Loader2, RefreshCw, Save } from 'lucide-react';

// // // const PlayerRow = ({ player, onToggle, isPlaying }) => (
// // //   <div className="flex items-center justify-between p-3 hover:bg-gray-100 rounded transition-colors border-b">
// // //     <div className="flex items-center gap-3 flex-1 min-w-0">
// // //       <img
// // //         src={player.imgURL || "/fallback-player.png"}
// // //         alt={player.name}
// // //         className="w-8 h-8 rounded-full object-cover border"
// // //         onError={(e) => {
// // //           e.currentTarget.src = "/fallback-player.png";
// // //         }}
// // //       />
// // //       <div className="flex-1 min-w-0">
// // //         <p className={`text-sm font-medium truncate ${!isPlaying ? 'text-gray-500' : 'text-gray-900'}`}>
// // //           {player.name}
// // //         </p>
// // //         <p className="text-xs text-gray-500 truncate">
// // //           {player.role}
// // //         </p>
// // //       </div>
// // //     </div>
// // //     <div className="flex items-center gap-2">
// // //       <Switch
// // //         checked={isPlaying}
// // //         onCheckedChange={() => onToggle(player.id)}
// // //         className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
// // //       />
// // //       <span className={`text-xs ${isPlaying ? 'text-green-500' : 'text-red-500'}`}>
// // //         {isPlaying ? 'Playing' : 'Substitute'}
// // //       </span>
// // //     </div>
// // //   </div>
// // // );

// // // export default function TeamSquadManager({ team, teamType, matchId, matchData }) {
// // //   const [saving, setSaving] = useState(false);
// // //   const [players, setPlayers] = useState([]);
// // //   const [modifiedPlayers, setModifiedPlayers] = useState({});
// // //   const [refreshing, setRefreshing] = useState(false);

// // //   // Initialize players data for the specific team
// // //   useEffect(() => {
// // //     if (matchData && teamType) {
// // //       const teamPlayers = matchData.matchInfo[teamType]?.playerDetails || [];
// // //       setPlayers(teamPlayers);
// // //       setModifiedPlayers({});
// // //     }
// // //   }, [matchData, teamType]);

// // //   const togglePlayerStatus = (playerId) => {
// // //     setModifiedPlayers(prev => {
// // //       const currentStatus = prev[playerId] ??
// // //         players.find(p => p.id === playerId)?.substitute ?? true;
// // //       return {
// // //         ...prev,
// // //         [playerId]: !currentStatus
// // //       };
// // //     });
// // //   };

// // //   const saveChanges = async () => {
// // //     if (!matchId || !teamType) return;
    
// // //     setSaving(true);
// // //     try {
// // //       // Create updated players array
// // //       const updatedPlayers = players.map(player => {
// // //         if (player.id in modifiedPlayers) {
// // //           return {
// // //             ...player,
// // //             substitute: modifiedPlayers[player.id]
// // //           };
// // //         }
// // //         return player;
// // //       });

// // //       const matchRef = doc(db, "matchinfo", matchId);
      
// // //       // Update only the specific team's player details
// // //       await updateDoc(matchRef, {
// // //         [`matchInfo.${teamType}.playerDetails`]: updatedPlayers
// // //       });

// // //       toast.success(`${team.name} squad updated successfully`);
// // //       setModifiedPlayers({}); // Reset modifications after save
// // //     } catch (error) {
// // //       console.error("Error updating team squad:", error);
// // //       toast.error("Failed to update team squad");
// // //     } finally {
// // //       setSaving(false);
// // //     }
// // //   };

// // //   const refreshData = () => {
// // //     setRefreshing(true);
// // //     // The parent component's real-time listener will handle the refresh
// // //     setTimeout(() => setRefreshing(false), 1000);
// // //   };

// // //   const hasChanges = Object.keys(modifiedPlayers).length > 0;

// // //   // Get current player status (modified or original)
// // //   const getPlayerStatus = (playerId) => {
// // //     if (playerId in modifiedPlayers) {
// // //       return !modifiedPlayers[playerId]; // Return the modified status (inverted because substitute is stored)
// // //     }
// // //     const player = players.find(p => p.id === playerId);
// // //     return !player?.substitute; // Return original status
// // //   };

// // //   return (
// // //     <div className="bg-white p-4 rounded-lg border shadow-sm">
// // //       <div className="flex items-center justify-between gap-3 mb-6">
// // //         <div className="flex items-center gap-2">
// // //           <img
// // //             src={team.image || '/fallback-team.png'}
// // //             alt={team.name}
// // //             className="w-8 h-8 object-contain"
// // //             onError={(e) => {
// // //               e.currentTarget.src = '/fallback-team.png';
// // //             }}
// // //           />
// // //           <h3 className="font-semibold">{team.name}</h3>
// // //         </div>
// // //         <div className="flex gap-2">
// // //           <Button
// // //             variant="outline"
// // //             size="sm"
// // //             onClick={refreshData}
// // //             disabled={refreshing}
// // //           >
// // //             {refreshing ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
// // //           </Button>
// // //           <Button
// // //             size="sm"
// // //             onClick={saveChanges}
// // //             disabled={!hasChanges || saving}
// // //           >
// // //             {saving ? (
// // //               <Loader2 className="h-4 w-4 animate-spin mr-2" />
// // //             ) : (
// // //               <Save className="h-4 w-4 mr-2" />
// // //             )}
// // //             Save
// // //           </Button>
// // //         </div>
// // //       </div>

// // //       <div className="space-y-4">
// // //         <div>
// // //           <h4 className="font-medium text-sm mb-3 text-gray-700">
// // //             Squad ({players.length} players)
// // //           </h4>
// // //           <div className="space-y-1">
// // //             {players.length > 0 ? (
// // //               players.map(player => {
// // //                 const isPlaying = getPlayerStatus(player.id);
// // //                 return (
// // //                   <PlayerRow
// // //                     key={player.id}
// // //                     player={player}
// // //                     onToggle={togglePlayerStatus}
// // //                     isPlaying={isPlaying}
// // //                   />
// // //                 );
// // //               })
// // //             ) : (
// // //               <p className="text-gray-500 text-sm py-2 pl-4">No players available</p>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {hasChanges && (
// // //         <div className="mt-6 pt-4 border-t flex justify-end">
// // //           <Button
// // //             onClick={saveChanges}
// // //             disabled={saving}
// // //           >
// // //             {saving ? (
// // //               <Loader2 className="h-4 w-4 animate-spin mr-2" />
// // //             ) : (
// // //               <Save className="h-4 w-4 mr-2" />
// // //             )}
// // //             Save Changes
// // //           </Button>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }









// // 'use client';

// // import { useState, useEffect } from 'react';
// // import { doc, updateDoc } from 'firebase/firestore';
// // import { db } from '@/app/lib/firebase';
// // import { Button } from '@/components/ui/button';
// // import { Switch } from '@/components/ui/switch';
// // import { toast } from 'sonner';
// // import { Loader2, RefreshCw, Save } from 'lucide-react';

// // const PlayerRow = ({ player, onToggle, isPlaying }) => (
// //   <div className="flex items-center justify-between p-3 hover:bg-gray-100 rounded transition-colors border-b">
// //     <div className="flex items-center gap-3 flex-1 min-w-0">
// //       <img
// //         src={player.imgURL || "/fallback-player.png"}
// //         alt={player.name}
// //         className="w-8 h-8 rounded-full object-cover border"
// //         onError={(e) => {
// //           e.currentTarget.src = "/fallback-player.png";
// //         }}
// //       />
// //       <div className="flex-1 min-w-0">
// //         <p className={`text-sm font-medium truncate ${!isPlaying ? 'text-gray-500' : 'text-gray-900'}`}>
// //           {player.name}
// //         </p>
// //         <p className="text-xs text-gray-500 truncate">
// //           {player.role}
// //         </p>
// //       </div>
// //     </div>
// //     <div className="flex items-center gap-2">
// //       <Switch
// //         checked={isPlaying}
// //         onCheckedChange={() => onToggle(player.id)}
// //         className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
// //       />
// //       <span className={`text-xs ${isPlaying ? 'text-green-500' : 'text-red-500'}`}>
// //         {isPlaying ? 'Playing' : 'Substitute'}
// //       </span>
// //     </div>
// //   </div>
// // );

// // export default function TeamSquadManager({ team, teamType, matchId, matchData }) {
// //   const [saving, setSaving] = useState(false);
// //   const [players, setPlayers] = useState([]);
// //   const [modifiedPlayers, setModifiedPlayers] = useState({});
// //   const [refreshing, setRefreshing] = useState(false);

// //   // Initialize players data for the specific team
// //   useEffect(() => {
// //     if (matchData && teamType) {
// //       const teamData = matchData.matchInfo[teamType];
// //       if (teamData && teamData.playerDetails) {
// //         setPlayers(teamData.playerDetails);
// //       }
// //       setModifiedPlayers({});
// //     }
// //   }, [matchData, teamType]);

// //   const togglePlayerStatus = (playerId) => {
// //     setModifiedPlayers(prev => ({
// //       ...prev,
// //       [playerId]: !(prev[playerId] ?? players.find(p => p.id === playerId)?.substitute ?? true)
// //     }));
// //   };

// //   const saveChanges = async () => {
// //     if (!matchId || !teamType) return;
    
// //     setSaving(true);
// //     try {
// //       const updatedPlayers = players.map(player => ({
// //         ...player,
// //         substitute: player.id in modifiedPlayers
// //           ? modifiedPlayers[player.id]
// //           : player.substitute
// //       }));

// //       await updateDoc(doc(db, "matchinfo", matchId), {
// //         [`matchInfo.${teamType}.playerDetails`]: updatedPlayers
// //       });

// //       toast.success(`${team.name} squad updated`);
// //       setModifiedPlayers({});
// //     } catch (error) {
// //       console.error("Error updating squad:", error);
// //       toast.error("Failed to update squad");
// //     } finally {
// //       setSaving(false);
// //     }
// //   };

// //   const refreshData = () => {
// //     setRefreshing(true);
// //     setTimeout(() => setRefreshing(false), 1000);
// //   };

// //   const hasChanges = Object.keys(modifiedPlayers).length > 0;

// //   const getPlayerStatus = (playerId) => {
// //     if (playerId in modifiedPlayers) {
// //       return !modifiedPlayers[playerId];
// //     }
// //     const player = players.find(p => p.id === playerId);
// //     return !player?.substitute;
// //   };

// //   return (
// //     <div className="bg-white p-4 rounded-lg border shadow-sm">
// //       <div className="flex items-center justify-between gap-3 mb-6">
// //         <div className="flex items-center gap-2">
// //           <img
// //             src={team.image || '/fallback-team.png'}
// //             alt={team.name}
// //             className="w-8 h-8 object-contain"
// //             onError={(e) => {
// //               e.currentTarget.src = '/fallback-team.png';
// //             }}
// //           />
// //           <h3 className="font-semibold">{team.name}</h3>
// //         </div>
// //         <div className="flex gap-2">
// //           <Button
// //             variant="outline"
// //             size="sm"
// //             onClick={refreshData}
// //             disabled={refreshing}
// //           >
// //             {refreshing ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
// //           </Button>
// //           <Button
// //             size="sm"
// //             onClick={saveChanges}
// //             disabled={!hasChanges || saving}
// //           >
// //             {saving ? (
// //               <Loader2 className="h-4 w-4 animate-spin mr-2" />
// //             ) : (
// //               <Save className="h-4 w-4 mr-2" />
// //             )}
// //             Save
// //           </Button>
// //         </div>
// //       </div>

// //       <div className="space-y-4">
// //         <div>
// //           <h4 className="font-medium text-sm mb-3 text-gray-700">
// //             Squad ({players.length} players)
// //           </h4>
// //           <div className="space-y-1">
// //             {players.length > 0 ? (
// //               players.map(player => (
// //                 <PlayerRow
// //                   key={player.id}
// //                   player={player}
// //                   onToggle={togglePlayerStatus}
// //                   isPlaying={getPlayerStatus(player.id)}
// //                 />
// //               ))
// //             ) : (
// //               <p className="text-gray-500 text-sm py-2 pl-4">No players available</p>
// //             )}
// //           </div>
// //         </div>
// //       </div>

// //       {hasChanges && (
// //         <div className="mt-6 pt-4 border-t flex justify-end">
// //           <Button
// //             onClick={saveChanges}
// //             disabled={saving}
// //           >
// //             {saving ? (
// //               <Loader2 className="h-4 w-4 animate-spin mr-2" />
// //             ) : (
// //               <Save className="h-4 w-4 mr-2" />
// //             )}
// //             Save Changes
// //           </Button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }








// // TeamSquadManager.jsx

// 'use client';

// import { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Switch } from '@/components/ui/switch';
// import { toast } from 'sonner';
// import { Loader2, RefreshCw } from 'lucide-react';

// const PlayerRow = ({ player, onToggle, isPlaying }) => (
//   <div className="flex items-center justify-between p-3 hover:bg-gray-100 rounded transition-colors border-b">
//     <div className="flex items-center gap-3 flex-1 min-w-0">
//       <img
//         src={player.imgURL || "/fallback-player.png"}
//         alt={player.name}
//         className="w-8 h-8 rounded-full object-cover border"
//         onError={(e) => {
//           e.currentTarget.src = "/fallback-player.png";
//         }}
//       />
//       <div className="flex-1 min-w-0">
//         <p className={`text-sm font-medium truncate ${!isPlaying ? 'text-gray-500' : 'text-gray-900'}`}>
//           {player.name}
//         </p>
//         <p className="text-xs text-gray-500 truncate">
//           {player.role}
//         </p>
//       </div>
//     </div>
//     <div className="flex items-center gap-2">
//       <Switch
//         checked={isPlaying}
//         onCheckedChange={() => onToggle(player.id, !isPlaying)}
//         className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
//       />
//       <span className={`text-xs ${isPlaying ? 'text-green-500' : 'text-red-500'}`}>
//         {isPlaying ? 'Playing' : 'Substitute'}
//       </span>
//     </div>
//   </div>
// );

// export default function TeamSquadManager({ 
//   team, 
//   teamType, 
//   matchId, 
//   matchData,
//   onPlayerToggle,
//   modifiedPlayers
// }) {
//   const [players, setPlayers] = useState([]);
//   const [refreshing, setRefreshing] = useState(false);

//   useEffect(() => {
//     if (matchData && teamType) {
//       const teamPlayers = matchData.matchInfo[teamType]?.playerDetails || [];
//       setPlayers(teamPlayers);
//     }
//   }, [matchData, teamType]);

//   const refreshData = () => {
//     setRefreshing(true);
//     setTimeout(() => setRefreshing(false), 1000);
//   };

//   const getPlayerStatus = (playerId) => {
//     if (playerId in modifiedPlayers) {
//       return !modifiedPlayers[playerId];
//     }
//     const player = players.find(p => p.id === playerId);
//     return !player?.substitute;
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg border shadow-sm">
//       <div className="flex items-center justify-between gap-3 mb-6">
//         <div className="flex items-center gap-2">
//           <img
//             src={team.image || '/fallback-team.png'}
//             alt={team.name}
//             className="w-8 h-8 object-contain"
//             onError={(e) => {
//               e.currentTarget.src = '/fallback-team.png';
//             }}
//           />
//           <h3 className="font-semibold">{team.name}</h3>
//         </div>
//         <Button 
//           variant="outline" 
//           size="sm" 
//           onClick={refreshData}
//           disabled={refreshing}
//         >
//           {refreshing ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
//         </Button>
//       </div>

//       <div className="space-y-4">
//         <div>
//           <h4 className="font-medium text-sm mb-3 text-gray-700">
//             Squad ({players.length} players)
//           </h4>
//           <div className="space-y-1">
//             {players.length > 0 ? (
//               players.map(player => (
//                 <PlayerRow
//                   key={player.id}
//                   player={player}
//                   onToggle={onPlayerToggle}
//                   isPlaying={getPlayerStatus(player.id)}
//                 />
//               ))
//             ) : (
//               <p className="text-gray-500 text-sm py-2 pl-4">No players available</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// TeamSquadManager.jsx
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Loader2, RefreshCw } from 'lucide-react';

const PlayerRow = ({ player, onToggle, isPlaying }) => {
  // Add local state for immediate visual feedback
  const [localPlaying, setLocalPlaying] = useState(isPlaying);

  // Sync with parent state
  useEffect(() => {
    setLocalPlaying(isPlaying);
  }, [isPlaying]);

  const handleToggle = () => {
    const newState = !localPlaying;
    setLocalPlaying(newState); // Immediate visual feedback
    onToggle(player.id, newState); // Update parent state
  };

  return (
    <div className="flex items-center justify-between p-3 hover:bg-gray-100 rounded transition-colors border-b">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <img
          src={player.imgURL || "/fallback-player.png"}
          alt={player.name}
          className="w-8 h-8 rounded-full object-cover border"
          onError={(e) => {
            e.currentTarget.src = "/fallback-player.png";
          }}
        />
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-medium truncate ${!localPlaying ? 'text-gray-500' : 'text-gray-900'}`}>
            {player.name}
          </p>
          <p className="text-xs text-gray-500 truncate">
            {player.role}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          checked={localPlaying}
          onCheckedChange={handleToggle}
          className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
        />
        <span className={`text-xs ${localPlaying ? 'text-green-500' : 'text-red-500'}`}>
          {localPlaying ? 'Playing' : 'Substitute'}
        </span>
      </div>
    </div>
  );
};

export default function TeamSquadManager({ 
  team, 
  teamType, 
  matchData,
  onPlayerToggle,
  modifiedPlayers
}) {
  const [players, setPlayers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (matchData && teamType) {
      const teamPlayers = matchData.matchInfo[teamType]?.playerDetails || [];
      setPlayers(teamPlayers);
    }
  }, [matchData, teamType]);

  const refreshData = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const getPlayerStatus = (playerId) => {
    // Check modified players first
    if (modifiedPlayers && playerId in modifiedPlayers) {
      return !modifiedPlayers[playerId];
    }
    // Fall back to original data
    const player = players.find(p => p.id === playerId);
    return !player?.substitute;
  };

  return (
    <div className="bg-white p-4 rounded-lg border shadow-sm">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <img
            src={team.image || '/fallback-team.png'}
            alt={team.name}
            className="w-8 h-8 object-contain"
            onError={(e) => {
              e.currentTarget.src = '/fallback-team.png';
            }}
          />
          <h3 className="font-semibold">{team.name}</h3>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={refreshData}
          disabled={refreshing}
        >
          {refreshing ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-sm mb-3 text-gray-700">
            Squad ({players.length} players)
          </h4>
          <div className="space-y-1">
            {players.length > 0 ? (
              players.map(player => (
                <PlayerRow
                  key={player.id}
                  player={player}
                  onToggle={onPlayerToggle}
                  isPlaying={getPlayerStatus(player.id)}
                />
              ))
            ) : (
              <p className="text-gray-500 text-sm py-2 pl-4">No players available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}