const INITIAL_STATE = {
    cards: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'teste':
            return { ...state, cards: [1,2,3,4,5] }
        default:
            return state;
    }
};