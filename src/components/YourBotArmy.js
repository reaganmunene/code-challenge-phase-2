import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBot }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          <h2>Your Bot Army</h2>
        </div>
        <div className="row">
          {bots.map((bot) => (
            <BotCard key={bot.id} bot={bot} removeBot={()=> removeBot} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
