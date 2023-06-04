import React from "react";
import BotCard from "./BotCard";

function BotCollection() {


  return (
    <div className="ui four column grid">
      <div className="row">
        <h1>Collection of all bots</h1>
        {bots.map((bots) => (
          <BotCard key={bots.id} bot={bots}  />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
