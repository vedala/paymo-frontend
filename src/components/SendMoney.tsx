import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { PAYMO_API_URL } from "../constants";

const SendMoney = () => {

  const { getAccessTokenSilently, user } = useAuth0();

  interface BanksObject {
    id: number,
    name: string
  }

  interface RecipientsObject {
    id: number,
    name: string
  }

  const [banks, setBanks] = useState<Array<BanksObject>>([]);
  const [recipients, setRecipients] = useState<Array<RecipientsObject>>([]);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
console.log("selected bank=", bank);
console.log("selected recipient=", recipient);
console.log("amount=", e.target[2].value);
    await axios.post(`${PAYMO_API_URL}/send_money`, {
        bank_id: bank,
        recipient_id: recipient,
        amount: e.target[2].value,
      }
    )
    .then(res => {
      const bankData = res.data;
      setBanks(bankData);
    })
    .catch(err => {console.log(err); throw err; })
  }

  const fetchBanksData = async () => {
    const token = await getAccessTokenSilently();
    await axios.get(`${PAYMO_API_URL}/banks`, {
      headers: { 'Authorization': `Bearer ${token}`},
      params: {user_id: user?.sub}
    })
    .then(res => {
      const bankData = res.data;
      setBanks(bankData);
    })
    .catch(err => {console.log(err); throw err; })
  };

  const fetchRecipientsData = async () => {
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
    fetchBanksData();
    fetchRecipientsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [bank, setBank] = useState("Select a bank");
  const [recipient, setRecipient] = useState("Select a recipient");

  const handleBankChange = (e: any) => {
    setBank(e.target.value);
  }

  const handleRecipientChange = (e: any) => {
    setRecipient(e.target.value);
  }

  return (
    <div>
      <h2>Send Money</h2>
      <form className="send-money" onSubmit={handleFormSubmit}>
        <select id="select-bank" onChange={handleBankChange}>
          <option value="Select a bank"> -- Select a Bank -- </option>
          {banks.map((bank) => <option key={bank.id} value={bank.id}>{bank.name}</option>)}
        </select>

        <br />
        <select id="select-recipient" onChange={handleRecipientChange}>
          <option value="Select a recipient">-- Select a Recipient --</option>
          {recipients.map((recipient) => <option key={recipient.id} value={recipient.id}>{recipient.name}</option>)}
        </select>

        <br />
        <input id="enter-amount" pattern="\d+.\d\d" required placeholder="Enter Amount"></input>

        <br />
        <button id="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default SendMoney;
