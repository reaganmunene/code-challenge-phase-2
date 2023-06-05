import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addToArmy, dischargeBot }) {
  // Your code here
  const botCards = bots.map((bot) => (
    <BotCard key={bot.id} bot={bot} addToArmy={addToArmy} dischargeBot={dischargeBot}/>
  ))
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {botCards}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;