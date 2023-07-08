const initialState = {
    count:0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increement':
            return {count:state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        case 'reset':
            return {count:0}
    
        default:
            break;
    }
}

export {reducer, initialState}