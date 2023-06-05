import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  
  const[bots, setBots] = useState([]);

  useEffect (() => {
    fetch("http://localhost:8002/bots")
    .then((response) => response.json())
    .then((data) => setBots(data))
    .catch((error) => console.log(error));
  }, []);

  const addBot = (bot) => {
    setBots(bots.map((b) => (bot.id === bot.id ? { ...bot, army: true } : bot)));
  };


const removeBot = (bot) => {
  setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: false } : b)));
};


const deleteBot = (bot) => {
  const updatedBots = bots.filter((b) => b.id !== bot.id);
  setBots(updatedBots);
};


  return (
    <div>
      <YourBotArmy  bots={bots.filter((bot)=>bot.army)} removeBot={removeBot} deleteBot={deleteBot} />
      <BotCollection bots={bots} addBot={addBot} deleteBot={deleteBot} />
    </div>
  );
}

export default BotsPage;