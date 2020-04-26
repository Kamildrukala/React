import React from 'react';

function News(props) {
  return (
    <div>
      <h1>
        Breaking news
      </h1>
      <div>
        { props.zeznania && props.zeznania.map((zeznanie) => {
          return <div>
            <b>
              {zeznanie.kto}
              :
            </b>
            {zeznanie.zeznanie}
          </div>
        }) }
      </div>
    </div>
  );
}

export default News;