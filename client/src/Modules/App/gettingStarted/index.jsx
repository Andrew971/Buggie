import React, {PureComponent, Fragment} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import TemplateLoad from '../Templates'

class GettingStarted extends PureComponent {


  getData = () => {
    const {data} = this.props;
    const {pathname} = this.props.location

    const Section = data
      .field
      .find(base => base.placement === pathname)
    return Section || {}
  }

 

  render() {
    const {Theme} = this.props;
    const fetchedData = this.getData();
    const {pathname} = this.props.location
    console.log(pathname)
    return (
      <Fragment>
        <TemplateLoad
          type={fetchedData.type || 'biography'}
          data={fetchedData.option}
          Theme={Theme}
          />
      </Fragment>
    );

  }
}

const mapStateToProps = state => {
  return {Theme: state.App.Theme, data: state.App.appContent};
};
export default withRouter(connect(mapStateToProps)(GettingStarted));
