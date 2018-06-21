import React,{Fragment}from 'react'
import MyMapComponent from '../../../Utils/HOCs/googleMap'
import {BottomBar} from '../../../Components/MobileUi/appBar'


 const Map = (...props) => {

  return (<Fragment>
  <MyMapComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `92vh` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
<BottomBar>
  testing components
</BottomBar>
</Fragment>
  )
};
export default Map