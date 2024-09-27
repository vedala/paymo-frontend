import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { PAYMO_API_URL } from "../constants";
import AddRecipient from "./AddRecipient";

const Recipients = () => {

  const { getAccessTokenSilently, user } = useAuth0();

  interface RecipientsObject {
    id: number,
    name: string
  }

  const [recipients, setRecipients] = useState<Array<RecipientsObject>>([]);
  const [showAddRecipient, setShowAddRecipient] = useState(false);

  const fetchData = async () => {
    const token = await getAccessTokenSilently();
    await axios.get(`${PAYMO_API_URL}/recipients`, {
      headers: { 'Authorization': `Bearer ${token}`},
      params: {sender_user_id: user?.sub}
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

  const onAddRecipientClick = () => {
    setShowAddRecipient(true);
  }

  const onCancelClick = () => {
    setShowAddRecipient(false);
  }

  const handleRecipientFound = () => {
    setShowAddRecipient(false);
    fetchData();
  }

  const handleBackToRecipientsList = () => {
    setShowAddRecipient(false);
  }

  const recipientsList = recipients.map((recipient) => {
    return (
      <li key={recipient.id}>
        <span>{recipient.name}</span>
      </li>
    );
  });

  return (
    <div>
      {!showAddRecipient &&
        <>
          <h2>Recipients</h2>
          <ul>{recipientsList}</ul>
          <button onClick={onAddRecipientClick} >Add Recipient</button>
        </>
      }
      {showAddRecipient &&
        <AddRecipient
          onCancelClick={onCancelClick}
          handleRecipientFound={handleRecipientFound}
          handleBackToRecipientsList={handleBackToRecipientsList}
        />
      }
    </div>
  );
};

export default Recipients;
