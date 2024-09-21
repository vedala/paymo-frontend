const AddRecipient = ({ onCancelClick }: any) => {

  return (
    <div>
      <h2>Add Recipient</h2>
      <button onClick={onCancelClick} >Cancel</button>
      <button>Save</button>
    </div>
  );
};

export default AddRecipient;
