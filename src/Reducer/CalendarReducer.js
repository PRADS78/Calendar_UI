import dayjs from "dayjs";
import GetMonth from "../Utils/Month";

export const calendarInitialState = {
    currYearIndex: dayjs().year(),
    currMonthIndex: dayjs().month(),
    currDayIndex: dayjs().date(),
    daysOfCurrMonth: GetMonth(dayjs().month(), dayjs().year())
};

export const calendarActions = {
    INCREMENT_MONTH: "INCREMENT_MONTH",
    DECREMENT_MONTH: "DECREMENT_MONTH",
    INCREMENT_DAY: "INCREMENT_DAY",
    DECREMENT_DAY: "DECREMENT_DAY",
    SET_CURR_YEAR: "SET_CURR_YEAR",
    SET_CURR_MONTH: "SET_CURR_MONTH",
    SET_CURR_DAY: "SET_CURR_DAY",
    RESET_TODAY: "RESET_TODAY",
};

export const calendarReducer = (state = calendarInitialState, action) => {
    switch (action.type) {
        case calendarActions.INCREMENT_MONTH:
            return {
                ...state,
                currMonthIndex: state.currMonthIndex + action.payload,
                daysOfCurrMonth: GetMonth(state.currMonthIndex + action.payload, state.currYearIndex)
            };

        case calendarActions.DECREMENT_MONTH:
            return {
                ...state,
                currMonthIndex: state.currMonthIndex - action.payload,
                daysOfCurrMonth: GetMonth(state.currMonthIndex - action.payload, state.currYearIndex)
            };

        case calendarActions.INCREMENT_DAY:
            return {
                ...state,
                currDayIndex: state.currDayIndex + action.payload
            };

        case calendarActions.DECREMENT_DAY:
            return {
                ...state,
                currDayIndex: state.currDayIndex - action.payload
            };

        case calendarActions.SET_CURR_YEAR:
            return {
                ...state,
                currYearIndex: action.payload,
                daysOfCurrMonth: GetMonth(state.currMonthIndex, action.payload)
            };

        case calendarActions.SET_CURR_MONTH:
            return {
                ...state,
                currMonthIndex: action.payload,
                daysOfCurrMonth: GetMonth(action.payload, state.currYearIndex)
            };

        case calendarActions.SET_CURR_DAY:
            return { ...state, currDayIndex: action.payload };

        case calendarActions.RESET_TODAY:
            return {...state,currMonthIndex: action.payload,currYearIndex: dayjs().year(),currDayIndex: dayjs().date(),daysOfCurrMonth: GetMonth(dayjs().month(), dayjs().year())};


        default:
            throw new Error(`the action ${action.type} not found`)
    }
};

