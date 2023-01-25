import "./ViewToggleButton.scss";
import React, { useContext } from "react";
import GlobalContext from "../../../Context/GlobalContext";

const ViewToggleButton=()=> {
  const { setMonthView, setSearch, monthView } = useContext(GlobalContext);

  const Views = [
    {
      view: "Day",
    },
    {
      view: "Month",
    },
  ];

  const handleView = (view) => {
    if (view == "Month") {
      setMonthView(true);
      setSearch(false);
    } else setMonthView(false);
    setSearch(false);
  };

  const getViewClr = (view) => {
    if (view == "Month" && monthView) return "month-clr";
    else if (view == "Day" && !monthView) return "day-clr";
  };

  return (
    <>
      {
        <div className="two-view-btn">
          {Views.map((view, index) => (
            <div
              onClick={() => handleView(view.view)}
              key={index}
              className={`btn ${getViewClr(view.view)}`}
            >
              {view.view}
            </div>
          ))}
        </div>
      }
    </>
  );
}

export default ViewToggleButton;
