import React, {Component} from 'react';
import SearchBox from "react-google-maps/lib/components/places/SearchBox";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"
import {SimpleCard} from '../../Components/MobileUi/card'
import {TextField} from '../../Components/inputForm'
class MyMapComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      zoom: 12,
      bounds: null,
      lat: 41.9,
      lng: -87.624,
      center: {
        lat: 41.9,
        lng: -87.624
      },
      markers: []
    }
    this.searchBox = React.createRef()
    this.map = React.createRef()

  }

  componentDidMount = () => {
   this.props.location && navigator
      .geolocation
      .getCurrentPosition((position) => {
        const {longitude, latitude} = position.coords
        this.setState({
          center: {
            lat: latitude,
            lng: longitude
          }
        })
      });
  }

  handleBoundsChange = () => {
    this.setState({
      bounds: this
        .refs
        .map
        .getBounds(),
      center: this
        .refs
        .map
        .getCenter()
    });
  }

  handlePlacesChanged = () => {
    const places = this
      .refs
      .searchBox
      .getPlaces();
    const bounds = new window
      .google
      .maps
      .LatLngBounds();

    this.props.getLocation(places[0])

    places.forEach(place => {
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport)
      } else {
        bounds.extend(place.geometry.location)
      }
    });

    const nextMarkers = places.map(place => ({position: place.geometry.location}));
    // console.log(nextMarkers)
    const nextCenter = nextMarkers.length > 0
      ? nextMarkers[0].position
      : this.state.center;
    // console.log(nextCenter)
    this.setState({center: nextCenter, markers: nextMarkers, zoom: 18});
  }

  render() {
    const {isMarkerShown} = this.props
    const {center, bounds, zoom} = this.state

    return (
      <GoogleMap
        ref="map"
        defaultZoom={12}
        zoom={zoom}
        center={center}
        onBoundsChanged={this.handleBoundsChange}
        defaultClickableIcons={false}
        defaultOptions={{
        streetViewControl: false,
        scaleControl: false,
        mapTypeControl: false,
        panControl: false,
        zoomControl: false,
        fullscreenControl: false
      }}
        disableDefaultUI>
        <SearchBox
          ref="searchBox"
          bounds={bounds}
          onPlacesChanged={this.handlePlacesChanged}
          controlPosition={window.google.maps.ControlPosition.BOTTOM}>
          <SimpleCard>
            <TextField type="text" label="hello"/>
          </SimpleCard>
        </SearchBox>
        {isMarkerShown && <Marker position={center}/>}
      </GoogleMap>
    )
  }
}

export default withScriptjs(withGoogleMap(MyMapComponent))