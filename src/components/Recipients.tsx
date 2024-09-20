import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { PAYMO_API_URL } from "../constants";

const Recipients = () => {

  const { getAccessTokenSilently } = useAuth0();

  interface RecipientsObject {
    id: number,
    name: string
  }

  const [recipients, setRecipients] = useState<Array<RecipientsObject>>([]);

  const fetchData = async () => {
    const token = await getAccessTokenSilently();
    await axios.get(`${PAYMO_API_URL}/recipients`, {
      headers: { 'Authorization': `Bearer ${token}`}
    })
    .then(res => {
      const recipientsData = res.data;
      setRecipients(recipientsData);
    })
    .catch(err => {console.log(err); throw err; })
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const recipientsList = recipients.map((recipient) => {
    return (
      <li key={recipient.id}>
        <span>{recipient.name}</span>
      </li>
    );
  });

  return (
    <div>
      <h2>Recipients</h2>
      <ul>{recipientsList}</ul>
    </div>
  );
};

export default Recipients;
