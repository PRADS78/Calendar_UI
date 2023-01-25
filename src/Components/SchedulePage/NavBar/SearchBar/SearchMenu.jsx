
const SearchMenu = ({ searchInput,setSearchInput }) => {
  return (
          <div className="search-with-options">
            <div className="search-label">
               Search with Date
            </div>
            <div className="search-date">
                <div className="each-date">
                <span className="date-label">From</span>
                <input type="date" name="start date" value={searchInput.startDate} onChange={(e) =>{ setSearchInput({...searchInput,startDate:e.target.value})}} className="date-inp" />
                </div>

                <div className="each-date">
                <span className="date-label">To</span>
                <input type="date" value={searchInput.endDate} name="End date" onChange={(e)=>{ setSearchInput({...searchInput,endDate:e.target.value})}} className="date-inp" />
                </div>
            </div>
          </div>
  );
};

export default SearchMenu;
