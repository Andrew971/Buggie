import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Switch, Route} from 'react-router-dom'
// import MyMapComponent from '../../Utils/HOCs/googleMap'
import {ThemeProvider} from 'styled-components';
import MyLoadable from '../../Utils/myLoadable'

const AsyncHome = MyLoadable(() => import('../../Modules/App'));
const AsyncSkills = MyLoadable(() => import('../../Modules/App'));

class MobileRoute extends Component {

  render() {
    const {Theme} =this.props

    return (
            <ThemeProvider theme={Theme}>
      <Switch>
        <Route exact path='/' render={(routeProps) =>
            <AsyncHome {...routeProps}/>}/>
        <Route path='/skills' render={(routeProps) =>
            <AsyncSkills {...routeProps}/>}/>
 
      </Switch>
    </ThemeProvider>
)
  }
}
const mapStateToProps = (state) => {

  return {
    targetLanguage:state.App.targetLanguage,
    Data:state.App.websiteContent,
    SharedData:state.App.sharedContent,
    Theme:state.App.Theme
  }

}

export default withRouter(connect(mapStateToProps)(MobileRoute));


