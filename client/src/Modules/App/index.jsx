import React, {PureComponent, Fragment} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {sort_by} from '../../Utils/constants/constMethod'
import TemplateLoad from './Templates'

 class Home extends PureComponent {
 
  render() {
    const {Theme,data} = this.props;
    const {pathname} = this.props.location
    const Section = data
      .field
      .find(section => section.placement === pathname)
    console.log(Section)
      return (
      <Fragment>
        {Section.field.sort(sort_by('DESC', 'order')).map((section, n) => <Fragment key={n}>
        <TemplateLoad  type={section.type||'biography'} data={section.option} Theme={Theme}/>
        </Fragment>)}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {Theme: state.App.Theme, 
    data: state.App.appContent
  };
};
export default withRouter(connect(mapStateToProps)(Home));
