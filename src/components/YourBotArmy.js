import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBot, addBot, handleDeleteBot }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          <h2>Your Bot Army</h2>
          {bots.map((bot) => (
            <BotCard key={bot.id} bot={bot} removeBot={()=> removeBot} deleteBot={handleDeleteBot} addBot={addBot} />
          ))}
        </div>
        </div>
    </div>
  );
}

export default YourBotArmy;
