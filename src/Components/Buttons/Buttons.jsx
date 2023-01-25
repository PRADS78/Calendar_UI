import "./Buttons.scss";


//Create Button
export function CreateButton() {
  return (
    <button className="create-btn">
    Create Task
    </button>
  );
}

//Save Button
export function SaveButton() {
  return (
    <button type="submit" className="save-btn">
     Save
    </button>
  );
}

//Delete
export function DeleteButton() {
  return (
    <button className="delete-btn">
      Delete
    </button>
  );
}

//Update Button
export function UpdateButton() {
  return (
    <button type="submit" className="update-btn">
      Update
    </button>
  );
}

//Close Button
export function CloseButton() {
  return (
    <button className="close-btn">
      Close
    </button>
  );
}

//Cancel Button
export function CancelButton() {
  return (
    <button type="button" className="cancel-btn">
      Cancel
    </button>
  );
}


//Discard Button
export function DiscardButton() {
  return (
    <button className="discard-btn">
     Discard
    </button>
  );
}

//Today Button
export function TodayButton() {
  return (
    <button className="today-btn">
      Today
    </button>
  );
}
