import axios from 'axios';
import Map, { Marker, Popup } from 'react-map-gl';
import { useState, useEffect } from 'react';
import { MdRoom } from 'react-icons/md';
import './app.css';

function App() {
  const [stations, setStations] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);

  useEffect(() => {
    const getAllStations = async () => {
      try {
        const res = await axios.get('/api/v1/stations');
        console.log(res.data);
        setStations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllStations();
  }, []);

  const handleMarkerClick = (id: any, y: any, x: any) => {
    setCurrentPlaceId(id);
    console.log(id, y, x);
  };

  return (
    <div className='App'>
      <Map
        initialViewState={{
          latitude: 60.2,
          longitude: 24.93,
          zoom: 11,
        }}
        style={{ width: '100vw', height: '100vh' }}
        mapboxAccessToken='pk.eyJ1IjoiY3Vvbmd2dTMwMDkiLCJhIjoiY2t5aG5mNWJkMTl1bDJucXBrajB6ZnNjbyJ9.kW1o9St0GSSF7ihkr_8sDw'
        mapStyle='mapbox://styles/cuongvu3009/ckyk0o90q5nkp15pc0lnjq2ky'
      >
        {stations.map((s: any) => (
          <>
            <Marker latitude={s.y} longitude={s.x}>
              <MdRoom
                size={30}
                onClick={() => handleMarkerClick(s.station_id, s.y, s.x)}
              />
            </Marker>

            {s.station_id === currentPlaceId && (
              <Popup
                latitude={s.y}
                longitude={s.x}
                closeButton={true}
                anchor='bottom'
                onClose={() => setCurrentPlaceId(null)}
              >
                <div className='card'>
                  <label>Place</label>
                  <h4 className='place'>hello </h4>
                </div>
              </Popup>
            )}
          </>
        ))}
      </Map>
    </div>
  );
}

export default App;
