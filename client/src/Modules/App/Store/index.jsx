import React, {PureComponent, Fragment} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import TemplateLoad from '../Templates'
import {StoreAction} from './actions'

class Store extends PureComponent {

  componentDidMount=()=>{
    console.log(this.props)
    !this.props.status&&this
    .props
    .actions({type: 'STORE_LIST_REQUESTED', payload: this.props.location.state.location})
  }
  getData = () => {
    const {data} = this.props;
    const {pathname} = this.props.location

    const Section = data
      .field
      .find(base => base.placement === pathname)
    return {}
  }

 

  render() {
    const {Theme} = this.props;
    const fetchedData = this.getData();
    const {pathname} = this.props.location
    console.log(pathname)
    return (
      <Fragment>
        testing 
      </Fragment>
    );

  }
}

const mapDispatchToProps = {
  actions: StoreAction
}

const mapStateToProps = state => {
  return {Theme: state.App.Theme, data: state.App.appContent,status: state.App.status,};
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Store));
