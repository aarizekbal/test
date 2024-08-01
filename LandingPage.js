import React from 'eact';  
  
function LandingPage({  
   user,  
   profitPerHour,  
   score,  
   rank,  
   upgrades,  
   selectedUpgrades,  
   tasks,  
   referrals,  
   leaderboard,  
   onTap,  
   onUpgradeSelect,  
   onTaskComplete,  
   onReferralInvite,  
}) {  
   return (  
      <div>  
        <div>  
           <img alt="Profile Image" src="{user.profileImage}">  
           <span>{user.name}</span>  
           <span>Rank: {rank}</span>  
           <span>Profit/Hour: {profitPerHour}</span>  
        </div>  
        <div>  
           <img alt="Coin" src="coin.png">  
           <span>{score}</span>  
        </div>  
        <div>  
           <ul>  
              <li>  
                <img alt="Mine" src="mine.png">  
                <span>Mine</span>  
              </li>  
              <li>  
                <img alt="Upgrades" src="upgrades.png">  
                <span>Upgrades</span>  
              </li>  
              <li>  
                <img alt="Referrals" src="referrals.png">  
                <span>Referrals</</span></li></ul></div></div>
