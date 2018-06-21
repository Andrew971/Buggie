import React, {PureComponent, Fragment} from "react";
import {withRouter,} from 'react-router-dom'
import {connect} from 'react-redux';
import {sort_by} from '../../../utils/constMethod'
import TemplateLoad from '../Templates'


class Skills extends PureComponent {
 

  render() {
    const {pathname} = this.props.location
    const {data,Theme} = this.props
    const Section = data
      .Section
      .field
      .sort(sort_by('DESC', 'order'))
      .filter(section => section.placement === pathname)
    return (
      <Fragment>
      {Section.map((section, n) => <Fragment key={n}>
      <TemplateLoad  type={section.type||'focus'} data={section.option} Theme={Theme}/>  
        </Fragment>)}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    data: state.UI.websiteContent,
    Theme: state.UI.Theme, 
  }

}
export default withRouter(connect(mapStateToProps)(Skills));

