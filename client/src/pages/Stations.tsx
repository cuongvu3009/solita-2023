import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const Stations = () => {
  const [page, setPage] = useState(1);
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const getAllStations = async () => {
      try {
        const res = await axios.get(`/api/v1/stations?page=${page}&size=100`);
        setStations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllStations();
  }, [page]);

  const nextPage = () => setPage((prev) => prev + 1);

  const prevPage = () => setPage((prev) => prev - 1);

  const data = {
    columns: [
      {
        label: 'id',
        field: 'id',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'station_id',
        field: 'station_id',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'stationname',
        field: 'stationname',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'namn',
        field: 'namn',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'name',
        field: 'name',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'osoite',
        field: 'osoite',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'stationaddress',
        field: 'stationaddress',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'kaupunki',
        field: 'kaupunki',
        sort: 'asc',
        width: 100,
      },

      {
        label: 'stad',
        field: 'stad',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'operaattor',
        field: 'operaattor',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'kapasiteet',
        field: 'kapasiteet',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'x',
        field: 'x',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'y',
        field: 'y',
        sort: 'asc',
        width: 100,
      },
    ],
    rows: stations,
  };

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='table'>
          <MDBDataTable data={data} />
          <nav>
            <button onClick={prevPage} disabled={page === 1}>
              Prev Page
            </button>
            <button onClick={nextPage} disabled={!stations.length}>
              Next Page
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Stations;
