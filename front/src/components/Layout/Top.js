import React from "react";

const Top = () => {
  return <div>Top</div>;
};

export default Top;

// const [address, setAddress] = React.useState("");
// const [cordinates, setCordinates] = React.useState({ lat: null, lng: null });

// // async?
// const handleSelect = async (value) => {
//   const results = await geocodeByAddress(value);
//   const latLng = await getLatLng(results[0]);
//   console.log(latLng);

//   setAddress(value);
//   setCordinates(latLng);
// };

// return (
//   <div>
//     <PlacesAutocomplete
//       value={address}
//       onChange={setAddress}
//       onSelect={handleSelect}
//     >
//       {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//         <div>
//           <p>Latitude: {cordinates.lat}</p>
//           <p>Longitude: {cordinates.lng}</p>

//           <input {...getInputProps({ placeholder: "Types address" })} />

//           <div>
//             {loading ? <div>...loading</div> : null}

//             {suggestions.map((suggestion, index) => {
//               const style = {
//                 backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
//               };

//               return (
//                 <div
//                   {...getSuggestionItemProps(suggestion, { style })}
//                   key={index}
//                 >
//                   {suggestion.description}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </PlacesAutocomplete>
//   </div>
// );
