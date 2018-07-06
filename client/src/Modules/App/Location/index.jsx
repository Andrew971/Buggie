import React, {PureComponent, Fragment} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import TemplateLoad from '../Templates'
import {locationAction} from './actions'

class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      isConfirmed:false,
      location:null
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

  getLocation = (locationInfo) =>{
    this.setState({ location: locationInfo })
  }

  validateLocation = () => {
    this.props.actions({type:'LOCATION_CONFIRM_REQUESTED',payload:this.state.location})
    // this.setState({ isConfirmed: true })
  }


  render() {
    const {Theme} = this.props;
    const {isConfirmed,location} = this.state;
    const fetchedData = this.getData();

    return (
      <Fragment>
        <TemplateLoad
          type={fetchedData.type || 'biography'}
          data={fetchedData.option}
          Theme={Theme}
          stepHandler={this.stepHandler}
          validateLocation={this.validateLocation}
          isConfirmed={isConfirmed}
          getLocation={this.getLocation}
          location={location}
          />
      </Fragment>
    );

  }
}

const mapDispatchToProps = {
  actions:locationAction,
}

const mapStateToProps = state => {
  return {Theme: state.App.Theme, data: state.App.appContent};
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home));
