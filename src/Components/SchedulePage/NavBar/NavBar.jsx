import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import SearchBar from "./SearchBar/SearchBar";
import GlobalContext from "../../../Context/GlobalContext";
import "./NavBar.scss";
import Navigator from "./Navigator/Navigator";
import { actions } from "../../../Reducer/ModalReducer";

const NavBar = () => {
  const { search, setSearch, modalDispatch } = useContext(GlobalContext);
  const [isNotSearched, setIsNotSearched] = useState(true);

  const handleGoBack = () => {
    modalDispatch({ type: actions.REQUEST_LOADER });
    setTimeout(() => {
      setSearch(false);
      modalDispatch({ type: actions.REQUEST_LOADER });
    }, 800);
  };

  return (
    <div className={`nav-bar ${search && "nav-search-style"}`}>
      {!search ? (
        <Navigator />
      ) : (
        <div className="search-go-back">
          <div className="go-back" onClick={handleGoBack}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="search-go-back-text">Go Back</div>
        </div>
      )}

      <div className="right-nav">
        {isNotSearched && (
          <FontAwesomeIcon
            icon={faSearch}
            className="search-icon nav-right-gap"
            onClick={() => setIsNotSearched(false)}
          />
        )}
      </div>

      {!isNotSearched && <SearchBar setIsNotSearched={setIsNotSearched} />}
    </div>
  );
};

export default NavBar;
