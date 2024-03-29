import React from 'react';
import Chair from '../../../assets/images/chair.png';
const Banner = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content   flex-col lg:flex-row-reverse">
          <img src={Chair} className=" w-1/2 rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-info bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;