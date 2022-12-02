import logo from './logo.svg';
import './App.css';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
function App() {

  console.log("app")
  const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyB41DRUbKWJHPxaFjMAw", });
  if (!isLoaded) return <div className="App">Loading...</div>
  return (
    <div className="App">
      <Map />
    </div>
  );
}

const Map = () => {
  return (
    <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }}>
      <Marker position={{ lat: 44, lng: -80 }} />
    </GoogleMap>
  )
}

export default App;
