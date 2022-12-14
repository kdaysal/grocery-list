import { useState } from "react";
import Button from "../Button/Button";

const EditItem = ({
  user,
  groceryItemId,
  groceryItemName,
  groceryItemAisle,
  groceryItemReminder,
  editItem,
  onSave,
  showEditItem
}) => {
  const [oldItemName, setOldItemName] = useState(groceryItemName); //state of the original grocery item prior to the upcoming change/modification
  const [itemName, setItemName] = useState(groceryItemName); //state of the newly edited item name
  const [aisle, setAisle] = useState(groceryItemAisle);
  const [reminder, setReminder] = useState(groceryItemReminder);

  //set itemName, aisle, and reminder to what is being passed in from 'user' and 'groceryItemId'...
  console.log(`groceryItemName == ${groceryItemName}`);

  console.log(`groceryItemId passed to EditItem component: ${groceryItemId}`);

  const onSubmit = (e) => {
    e.preventDefault();//prevent the form from submitting to a new page
    console.log(`now passing updated item: ${itemName, aisle, reminder} to editItem function in App.js`)
    editItem({ itemName, aisle, reminder }, oldItemName)

    console.log(`edit item form was submitted`)

    setItemName('');
    setAisle('');
    setReminder(false);
    onSave();//set showEditItem = !showEditItem to hide the EditItem form
  }

  return (
    <form className='edit-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Edit Item</label>
        <input type='text'
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder={itemName}
        />
      </div>
      <div className='form-control'>
        <label>Edit Aisle</label>
        <input type='text'
          placeholder={aisle}
          value={aisle}
          onChange={(e) => setAisle(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox'
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          checked={reminder ? true : false} //could shorten this to: checked={reminder}
        />
      </div>
      <input className='btn btn-block' type='submit' value='Save Item' />
      <Button
        btnText={'Cancel'}
        btnColor={'orange'}
        onClick={() => onSave()}
      >
      </Button>
    </form>
  )
}

export default EditItem
