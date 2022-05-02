import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div
      className="footer"
      data-testid="footer"
    >
      <Link
        to="/drinks"
        data-testid="drinks-bottom-btn"
      >
        Bebidas
      </Link>

      <Link
        to="/explore"
        data-testid="explore-bottom-btn"
      >
        Explorar
      </Link>

      <Link
        to="/foods"
        data-testid="food-bottom-btn"
      >
        Comidas
      </Link>
    </div>
  );
}

export default Footer;
