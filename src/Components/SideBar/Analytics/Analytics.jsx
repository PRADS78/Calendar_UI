import { useContext,useState,useEffect } from "react";
import GlobalContext from "../../../Context/GlobalContext";
import GetSummary from "../../../Utils/Summary";
import Summary from "./Summary/Summary";
import dayjs from "dayjs";


const Analytics = () => {
  const { appointments} = useContext(GlobalContext)
  const appointmentSummary=GetSummary(appointments);
      
  return (
      <div className="analytics-component">
        {appointmentSummary?.map((stat, index) => (
          <Summary stat={stat} key={index} />
        ))}
      </div>
  );
};

export default Analytics;
