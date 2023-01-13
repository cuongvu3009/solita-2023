import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='title'>
        <Link to='/' className='styledLink'>
          <h3>Solita Challenge 2023</h3>
        </Link>
      </div>

      <div className='buttons'>
        <Link to='/stations' className='styledLink'>
          <button>Show stations</button>
        </Link>
        <Link to='/journeys' className='styledLink'>
          <button>Show journeys record</button>
        </Link>
        <Link to='/stats' className='styledLink'>
          <button>Stats</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
