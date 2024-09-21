const AddRecipient = ({ onCancelClick }: any) => {

  return (
    <div className="add-recipient">
      <h2>Add Recipient</h2>
      <input type="text" name="recipient-email" placeholder="Recipient Email"/>
      <button>Search</button>
      <div className="button-bar">
        <button onClick={onCancelClick} >Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
};

export default AddRecipient;
