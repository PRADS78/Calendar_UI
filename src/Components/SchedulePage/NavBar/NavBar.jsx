import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar/SearchBar";
import GlobalContext from "../../../Context/GlobalContext";
import "./NavBar.scss";
import Navigator from "./Navigator/Navigator";




const NavBar = () => {
  const {search} = useContext(GlobalContext);
  const [isNotSearched, setIsNotSearched] = useState(true);



  return (
      <div className="nav-bar">
         {!search?<Navigator/>
         :
         <div className="search-result-head" >
          Search Results
         </div>
         }
         

        <div className="right-nav">
           {isNotSearched&&
          <FontAwesomeIcon icon={faSearch} className="search-icon nav-right-gap"  onClick={() => setIsNotSearched(false)}/>
           }
      

        </div>

        {!isNotSearched&&
            <SearchBar setIsNotSearched={setIsNotSearched} />
        }
      </div>
  );
};

export default NavBar;