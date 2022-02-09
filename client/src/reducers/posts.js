// Reducers are functions that do logic based on action and state
// returns either an action, or state changed by action

export default (posts = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            console.log(`payload: ${action.payload.creator}`)
            return [...posts, action.payload];
        default:
            return posts;
    }
};