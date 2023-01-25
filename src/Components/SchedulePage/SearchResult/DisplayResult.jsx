import AppointmentDetails from "../../AppointmentCard/AppointmentDetails";
import NoResult from "../../../Assests/Icons/NoResult.svg";

const DisplayResult = ({searchState}) => {

  return (
      <div className="search-result-content">
        {searchState.searchResult?.appointments.length == 0 ? (
          <div className="no-data-found">
            <div className="no-data-text">No Results Found</div> 
            <div><img src={NoResult} alt="No Result" className="no-data-img"/></div>
            </div>
        ) : (
          searchState.searchResult?.appointments.map((event, index) => (
            <div key={index} className="search-results">
              <AppointmentDetails event={event} />
            </div>
          ))
        )}
      </div>
  );
};

export default DisplayResult;
