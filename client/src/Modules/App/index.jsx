import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Switch, Route,Redirect} from 'react-router-dom'
import {ThemeProvider} from 'styled-components';
import MyLoadable from '../../Utils/myLoadable'
import Main from '../../Components/MobileUi/main'

const AsyncGettingStarted = MyLoadable(() => import('./gettingStarted'));
const AsyncLocation = MyLoadable(() => import('./Location'));
const AsyncStore = MyLoadable(() => import('./Store'));


class MobileRoute extends Component {


  render() {
    const {Theme} = this.props;

    
    return (
      <ThemeProvider theme={Theme}>
        <Main>
      <Switch>
      <Route exact path='/' render={(routeProps) =>
            <Redirect to='/getting-started' {...routeProps}/>}/>
        <Route exact path='/location' render={(routeProps) =>
            <AsyncLocation {...routeProps}/>}/>
        <Route exact path='/getting-started' render={(routeProps) =>
            <AsyncGettingStarted {...routeProps}/>}/>
        <Route exact path='/store' render={(routeProps) =>
            <AsyncStore {...routeProps}/>}/>
      </Switch>
      </Main>
    </ThemeProvider>
)
  }
}

const mapStateToProps = (state) => {
  return {
    targetLanguage:state.App.targetLanguage,
    Data:state.App.appContent,
    SharedData:state.App.sharedContent,
    Theme:state.App.Theme
  }

}

export default withRouter(connect(mapStateToProps)(MobileRoute));


