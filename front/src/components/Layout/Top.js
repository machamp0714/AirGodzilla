import React from "react";
import ReactDOM from "react-dom";

class Top extends React.Component {
  constructor(props) {
    super(props);

    this.addressInput = React.createRef();
    this.state = {
      address: "",
      latlng: new window.google.maps.LatLng(-34.397, 150.644),
      map: null
    };
  }

  componentDidMount() {
    this.setState({
      map: new window.google.maps.Map(
        ReactDOM.findDOMNode(this.addressInput.current),
        {
          zoom: 10,
          center: this.state.latlng
        }
      )
    });
  }

  handleChange = (e) => {
    this.setState({address: e.target.value});
  };

  createGeocoderPromisee = () => {
    const geocoder = new window.google.maps.Geocoder();

    return new Promise((resolve, reject) => {
      geocoder.geocode({address: this.state.address}, (results, status) => {
        if (status === "OK") {
          resolve(results);
        } else {
          reject(status);
        }
      });
    });
  };

  getGoecode = () => {
    this.createGeocoderPromisee()
      .then((results) => {
        this.setState({latlng: results[0].geometry.location});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  mapsNearBySearch = () => {
    const service = new window.google.maps.places.PlacesService(this.state.map);
    const request = {
      location: this.state.latlng,
      radius: "1000",
      type: ["cafe"]
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
      } else {
        console.log(status);
      }
    });
  };

  handleClick = () => {
    this.getGoecode();

    this.mapsNearBySearch();
  };

  render() {
    return (
      <div>
        <div
          id="map"
          ref={this.addressInput}
          style={{width: 320, height: 480}}
        />

        <div>
          <input
            type="text"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <input type="button" value="Encode" onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Top;
