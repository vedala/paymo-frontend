import React, { useState } from 'react';
import NavBar from './NavBar';
import Banks from './Banks';

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
        <li className="activity">
          <button
            className={selectedTab === "activity" ? 'active' : ''}
            onClick={() => handleTabClick("activity")}
          >
            Activity
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
    </div>
  );
}

export default Dashboard;
