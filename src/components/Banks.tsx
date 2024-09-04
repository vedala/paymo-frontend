import React, { useEffect, useState } from "react";

const Banks = () => {

  interface BanksObject {
    id: number,
    name: string
  }

  const [banks, setBanks] = useState<Array<BanksObject>>([]);

  useEffect(() => {
    setBanks([
      {
        id: 1,
        name: "Bank1",
      },
      {
        id: 2,
        name: "Bank2",
      }
    ]);
  }, []);

  const bankList = banks.map((bank) => {
    return (
      <li key={bank.id}>
        <span>{bank.name}</span>
      </li>
    );
  });

  return (
    <div>
      <h2>Connected Banks</h2>
      <ul>{bankList}</ul>
    </div>
  );
};

export default Banks;
