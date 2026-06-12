export const initialStore = () => {
    return {
        message: null
    }
}

export const storeReducer = (store, action = {}) => {
    switch (action.type) {
        case 'set_hello':
            return {
                ...store,
                message: action.payload
            }
        default:
            throw Error ('Unknow action.');
    }
}

