import React, { useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);

 
  const handleAddBot = (bot) => {
    setBots([...bots, bot]);
  };

  
  const handleRemoveBot = (botId) => {
    setBots(bots.filter((bot) => bot.id !== botId));
  };

  return (
    <div>
      <YourBotArmy bots={bots} removeBot={handleRemoveBot} />
      <BotCollection addBot={handleAddBot} />
    </div>
  );
}

export default BotsPage;
