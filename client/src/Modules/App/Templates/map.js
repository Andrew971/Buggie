import React,{Fragment}from 'react'
import MyMapComponent from '../../../Utils/HOCs/googleMap'
import {BottomBar} from '../../../Components/MobileUi/appBar'
import Main from '../../../Components/MobileUi/main'


 const Map = (...props) => {

  return (<Main>
   
  <MyMapComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `84vh` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
<BottomBar>
  testing components
</BottomBar>
</Main>
  )
};
export default Map