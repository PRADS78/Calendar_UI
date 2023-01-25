import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "./EllipsisButton.scss";
import EllipsisOptions from "./EllipsisOptions";

const EllipsisButton = ({ handleEdit, isOpen, setIsOpen, setDelete }) => {
  return (
    <>
      <span onClick={() => setIsOpen(!isOpen)} className="ellipsis-icon">
        <FontAwesomeIcon icon={faEllipsis} />
      </span>
      {isOpen && (
        <EllipsisOptions
          handleEdit={handleEdit}
          setIsOpen={setIsOpen}
          setDelete={setDelete}
        />
      )}
    </>
  );
};

export default EllipsisButton;
