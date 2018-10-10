const initialState = {
    news: [],
    featured: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "RECEIVE_NEWS": {
            return { ...state, news: action.news }
        }
        case "RECEIVE_FEATURED": {
            return { ...state, featured: action.featured }
        }
        default: return state
    }
}

export default reducer