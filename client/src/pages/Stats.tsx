import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const Stats = () => {
  const [departStations, setDepartStations] = useState([]);
  const [returnStations, setReturnStations] = useState([]);

  useEffect(() => {
    const getDepartJourneys = async () => {
      try {
        const res = await axios.get(`/api/v1/stations/stats/departjourneys`);
        setDepartStations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDepartJourneys();
  }, []);

  useEffect(() => {
    const getReturnJourneys = async () => {
      try {
        const res = await axios.get(`/api/v1/stations/stats/returnjourneys`);
        setReturnStations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getReturnJourneys();
  }, []);

  const departdata = {
    columns: [
      {
        label: 'Total journeys',
        field: 'count',
        sort: 'count',
        width: 500,
      },
      {
        label: 'Station name',
        field: 'departurestation_name',
        sort: 'asc',
        width: 500,
      },
    ],
    rows: departStations,
  };

  const returndata = {
    columns: [
      {
        label: 'Total journeys',
        field: 'count',
        sort: 'count',
        width: 500,
      },
      {
        label: 'Station name',
        field: 'returnstation_name',
        sort: 'asc',
        width: 500,
      },
    ],
    rows: returnStations,
  };

  return (
    <>
      <Navbar />
      <div className='stats'>
        <div className='left table'>
          <h2>Total number of departing journeys from each station</h2>
          <MDBDataTable data={departdata} paging={false} />
        </div>

        <div className='line'></div>

        <div className='right table'>
          <h2>Total number of returning journeys from each station</h2>
          <MDBDataTable data={returndata} paging={false} />
        </div>
      </div>
    </>
  );
};

export default Stats;
