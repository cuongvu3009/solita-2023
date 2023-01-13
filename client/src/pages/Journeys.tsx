import axios from 'axios';
import { useEffect, useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import Navbar from '../components/Navbar';

const Journeys = () => {
  const [page, setPage] = useState(1);
  const [journeys, setJourneys] = useState([]);

  useEffect(() => {
    const getAllJourneys = async () => {
      try {
        const res = await axios.get(`/api/v1/journeys?page=${page}&size=100`);
        setJourneys(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllJourneys();
  }, [page]);

  const nextPage = () => setPage((prev) => prev + 1);

  const prevPage = () => setPage((prev) => prev - 1);

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
    rows: journeys,
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
            <button onClick={nextPage} disabled={!journeys.length}>
              Next Page
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Journeys;
