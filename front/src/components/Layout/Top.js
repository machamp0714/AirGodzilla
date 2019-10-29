import React, {useEffect} from "react";
import ReactDOM from "react-dom";

const Top = () => {
  let mapDisplay = React.createRef();

  const [address, setAddress] = React.useState("Sydney, NSW");
  const [map, setMap] = React.useState(null);

  useEffect(() => {
    setMap(
      new window.google.maps.Map(ReactDOM.findDOMNode(mapDisplay.current), {
        zoom: 8,
        center: new window.google.maps.LatLng(-34.397, 150.644)
      })
    );
  }, map);

  const handleClick = () => {
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({address: address}, (results, status) => {
      if (status === "OK") {
        map.setCenter(results[0].geometry.location);
        const marker = new window.google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful");
      }
    });
  };

  return (
    <div>
      <div id="map" ref={mapDisplay} style={{width: 320, height: 480}} />

      <div>
        <input type="text" value={address} />
        <input type="button" value="Encode" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Top;
