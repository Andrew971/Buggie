import React from 'react'
import MyMapComponent from '../../../Utils/HOCs/googleMap'
import {BottomBar} from '../../../Components/MobileUi/appBar'
import BlackMask from '../../../Components/BlackMask'
import Validation from '../../../Components/Validation'
import Main from '../../../Components/MobileUi/main'

const Map = (props) => {

  return (
    <Main>
    {props.isConfirmed && <BlackMask><Validation /></BlackMask>}
      
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={< div style = {{ height: `100%` }}/>}
        containerElement={< div style = {{ height: `84vh` }}/>}
        mapElement={< div style = {{ height: `100%` }}/>}
        getLocation={props.getLocation}
        location={props.location}
        />
      <BottomBar onClick={()=>props.validateLocation()} confirmed={props.isConfirmed}>
        testing components
      </BottomBar>
    </Main>
  )
};
export default Map