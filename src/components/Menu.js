import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { render } from '@testing-library/react';

export default function Menu() {
  // TODO
  // dodaj wyswietlanie liczby w tym komponencie ile jest aktualnie zeznan 
  // zeznania.length

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
    </nav>
  );
}