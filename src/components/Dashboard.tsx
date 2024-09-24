import React, { useState } from 'react';
import NavBar from './NavBar';
import Banks from './Banks';
import Recipients from './Recipients';
import SendMoney from './SendMoney';

function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("banks");

  const handleTabClick = (clickedTab: any) => {
    setSelectedTab(clickedTab);
  };

  return (
    <div className="dashboard">
      <NavBar />
      <h1>Paymo Dashboard</h1>
      <ul className="tab-bar">
        <li className="banks">
          <button
            className={selectedTab === "banks" ? 'active' : ''}
            onClick={() => handleTabClick("banks")}
          >
            Banks
          </button>
        </li>
        <li className="recipients">
          <button
            className={selectedTab === "recipients" ? 'active' : ''}
            onClick={() => handleTabClick("recipients")}
          >
            Recipients
          </button>
        </li>
        <li className="send-money">
          <button
            className={selectedTab === "send-money" ? 'active' : ''}
            onClick={() => handleTabClick("send-money")}
          >
            Send Money
          </button>
        </li>
      </ul>

      {(selectedTab === "banks") && <Banks />}
      {(selectedTab === "recipients") && <Recipients />}
      {(selectedTab === "send-money") && <SendMoney />}
    </div>
  );
}

export default Dashboard;
