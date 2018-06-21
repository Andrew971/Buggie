import React, {PureComponent, Fragment} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {sort_by} from '../../../utils/constMethod'
import TemplateLoad from '../Templates'

 class Home extends PureComponent {
 
  render() {
    const {Theme,data} = this.props;
    const {pathname} = this.props.location
    const Section = data
      .Section
      .field
      .sort(sort_by('DESC', 'order'))
      .filter(section => section.placement === pathname)

      return (
      <Fragment>
        {Section.map((section, n) => <Fragment key={n}>
        <TemplateLoad  type={section.type||'biography'} data={section.option} Theme={Theme}/>
        </Fragment>)}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {Theme: state.UI.Theme, 
    data: state.UI.websiteContent
  };
};
export default withRouter(connect(mapStateToProps)(Home));
