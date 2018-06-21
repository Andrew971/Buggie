import Data from '../../Utils/AppData';
import Theme from '../../Utils/Theme';
const { App }= Theme;

const initialState = {
  appContent:Data['en'],
  sharedContent:Data.sharedContent,
  targetLanguage:'English',
  Theme:App['main'],
  modalDisplay: false,
}

export function appReducer(state = initialState, action) {
  switch (action.type) {
      case 'ACTION_REQUESTED':
          return  {
              ...state,
              state: action.payload
          };

      default:
          return state;
  }
}

export function appAction(data) {
  switch (data.type) {
      case 'ACTION_REQUESTED':
          return  {
              type: data.type,
              payload: data.payload
          };

      default:
          return (console.log('no action with that name'));
  }
}
