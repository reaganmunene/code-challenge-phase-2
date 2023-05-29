/*
import React, { useEffect, useState } from "react";
import BotSpecs from "./BotSpecs";

function BotCollection(props) {
  function BotImages() {
    const [image, setImage] = useState(null);

    useEffect(() => {
      fetch("http://localhost:8002/bots")
        .then((resp) => resp.json())
        .then((data) => setImage(data.image));
    }, []);

    return <img src={image} alt={BotSpecs} />;
  }

  return (
    <div className="ui four column grid">
      <div className="row">
        <h1>Collection of all bots</h1>
        <BotImages />
        
      </div>
    </div>
  );
}

export default BotCollection; 
*/
import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((resp) => resp.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div className="ui four column grid">
      <div className="row">
        <h1>Collection of all bots</h1>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
