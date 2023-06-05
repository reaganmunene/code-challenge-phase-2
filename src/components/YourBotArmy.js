import React from "react";

function YourBotArmy({bots, removeBot, dischargeBot}) {
  //your bot army code here...
  const botCards = bots.map((bot) => (
  <div className="column" key={bot.id}>
    <div className="ui card">
      <div className="image">
        <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">{bot.name}</div>
          </div>
          <div className="extra content">
            <button className="ui red button" onClick={() => removeBot(bot)} dischargeBot={dischargeBot} >Remove</button>
              </div>
              </div>
              </div>
              ));



  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {botCards}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;