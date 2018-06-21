import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import './styles.css'
import MobileRoute from './MobileRoute';
import Modal from '../Modules/Modal'
import Portal from '../Utils/portal'

class Containers extends Component {

  render() {
    const { modalDisplay} = this.props
    return (
        <Fragment>
          <MobileRoute/> 
          {modalDisplay && <Portal>
            <Modal/>
          </Portal>}
        </Fragment>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    shared: state.sharedState.state, 
    modalDisplay: state.sharedState.modalDisplay,
    Theme:state.sharedState.Theme
  };
};

export default connect(mapStateToProps)(Containers);
