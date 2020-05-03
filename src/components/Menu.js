import React from 'react';
import { Link } from "react-router-dom";

export default function Menu(props) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/news">
            {`News (${props.zeznania.length})`}
          </Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
    </nav>
  );
}