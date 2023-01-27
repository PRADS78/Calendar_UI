import dayjs from "dayjs";

const GetTimeLineEvents = (appointments, CURRENT_DATE) => {

    const eventStyle = []
    const HEIGHT = 60.84;
    const TOTAL_MINUTES_IN_HOUR = 60;

    const findTotalDuration = (appointmentStartTime, appointmentEndTime) => {
        const startTime = appointmentStartTime.hour() * TOTAL_MINUTES_IN_HOUR;
        const startTimeMinutes = appointmentStartTime.minute();
        const TotalDuration= appointmentEndTime.diff(appointmentStartTime,'minutes');
        return { TotalDuration: TotalDuration, top: (startTime / TOTAL_MINUTES_IN_HOUR) * HEIGHT + (startTimeMinutes / TOTAL_MINUTES_IN_HOUR) * HEIGHT };
    }

    const findHeightAndFontValue = (TotalDuration) => {
        let fontWeight = 0;
        let fontValue = 14;
        let heightValue = 0;
        let paddingTop = 0;


        if (TotalDuration > TOTAL_MINUTES_IN_HOUR) {
            heightValue = (TotalDuration / TOTAL_MINUTES_IN_HOUR) * 60.8;
            paddingTop = 10;
            fontWeight = 600;
        }
        else if (TotalDuration <=TOTAL_MINUTES_IN_HOUR) {
            if (TotalDuration <= 20 && TotalDuration > 10) {
                heightValue = TotalDuration;
                fontValue = 8;
            }
            else if (TotalDuration <= 10 && TotalDuration > 5) {
                heightValue = TotalDuration;
                fontValue = 5;
            }

            else if (TotalDuration <= 5) {
                if(TotalDuration<=3)
                {
                    heightValue = 3;
                    fontValue = 1;
                }
                else
                {
                heightValue = TotalDuration;
                fontValue = 3;
            }
            }
            else 
            {
                paddingTop=5;
                fontWeight = 600;
                heightValue = TotalDuration;
            }
        }
        return { fontValue: fontValue, heightValue: heightValue, fontWeight: fontWeight, paddingTop: paddingTop };
    }



    for(var i=0;i<appointments.length;i++)
    {
        let totalDuration = findTotalDuration(dayjs(appointments[i].appointmentStartTime), dayjs(appointments[i].appointmentEndTime));
        let valueFound = findHeightAndFontValue(totalDuration.TotalDuration);
        eventStyle.push({
            appointment: appointments[i],
            appointmentCardStyle: {position: "absolute", top: totalDuration.top, height: valueFound.heightValue, fontSize: valueFound.fontValue, fontWeight: valueFound.fontWeight }, 
            appointmentContentStyle: { paddingTop: valueFound.paddingTop }
            })
    }
    return eventStyle;
}

export default GetTimeLineEvents;




// import dayjs from "dayjs";

// const GetTimeLineEvents = (appointments, CURRENT_DATE) => {

//     const eventStyle = []
//     const HEIGHT = 60.84;
//     const TOTAL_MINUTES_IN_HOUR = 60;

//     const findTotalDuration = (appointmentStartTime, appointmentEndTime) => {
//         const startTime = appointmentStartTime.hour() * TOTAL_MINUTES_IN_HOUR;
//         const startTimeMinutes = appointmentStartTime.minute();
//         const TotalDuration= appointmentEndTime.diff(appointmentStartTime,'minutes');
//         return { TotalDuration: TotalDuration, top: (startTime / TOTAL_MINUTES_IN_HOUR) * HEIGHT + (startTimeMinutes / TOTAL_MINUTES_IN_HOUR) * HEIGHT };
//     }

//     const findHeightAndFontValue = (TotalDuration) => {
//         let fontWeight = 0;
//         let fontValue = 14;
//         let heightValue = 0;
//         let paddingTop = 0;


//         if (TotalDuration > TOTAL_MINUTES_IN_HOUR) {
//             heightValue = (TotalDuration / TOTAL_MINUTES_IN_HOUR) * 60.8;
//             paddingTop = 10;
//             fontWeight = 600;
//         }
//         else if (TotalDuration <=TOTAL_MINUTES_IN_HOUR) {
//             if (TotalDuration <= 20 && TotalDuration > 10) {
//                 heightValue = TotalDuration;
//                 fontValue = 8;
//             }
//             else if (TotalDuration <= 10 && TotalDuration > 5) {
//                 heightValue = TotalDuration;
//                 fontValue = 5;
//             }

//             else if (TotalDuration <= 5) {
//                 if(TotalDuration<=3)
//                 {
//                     heightValue = 3;
//                     fontValue = 1;
//                 }
//                 else
//                 {
//                 heightValue = TotalDuration;
//                 fontValue = 3;
//             }
//             }
//             else 
//             {
//                 paddingTop=5;
//                 fontWeight = 600;
//                 heightValue = TotalDuration;
//             }
//         }
//         return { fontValue: fontValue, heightValue: heightValue, fontWeight: fontWeight, paddingTop: paddingTop };
//     }


//     appointments.map((event) => {
//         if (dayjs(event.appointmentStartTime).format("DD-MM-YY") === CURRENT_DATE.format("DD-MM-YY") && dayjs(event.appointmentEndTime).format("DD-MM-YY") === CURRENT_DATE.format("DD-MM-YY")) {
//             let totalDuration = findTotalDuration(dayjs(event.appointmentStartTime), dayjs(event.appointmentEndTime));
//             let valueFound = findHeightAndFontValue(totalDuration.TotalDuration);
//             eventStyle.push({
//                 appointment: event,
//                 appointmentCardStyle: {position: "absolute", top: totalDuration.top, height: valueFound.heightValue, fontSize: valueFound.fontValue, fontWeight: valueFound.fontWeight }, appointmentContentStyle: { paddingTop: valueFound.paddingTop }
//             })
//         }
       
//         else if (dayjs(event.appointmentStartTime).format("DD-MM-YY") === CURRENT_DATE.format("DD-MM-YY")) {
//             let totalDuration = findTotalDuration(dayjs(event.appointmentStartTime), CURRENT_DATE.add(24,'hour'));
//             let valueFound = findHeightAndFontValue(totalDuration.TotalDuration);
            
//             eventStyle.push({
//                 appointment: event,
//                 appointmentCardStyle: { position: "absolute", top: totalDuration.top, height: valueFound.heightValue, fontSize: valueFound.fontValue, fontWeight: valueFound.fontWeight }, appointmentContentStyle: { paddingTop: valueFound.paddingTop }
//             })
//         }

//         else if ((dayjs(event.appointmentEndTime).format("DD-MM-YY") === CURRENT_DATE.format("DD-MM-YY"))&&((dayjs(event.appointmentEndTime).hour()!==0))) {
//             let totalDuration = findTotalDuration(CURRENT_DATE, dayjs(event.appointmentEndTime));
//             let valueFound = findHeightAndFontValue(totalDuration.TotalDuration);
//             console.log(totalDuration,"dfs");
//             eventStyle.push({
//                 appointment: event,
//                 appointmentCardStyle: { position: "absolute", top: totalDuration.top, height: valueFound.heightValue, fontSize: valueFound.fontValue, fontWeight: valueFound.fontWeight }, appointmentContentStyle: { paddingTop: valueFound.paddingTop }
//             })
//         }
//     }
//     );
//     return eventStyle;

// }

// export default GetTimeLineEvents;
