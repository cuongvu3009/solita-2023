import axios from 'axios';
import { useEffect, useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import Navbar from '../components/Navbar';

const Journeys = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const getAllStations = async () => {
      try {
        const res = await axios.get('/api/v1/journeys');
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
        label: 'departuretime',
        field: 'departuretime',
        sort: 'asc',
        width: 250,
      },
      {
        label: 'returntime',
        field: 'returntime',
        sort: 'asc',
        width: 250,
      },
      {
        label: 'departurestation_id',
        field: 'departurestation_id',
        sort: 'asc',
        width: 250,
      },
      {
        label: 'departurestation_name',
        field: 'departurestation_name',
        sort: 'asc',
        width: 250,
      },
      {
        label: 'returnstation_id',
        field: 'returnstation_id',
        sort: 'asc',
        width: 250,
      },
      {
        label: 'returnstation_name',
        field: 'returnstation_name',
        sort: 'asc',
        width: 250,
      },
      {
        label: 'distancecoveredinmeters',
        field: 'distancecoveredinmeters',
        sort: 'asc',
        width: 250,
      },
      {
        label: 'durationseconds',
        field: 'durationseconds',
        sort: 'asc',
        width: 250,
      },

      {
        label: 'journey_id',
        field: 'journey_id',
        sort: 'asc',
        width: 250,
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

export default Journeys;
