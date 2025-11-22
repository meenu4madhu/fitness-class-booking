import React, { useEffect, useState } from "react";
import { getAllclasses } from "../services/allAPI.js";

import { Link } from 'react-router-dom';

function Classcard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadClasses = async () => {
      const response = await getAllclasses();
      // console.log(response);
      
      setData(response.data);
      // console.log(response.data);
      
    };

    loadClasses();
  }, []);

  return (
    <>
      <div id='fitnessclass' className="container-fluid bg-dark">
        <h1
          style={{ textShadow: "2px 2px 4px rgba(255, 0, 0, 1)" }}
          className='my-5 text-warning text-center p-3'
        >
          Our Classes
        </h1>

        <div className="row d-flex justify-content-center align-items-center mb-5">
          {data.map((item) => (
            <div
              key={item?.id}
              style={{ backgroundColor: 'rgb(255, 165, 0)' }}
              className="col-md-3 m-3 shadow-lg rounded"
            >
              <img
                width={'350px'}
                height={'300px'}
                style={{ objectFit: "cover" }}
               src={item.image}
                className='mt-4 border rounded'
                alt="img"
              />

              <h3 className='text-center my-3 text-dark'>{item?.name}</h3>

              <div className='p-3'>
                <h5>Type: {item.types?.join(", ")}</h5>
                <h5>Duration: {item?.duration}</h5>
                <h5>Level: {item.levels?.join(", ")}</h5>
                <h5>Benefits: {item?.benefits}</h5>
                <h5>Instructor Name: {item?.instructor}</h5>

                <div className='my-3'>
                  <Link
                    to={`/classbooking/${item?.id}`}
                    className='text-warning rounded bg-dark text-decoration-none p-2'
                  >
                    Book Now
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Classcard;