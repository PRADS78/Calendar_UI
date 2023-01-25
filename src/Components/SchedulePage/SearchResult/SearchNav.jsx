
const SearchNav = ({searchState,handlePreviousData,handleNextData}) => {
  return (
      <div className="search-header">
          <div className="search-input">Showing results {
          searchState.searchInput?.searchTitle!=""&&("of "+searchState.searchInput?.searchTitle)
          }{searchState.searchInput?.startDate!=""&&(" starts with  "+searchState.searchInput?.startDate)}
          {searchState.searchInput?.endDate!=""&&("ends with "+searchState.searchInput?.endDate)}</div>        
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
