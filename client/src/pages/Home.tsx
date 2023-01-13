import axios from 'axios';
import Map, { Marker } from 'react-map-gl';
import { useState, useEffect } from 'react';
import { MdRoom } from 'react-icons/md';
import Navbar from '../components/Navbar';

function Home() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const getAllStations = async () => {
      try {
        const res = await axios.get('/api/v1/stations');

        setStations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllStations();
  }, []);

  return (
    <div className='App'>
      <Navbar />

      <Map
        initialViewState={{
          latitude: 60.21,
          longitude: 24.94,
          zoom: 11.2,
        }}
        style={{ width: '100vw', height: '100vh' }}
        mapboxAccessToken='pk.eyJ1IjoiY3Vvbmd2dTMwMDkiLCJhIjoiY2t5aG5mNWJkMTl1bDJucXBrajB6ZnNjbyJ9.kW1o9St0GSSF7ihkr_8sDw'
        mapStyle='mapbox://styles/cuongvu3009/ckyk0o90q5nkp15pc0lnjq2ky'
      >
        {stations.map((s: any) => (
          <Marker latitude={s.y} longitude={s.x}>
            <div className='card'>
              <h4 className='place'>
                <MdRoom size={20} />
                {s.stationname} station
              </h4>
              <p className='place'>({s.stationaddress})</p>
            </div>
          </Marker>
        ))}
      </Map>
    </div>
  );
}

export default Home;
