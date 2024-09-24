import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { PAYMO_API_URL } from "../constants";
import { useState } from "react";

const AddRecipient = ({ onCancelClick, handleRecipientFound }: any) => {

  const [displayNotFoundMessage, setDisplayNotFoundMessage] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState(null);

  const { getAccessTokenSilently } = useAuth0();

  const fetchUsers = async (userEmailToSearch: string) => {
    const token = await getAccessTokenSilently();
    await axios.get(`${PAYMO_API_URL}/get_user_by_email`, {
      headers: { 'Authorization': `Bearer ${token}`},
      params: {searchEmail: userEmailToSearch}
    })
    .then(res => {
      const resUsers = res.data;
      if (resUsers.length > 0) {
        handleRecipientFound();
      }
      else {
        setDisplayNotFoundMessage(true);
        setTimeout(() => {
          setDisplayNotFoundMessage(false);
        }, 5000);
      }
console.log("resUsers=", resUsers);
    })
    .catch(err => {console.log(err); throw err; })
  }

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const elements = e.target.elements;
    const recipientEmailValue = elements['recipient-email'].value;
    setEnteredEmail(recipientEmailValue);
    fetchUsers(recipientEmailValue);
  }

  return (
    <div className="add-recipient">
      <h2>Add Recipient</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="email" name="recipient-email" required placeholder="Recipient Email"/>
        <button>Search</button>
        {displayNotFoundMessage &&
          <div className="not-found-message">{enteredEmail} not found.</div>
        }
      </form>
    </div>
  );
};

export default AddRecipient;
