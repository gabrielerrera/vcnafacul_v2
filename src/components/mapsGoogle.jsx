import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import KeyApi from "../constantes";

const containerStyle = {
  width: "400px",
  height: "400px",
};

function MyComponent() {
  const [map, setMap] = React.useState(null);

  const [myLongitude, setMyLongitude] = React.useState(39.0200);

  const [myLatitude, setMyLatitude] = React.useState(1.4821);

  function success(position) {
    setMyLongitude(position.coords.longitude);
    setMyLatitude(position.coords.latitude);
  }

  const center = {
    lat: myLatitude,
    lng: myLongitude,
  };

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("Usuário rejeitou a solicitação de Geolocalização.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Localização indisponível.");
        break;
      case error.TIMEOUT:
        console.log("A requisição expirou.");
        break;
      case error.UNKNOWN_ERROR:
        console.log("Algum erro desconhecido aconteceu.");
        break;
      default:
        break;
    }
  }
  navigator.geolocation.getCurrentPosition(success, showError);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <LoadScript googleMapsApiKey={KeyApi}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={20}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
