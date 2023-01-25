import "./SearchResult.scss";
import { useContext} from "react";
import GlobalContext from "../../../Context/GlobalContext";
import { searchActions } from "../../../Reducer/SearchReducer";
import { SchedulePageContext } from "../SchedulePage";
import { handleSearch } from "../../../ApiHandler/HandleSearch";
import { actions } from "../../../Reducer/ModalReducer";
import DisplayResult from "./DisplayResult";
import SearchNav from "./SearchNav";

const SearchResult = () => {
  const {setSearch,modalDispatch}=useContext(GlobalContext)
  const {searchState,searchDispatch}=useContext(SchedulePageContext);

  const handlePreviousData=()=>
  {
    if(searchState.searchInput?.offSet>0)
    {
      searchDispatch({type:searchActions.SET_SEARCH_INPUT,payload:{...searchState.searchInput,offSet:searchState.searchInput?.offSet-5}})
      modalDispatch({type:actions.REQUEST_LOADER});
      setTimeout(()=>
      {
        handleSearch({...searchState.searchInput,offSet:searchState.searchInput.offSet-5},searchDispatch,searchActions);
        modalDispatch({type:actions.REQUEST_LOADER});
      },1000)
    }
    else if(searchState.searchResult?.appointments.length == 0)
    {
      alert("No Data found !!!")
    }
    else
    {
      alert("Showing Results from 0, No Prev Data found !!!")
    }
  }

  const handleNextData=()=>
  {
    if(searchState.searchResult.isTruncated)
    {
      searchDispatch({type:searchActions.SET_SEARCH_INPUT,payload:{...searchState.searchInput,offSet:searchState.searchInput?.offSet+5}})
      modalDispatch({type:actions.REQUEST_LOADER});
      setTimeout(()=>
      {
        handleSearch({...searchState.searchInput,offSet:searchState.searchInput.offSet+5},searchDispatch,searchActions,modalDispatch,actions);
        modalDispatch({type:actions.REQUEST_LOADER});
      },1000)
    }
    else if(searchState.searchResult?.appointments.length == 0){
      alert("No Data found !!!")
    }
    else
    {
      alert("Showing final results, No Next Data found !!!")  
    }
  }
  const handleGoBack=()=>
  {
    modalDispatch({type:actions.REQUEST_LOADER});
    setTimeout(()=>
    {
      setSearch(false)
      modalDispatch({type:actions.REQUEST_LOADER});
    },800)
  }
  return (
    <div className="search-result">
      <SearchNav searchState={searchState} handleGoBack={handleGoBack} handlePreviousData={handlePreviousData} handleNextData={handleNextData} />
      <DisplayResult searchState={searchState}/>
    </div>
  );
};

export default SearchResult;
