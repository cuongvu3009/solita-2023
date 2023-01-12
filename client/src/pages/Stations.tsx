import axios from 'axios';
import { useEffect, useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import Navbar from '../components/Navbar';

const Stations = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const getAllStations = async () => {
      try {
        const res = await axios.get('/api/v1/stations');
        console.log(res.data);
        setTableData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllStations();
  }, []);

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
    rows: tableData,
  };

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MDBDataTable
          responsive={true}
          autoWidth={true}
          striped={true}
          data={data}
        />
      </div>
    </>
  );
};

export default Stations;
