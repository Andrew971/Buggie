import Data from '../../Utils/AppData';
import Theme from '../../Utils/Theme';
const {App} = Theme;

const initialState = {
    appContent: Data['en'],
    sharedContent: Data.sharedContent,
    targetLanguage: 'English',
    Theme: App['main'],
    modalDisplay: false,
    status: false,
    redirect: false,
    store:[]
}

export function appReducer(state = initialState, action) {
    switch (action.type) {
        
        case 'LOCATION_CONFIRM_STATUS':
            return {
                ...state,
                status: action.payload.status
            };
        case 'PRE_FETCH_DATA_STATUS':
        let {status,redirect} =action.payload
            return {
                ...state,
                status: status,
                redirect: redirect,
            };
        case 'PRE_FETCH_DATA':
        let {fetched=status,storeData=[]} =action.payload
        console.log(action.payload.status)
            return {
                ...state,
                store: fetched?storeData:[]  
            };
        default:
            return state;
    }
}

export function appAction(data) {
    switch (data.type) {
        case 'ACTION_REQUESTED':
            return {type: data.type, payload: data.payload};

        default:
            return (console.log('no action with that name'));
    }
}
