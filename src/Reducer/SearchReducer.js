export const searchInitialState = {
    searchInput:null,
    searchResult:null
};

export const searchActions = {
    SET_SEARCH_INPUT:"SET_SEARCH_INPUT",
    SET_SEARCH_RESULT:"SET_SEARCH_RESULT"
};

export const searchReducer = (state = searchInitialState, action) => {
    switch (action.type) 
    {
        case searchActions.SET_SEARCH_INPUT:
            return {...state,searchInput:action.payload};

        case searchActions.SET_SEARCH_RESULT:
            return {...state,searchResult:action.payload};
            
        default:
            throw new Error(`the action ${action.type} not found`)
    }
};

