import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);


 
  const handleAddBot = (bot) => {
    setBots([...bots, bot]);
  };

  
  const handleRemoveBot = (botId) => {
    setBots(bots.filter((bot) => bot.id !== botId));
  };

  
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((resp) => resp.json())
      .then((data) => setBots(bots));
  }, );


  return (
    <div>
      <YourBotArmy bots={bots} removeBot={handleRemoveBot} army={army} setArmy={setArmy} />
      <BotCollection  bots={bots} addBot={handleAddBot} army={army} setArmy={setArmy}  />
    </div>
  );
}

export default BotsPage;
