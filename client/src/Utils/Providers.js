import React, {PureComponent} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'
import configureStore from './redux'
const store = configureStore()

export default class Providers extends PureComponent {

  render() {
    const {children} =this.props
    return (
      <Provider store={store}>
      <Router>
        {children}
      </Router>

    </Provider>
);
  }

}
