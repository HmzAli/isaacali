import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="container text-center py-5">
      <h1>404 Not found</h1>
      <p>The page you are looking for doesn't exist or have been moved.</p>
      <Link to="/" className="btn btn-secondary">
        Go to home page
      </Link>
    </div>
  );
};

export default NotFound; 