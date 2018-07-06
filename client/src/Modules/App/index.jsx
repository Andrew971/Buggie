import React, {Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter, Switch, Route,Redirect} from 'react-router-dom'
// import MyMapComponent from '../../Utils/HOCs/googleMap'
import TemplateLoad from './Templates'
import {ThemeProvider} from 'styled-components';
import MyLoadable from '../../Utils/myLoadable'
import Main from '../../Components/MobileUi/main'

const AsyncHome = MyLoadable(() => import('./Location'));
const AsyncGettingStarted = MyLoadable(() => import('./gettingStarted'));

const findBarComponent = (data,component,pathname)=>{
  let getComponent = data
  .field
  .find(base=>base.component === component)
  .field
  .find(base=>base.placement === pathname)

  return getComponent || {}
}
class MobileRoute extends Component {


  render() {
    const {Theme,Data} = this.props;
    const {pathname} = this.props.location
    const topBar = findBarComponent(Data,'topbar',pathname)

    
    return (
      <ThemeProvider theme={Theme}>
        <Fragment>
        <TemplateLoad  type={topBar.type||'biography'} data={topBar.option} Theme={Theme}/>
        <Main>
      <Switch>
      <Route exact path='/' render={(routeProps) =>
            <Redirect to='/getting-started' {...routeProps}/>}/>
        <Route exact path='/location' render={(routeProps) =>
            <AsyncHome {...routeProps}/>}/>
        <Route path='/getting-started' render={(routeProps) =>
            <AsyncGettingStarted {...routeProps}/>}/>
      </Switch>
      </Main>
      </Fragment>
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


