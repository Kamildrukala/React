import React from 'react';
import { Link } from 'react-router-dom'

function News(props) {
  return (
    <div>
      <h1>
        Breaking news
      </h1>
      <div>
        { props.zeznania && props.zeznania.map((zeznanie) => {
          return <Link to={`/news/${zeznanie.id}`} key={zeznanie.id}>
            <b>
              {zeznanie.kto}
              :
            </b>
            {zeznanie.zeznanie}
            <br />
          </Link>
        }) }
      </div>
    </div>
  );
}

export default News;