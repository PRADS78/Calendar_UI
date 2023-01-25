
const EllipsisOptions=({handleEdit,setIsOpen,setDelete}) =>{
  return (
    <>
    <div className="ellipsis-overlay">
    <div className="ellipsis-options">
      <button className="btn" onClick={()=>{setIsOpen(false);setDelete(true)}}>
          <span>Delete</span>
      </button>
      <button className="btn edit" onClick={()=>{setIsOpen(false);handleEdit()}}>
          <span>Edit</span>
      </button>
    </div>
    </div>
    </>
  );
}

export default EllipsisOptions;
