export const initialStore = () => {
    return {
        apiConnect: false,
        user: null,
        token: null,
        recommendations: [],
        freak: null,
        alerts: []
    };
};

export const storeReducer = (store, action = {}) => {
    switch (action.type) {
        case 'set_api_connect':
            return {
                ...store,
                apiConnect: action.payload,
            };
        case 'set_user':
            return {
                ...store,
                user: action.payload,
            };
        case 'set_token':
            localStorage.setItem('token', action.payload);
            return {
                ...store,
                token: action.payload,
            };
        case 'logout':
            localStorage.removeItem('token');
            return {
                ...store,
                token: null,
                user: null,
            };
        case 'set_recommendations':
            return {
                ...store,
                recommendations: action.payload,
            };
        case 'set_freak':
            return {
                ...store,
                freak: action.payload,
            };
        case 'set_alerts':
            return {
                ...store,
                alerts: action.payload,
            };
        default:
            throw Error('Unknow action.');
    }
};
