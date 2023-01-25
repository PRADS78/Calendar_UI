export const initialState = {
    showModal: false,
    isLoading: false,
    viewEvent: null,
    updateEvent: null,
    showRequestSuccess: false,
    errorResponse: null,
};

export const actions = {
    REQUEST_SUCCESS: "REQUEST_SUCCESS",
    ADD_EVENT: "ADD_EVENT",
    REQUEST_LOADER: "REQUEST_LOADER",
    SET_ERROR_RESPONSE: "SET_ERROR_RESPONSE",
    SET_UPDATE_EVENT: "SET_UPDATE_EVENT",
    SET_VIEW_EVENT: "SET_VIEW_EVENT",
};

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_EVENT:
            return { ...state, showModal: !state.showModal };

        case actions.REQUEST_SUCCESS:
            return { ...state, showRequestSuccess: !state.showRequestSuccess };

        case actions.REQUEST_LOADER:
            return { ...state, isLoading: !state.isLoading };

        case actions.SET_ERROR_RESPONSE:
            return { ...state, errorResponse: action.payload };

        case actions.SET_UPDATE_EVENT:
            return { ...state, updateEvent: action.payload };

        case actions.SET_VIEW_EVENT:
            return { ...state, viewEvent: action.payload };

        default:
            throw new Error(`the action ${action.type} not found`)
    }
};

