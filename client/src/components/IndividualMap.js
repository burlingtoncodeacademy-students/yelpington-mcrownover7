import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet";

//creating a function to reset the view (center and zoom) on the map using the useMap and setView methods imported from leaflet
function MyComponent({ center }) {
  const map = useMap();
  map.setView(center);
  return null;
}

function Map(props) {
  return (
    <MapContainer
      center={props.center}
      zoom={16}
      style={{ height: "600px", width: "600px" }}
    >
      {/* returning the created function with center and zoom */}
      <MyComponent center={props.center} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* setting marker based on the passed in name and center from the restaurant fetch */}
      <Marker position={props.center}>
        <Popup>{props.name}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
