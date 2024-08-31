import React from 'react';
import NavBar from './NavBar';
import Tabs from './Tabs';
import TabPane from './Tabs/TabPane';

function Dashboard() {
  return (
    <div className="dashboard">
      <NavBar />
      <h1>Paymo Dashboard</h1>
      <Tabs>
        <TabPane title="Banks">
          <div>Banks</div>
        </TabPane>
        <TabPane title="Recipients">
          <div>Recipients</div>
        </TabPane>
        <TabPane title="Activity">
          <div>Activity</div>
        </TabPane>
        <TabPane title="Send Money">
          <div>Send Money</div>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Dashboard;
