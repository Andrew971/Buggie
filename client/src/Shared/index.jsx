import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import './styles.css'
import App from '../Modules/App';
import Modal from '../Modules/Modal'
import Portal from '../Utils/portal'
import HiddenView from '../Components/HiddenView'
class Containers extends Component {

  render() {
    const {modalDisplay} = this.props
    return (
      <Fragment>
        <HiddenView xs>
          <div>test</div>
        </HiddenView>
        <HiddenView md lg xl>
          <App/>
        </HiddenView>
        {modalDisplay && <Portal>
          <Modal/>
        </Portal>}
      </Fragment>

    );
  }
}
const mapStateToProps = (state) => {
  return {shared: state.sharedState.state, modalDisplay: state.sharedState.modalDisplay, Theme: state.sharedState.Theme};
};

export default connect(mapStateToProps)(Containers);
