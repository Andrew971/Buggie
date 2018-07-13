import React, {PureComponent, Fragment} from "react";
import {withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import TemplateLoad from '../Templates'
import {locationAction} from './actions'

class Location extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      step: 0,
      location: null,
      currentLocation: true
    }

  }

  getData = () => {
    const {data} = this.props;
    const {step} = this.state;
    const {pathname} = this.props.location

    const Section = data
      .field
      .find(base => base.placement === pathname)
      .field
      .find(base => base.step === step)

    return Section || {}
  }

  stepHandler = (step) => {
    this.setState((prevState) => {
      return {
        step: prevState.step + step
      }
    })
  }

  findBarComponent = (component) => {
    const {pathname} = this.props.location
    const {data} = this.props;

    let getComponent = data
      .field
      .find(base => base.component === component)
      .field
      .find(base => base.placement === pathname)

    return getComponent || {}
  }

  getLocation = (locationInfo) => this.setState({location: locationInfo})

  validateLocation = () => this
    .props
    .actions({type: 'LOCATION_CONFIRM_REQUESTED', payload: this.state.location})

  render() {
    const {Theme, status, redirect} = this.props;
    const {currentLocation, location} = this.state;
    const fetchedData = this.getData();
    const topBar = this.findBarComponent('topbar')

    if (redirect) {
      return <Redirect
        to={{
        pathname: "/store",
        state: {
          location: location.formatted_address
        }
      }}/>
    } else {
      return (
        <Fragment>
          <TemplateLoad
            type={topBar.type || 'biography'}
            data={topBar.option}
            Theme={Theme}/>
          <TemplateLoad
            type={fetchedData.type || 'biography'}
            data={fetchedData.option}
            Theme={Theme}
            stepHandler={this.stepHandler}
            validateLocation={this.validateLocation}
            isConfirmed={status}
            getLocation={this.getLocation}
            currentLocation={currentLocation}/>
        </Fragment>
      );
    }
  }
}

const mapDispatchToProps = {
  actions: locationAction
}

const mapStateToProps = state => {
  return {Theme: state.App.Theme, data: state.App.appContent, status: state.App.status, redirect: state.App.redirect};
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Location));
