import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function ContactMap() {
  return (
    <MapContainer
      center={[-33.8688, 151.2093]} // Sydney example
      zoom={13}
      style={{
        width: '100%',
        height: '450px',
        borderRadius: '24px',
      }}
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[-33.8688, 151.2093]}>
        <Popup>Purls Mobile Massage</Popup>
      </Marker>
    </MapContainer>
  );
}
