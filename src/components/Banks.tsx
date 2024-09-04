import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { PAYMO_API_URL } from "../constants";

const Banks = () => {

  const { getAccessTokenSilently } = useAuth0();

  interface BanksObject {
    id: number,
    name: string
  }

  const [banks, setBanks] = useState<Array<BanksObject>>([]);

  useEffect(() => {
    async function fetchData() {
      const token = await getAccessTokenSilently();
      await axios.get(`${PAYMO_API_URL}/banks`, {
        headers: { 'Authorization': `Bearer ${token}`}
      })
      .then(res => {
        const bankData = res.data;
        setBanks(bankData);
      })
      .catch(err => {console.log(err); throw err; })
    };
    fetchData();
    // setBanks([
    //   {
    //     id: 1,
    //     name: "Bank1",
    //   },
    //   {
    //     id: 2,
    //     name: "Bank2",
    //   }
    // ]);
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
