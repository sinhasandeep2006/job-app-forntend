import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <div className='container'>
      <h1>Welcome to Job Application Portal</h1>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default HomePage;
