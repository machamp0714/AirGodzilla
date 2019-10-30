import React from "react";
import ReactDOM from "react-dom";

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.addressInput = React.createRef();
    this.state = {
      address: "Sydney, NSW",
      map: null
    };
  }

  componentDidMount() {
    this.setState({
      map: new window.google.maps.Map(
        ReactDOM.findDOMNode(this.addressInput.current),
        {
          zoom: 16,
          center: new window.google.maps.LatLng(-34.397, 150.644)
        }
      )
    });
  }

  handleChange = (e) => {
    this.setState({address: e.target.value});
  };

  handleClick = () => {
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({address: this.state.address}, (results, status) => {
      if (status === "OK") {
        this.state.map.setCenter(results[0].geometry.location);
        const marker = new window.google.maps.Marker({
          map: this.state.map,
          position: results[0].geometry.location
        });
        return marker;
      } else {
        alert("Geocode was not successful");
      }
    });
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
