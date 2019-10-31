import React from "react";
import ReactDOM from "react-dom";

class Top extends React.Component {
  constructor(props) {
    super(props);

    this.addressInput = React.createRef();
    this.state = {
      query: "",
      map: null
    };
  }

  componentDidMount() {
    this.setState({
      map: new window.google.maps.Map(
        ReactDOM.findDOMNode(this.addressInput.current),
        {
          zoom: 16,
          center: new window.google.maps.LatLng(29.571068, 126.897583)
        }
      )
    });
  }

  handleChange = (e) => {
    this.setState({query: e.target.value});
  };

  handleSubmit = () => {
    const request = {
      query: this.state.query,
      fields: ["name", "geometry"]
    };
    const service = new window.google.maps.places.PlacesService(this.state.map);

    service.findPlaceFromQuery(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
      }
      this.state.map.setCenter(results[0].geometry.location);
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
            value={this.state.query}
            onChange={this.handleChange}
          />
          <input type="button" value="Encode" onClick={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default Top;
