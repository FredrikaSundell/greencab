import { useState, useCallback, memo } from 'react'
import {
  GoogleMap,
  useJsApiLoader,
  DirectionsService,
  DirectionsRenderer,
} from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '100%',
}

const center = {
  lat: 59.31708675303813,
  lng: 18.06501429882336,
}

const Map = ({ from, to, directions }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  })

  // const [map, setMap] = useState(null)
  const [directionsResponse, setDirectionsResponse] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds)
    // setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    // setMap(null)
  }, [])

  const directionsCallback = (response) => {
    if (response?.status === 'OK') {
      setDirectionsResponse(response)
    }
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        zoomControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
      }}
    >
      {directions.from && directions.to && (
        <>
          <DirectionsService
            // required
            options={{
              destination: directions.to,
              origin: directions.from,
              travelMode: 'DRIVING',
            }}
            // required
            callback={directionsCallback}
            // optional
            onLoad={(directionsService) => {
              console.log(
                'DirectionsService onLoad directionsService: ',
                directionsService
              )
            }}
            // optional
            onUnmount={(directionsService) => {
              console.log(
                'DirectionsService onUnmount directionsService: ',
                directionsService
              )
            }}
          />
          {!!directionsResponse && (
            <DirectionsRenderer
              // required
              options={{
                directions: directionsResponse,
              }}
              // optional
              onLoad={(directionsRenderer) => {
                console.log(
                  'DirectionsRenderer onLoad directionsRenderer: ',
                  directionsRenderer
                )
              }}
              // optional
              onUnmount={(directionsRenderer) => {
                console.log(
                  'DirectionsRenderer onUnmount directionsRenderer: ',
                  directionsRenderer
                )
              }}
            />
          )}
        </>
      )}
    </GoogleMap>
  ) : (
    <h1>Laddar...</h1>
  )
}

export default memo(Map)
