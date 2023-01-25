import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SearchNav = ({searchState,handleGoBack,handlePreviousData,handleNextData}) => {
  return (
      <div className="search-header">
        <div className="search-go-back">
                <div className="go-back" onClick={handleGoBack}>
                    <FontAwesomeIcon icon={faArrowLeft} size={"1x"}/>
                </div>
                <div className="search-head-text">Go Back</div>
        </div>
        <div className="search-buttons">        
            <button className={`previous-btn ${searchState.searchInput?.offSet<1&&"prev-not-active"}`} onClick={handlePreviousData} >
            Prev
            </button>
            <button className={`next-btn ${!searchState.searchResult?.isTruncated&&"next-not-active"}`} onClick={handleNextData}>
            Next
            </button>
        </div>
      </div>
  );
};

export default SearchNav;
