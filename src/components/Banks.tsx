import React, { useEffect, useState } from "react";
import LinkBank from "./LinkBank";
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

  const fetchData = async () => {
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

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <LinkBank onAddBank={fetchData} />
    </div>
  );
};

export default Banks;
