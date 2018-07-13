import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Containers from './Shared';
import Providers from './Utils/Providers';
import {Route} from 'react-router-dom';


const startApp = () => {
  ReactDOM.render(<Providers><Route path="/" component={Containers} />
  </Providers>, document.getElementById('root'));
  registerServiceWorker();
};

if(window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}