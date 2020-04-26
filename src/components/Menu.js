import React from 'react';
import { Link } from "react-router-dom";

export default function Menu() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </nav>
    );
  }