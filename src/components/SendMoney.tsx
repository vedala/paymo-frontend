import { useState } from "react";

const SendMoney = () => {

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
  }

  let banks = [
    {
      id: 1,
      name: "Chase",
    },
    {
      id: 2,
      name: "Regions Bank",
    },
  ];

  let recipients = [
    {
      id: 1,
      name: "Recipient-1",
    },
    {
      id: 2,
      name: "Recipient-2",
    },
  ];

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
          {banks.map((bank) => <option value={bank.id}>{bank.name}</option>)}
        </select>

        <br />
        <select id="select-recipient" onChange={handleRecipientChange}>
          <option value="Select a recipient">-- Select a Recipient --</option>
          {recipients.map((recipient) => <option value={recipient.id}>{recipient.name}</option>)}
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
