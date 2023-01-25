import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch,faCaretDown,faXmark,faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.scss";
import GlobalContext from "../../../../Context/GlobalContext";
import { handleSearch } from "../../../../ApiHandler/HandleSearch";
import { SchedulePageContext } from "../../SchedulePage";
import { searchActions } from "../../../../Reducer/SearchReducer";
import { actions } from "../../../../Reducer/ModalReducer";
import SearchMenu from "./SearchMenu";

const SearchBar = ({ setIsNotSearched }) => {

  const {setSearch,modalDispatch}=useContext(GlobalContext);
  const {searchDispatch}=useContext(SchedulePageContext);
  const [searchMenu, setMenu] = useState(false);
  const [searchInput,setSearchInput]=useState({offSet:0,fetchCount:5,searchTitle:"",startDate:"",endDate:""})

  const handleSubmit = (e) => {
    e.preventDefault();
    const titleSpaces=searchInput.searchTitle.replace(/\s+/g," ").trim()
    setSearchInput({...searchInput,searchTitle:"",startDate:"",endDate:""})
    modalDispatch({type:actions.REQUEST_LOADER});
    setMenu(false)
    setIsNotSearched(true)
    setSearch(true)
    searchDispatch({type:searchActions.SET_SEARCH_INPUT,payload:{...searchInput,searchTitle:titleSpaces}})
    setTimeout(()=>
    {
      handleSearch(searchInput,searchDispatch,searchActions,modalDispatch,actions);
      modalDispatch({type:actions.REQUEST_LOADER});
    },1000)
}


const handleCloseSearch=()=>{
  if(searchMenu)
  {
    setMenu(false);
  }
  else
  setIsNotSearched(true)
}

  return (
    <div className="searchbar-overlay" onClick={handleCloseSearch}>
    <div className="search-bar" onClick={(e)=>e.stopPropagation()}>
      <form className="search-event" onSubmit={handleSubmit} autoComplete="on">
       { (searchInput.searchTitle||(searchInput.startDate||searchInput.endDate)) &&
        <button type="submit" >
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </button>
       }

        <input type="text" className="search-input" autoFocus value={searchInput.searchTitle} placeholder="Search for event"onChange={(e) => { setSearchInput({...searchInput,searchTitle:e.target.value})}} autoComplete="on"/>
        {searchInput.searchTitle && (<FontAwesomeIcon icon={faXmark} className="search-reset"onClick={() => {setSearchInput({searchTitle:"",startDate:"",endDate:""})}} /> )}
        <FontAwesomeIcon icon={faCaretDown} className="search-menu" onClick={() => setMenu(!searchMenu)}/>

        {
        searchMenu && 
        <SearchMenu searchInput={searchInput} setSearchInput={setSearchInput}/>
        }
      </form>
    </div>
    </div>
  );
};

export default SearchBar;
