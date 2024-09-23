import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { PAYMO_API_URL } from "../constants";
import { useState } from "react";

const AddRecipient = ({ onCancelClick }: any) => {

  const [foundUserData, setFoundUserData] = useState([]);

  const { getAccessTokenSilently } = useAuth0();

  const fetchUsers = async (userEmailToSearch: string) => {
    const token = await getAccessTokenSilently();
    await axios.get(`${PAYMO_API_URL}/get_user_by_email`, {
      headers: { 'Authorization': `Bearer ${token}`},
      params: {searchEmail: userEmailToSearch}
    })
    .then(res => {
      const resUsers = res.data;
      setFoundUserData(resUsers);
console.log("resUsers=", resUsers);
    })
    .catch(err => {console.log(err); throw err; })
  }

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const elements = e.target.elements;
    const recipientEmailValue = elements['recipient-email'].value;
    fetchUsers(recipientEmailValue);
  }

  return (
    <div className="add-recipient">
      <h2>Add Recipient</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="email" name="recipient-email" required placeholder="Recipient Email"/>
        <button>Search</button>
        {"UserData:" + foundUserData}
      </form>
      <div className="button-bar">
        <button onClick={onCancelClick} >Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
};

export default AddRecipient;
