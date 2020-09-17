import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { connect } from "react-redux";

import "./styleMapsOSM/style.css";

class LocalizaCursinho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myLatitude: -23.5496976,
      myLongitude: -46.6342887,
      nameCourse: "",
      state: "",
      city: "",
      neighborhood: "",
      street: "",
      number: "",
    };
  }

  success = (position) => {
    this.setState({
      myLongitude: position.coords.longitude,
      myLatitude: position.coords.latitude,
    });
  };

  showError = (error) => {
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
  };

  render() {
    navigator.geolocation.getCurrentPosition(this.success, this.showError);

    return (
      <div>
        {/*  <div className="infoLocaliza">
            <span>{this.state.nameCourse}</span>
            <span>{this.state.state}</span>
            <span>{this.state.city}</span>
            <span>{this.state.neighborhood}</span>
            <span>{this.state.street} {this.state.number}</span>
        </div> */}
        <div className="localizacursinhobody">
          <Map
            center={[this.state.myLatitude, this.state.myLongitude]}
            zoom={13}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright"> OpenStreetMap </a> contributors'
            ></TileLayer>
            {this.props.marker.map((value) => (
              <Marker position={[value.lat, value.long]}>
                
                <Popup>{value.name}</Popup>
              </Marker>
            ))}
          </Map>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ marker: state.MarkerReducer });

export default connect(mapStateToProps)(LocalizaCursinho);
