import React, { useState, useEffect } from 'eact';  
import axios from 'axios';  
  
function App() {  
   const [user, setUser] = useState({});  
   const [profitPerHour, setProfitPerHour] = useState(0);  
   const [score, setScore] = useState(0);  
   const [rank, setRank] = useState(0);  
   const [upgrades, setUpgrades] = useState([]);  
   const [selectedUpgrades, setSelectedUpgrades] = useState([]);  
   const [tasks, setTasks] = useState([]);  
   const [referrals, setReferrals] = useState(0);  
   const [leaderboard, setLeaderboard] = useState([]);  
  
   useEffect(() => {  
      axios.get('/api/user')  
        .then(response => {  
           setUser(response.data);  
        })  
        .catch(error => {  
           console.error(error);  
        });  
   }, []);  
  
   // Handle tap event on the coin  
   const handleTap = () => {  
      axios.post('/api/tap')  
        .then(response => {  
           setScore(response.data.score);  
           setProfitPerHour(response.data.profitPerHour);  
        })  
        .catch(error => {  
           console.error(error);  
        });  
   };  
  
   // Handle upgrade selection  
   const handleUpgradeSelect = (upgradeId) => {  
      axios.post('/api/upgrade', { upgradeId })  
        .then(response => {  
           setUpgrades(response.data.upgrades);  
           setSelectedUpgrades(response.data.selectedUpgrades);  
        })  
        .catch(error => {  
           console.error(error);  
        });  
   };  
  
   // Handle task completion  
   const handleTaskComplete = (taskId) => {  
      axios.post('/api/task', { taskId })  
        .then(response => {  
           setScore(response.data.score);  
           setTasks(response.data.tasks);  
        })  
        .catch(error => {  
           console.error(error);  
        });  
   };  
  
   // Handle referral invite  
   const handleReferralInvite = () => {  
      axios.post('/api/referral')  
        .then(response => {  
           setReferrals(response.data.referrals);  
        })  
        .catch(error => {  
           console.error(error);  
        });  
   };  
  
   return (  
      <div>  
          
          
      </div>  
   );  
}  
  
export default App;
