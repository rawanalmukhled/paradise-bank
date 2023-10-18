import React from "react";

const Home = () => {
  return (
    <div>
      <div className="h-full flex flex-col items-center justify-start mt-10 bg-white-100">
        <h1 className="text-4xl font-bold text-green-800 leading-tight mt-32">
          Welcome to Paradise Bank
        </h1>
      </div>

      <div className="flex justify-center items-center mt-10 bg-white-100">
        <div className="flip-card w-80 h-48 relative">
          <div className="flip-card-inner absolute w-full h-full transition-transform duration-700 ease-in-out transform rotate-y-0">
            <div className="flip-card-front absolute top-0 left-0 w-full h-full bg-blue-500 text-white p-6 rounded-lg shadow-md">
              {/* Card Front Content */}
              <h2 className="text-xl font-bold mb-4">Bank Name</h2>
              <div className="mt-8 mb-4">
                <span className="text-sm block opacity-75">Card Number</span>
                <span className="text-lg font-bold">1234 5678 1234 5678</span>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="text-sm block opacity-75">Card Holder</span>
                  <span>John Doe</span>
                </div>
                <div>
                  <span className="text-sm block opacity-75">Expiry Date</span>
                  <span>12/24</span>
                </div>
              </div>
            </div>
            {/* beginning of the back card */}
            <div>
              <div className="flip-card-back absolute top-0 left-0 w-full h-full bg-red-300 text-white p-6 rounded-lg shadow-md transform rotate-y-180">
                <div className="bg-black h-6 mb-4"></div>
                <div className="bg-gray-200 h-16 mb-4"></div>
                <div className="text-right">
                  <span className="text-sm block opacity-75">CVV</span>
                  <span className="text-lg font-bold">123</span>
                </div>
              </div>
            </div>
            {/* end of the back card */}
          </div>
        </div>

        <style jsx>{`
          .flip-card {
            perspective: 1000px;
          }
          .flip-card-inner {
            transform-style: preserve-3d;
          }
          .flip-card:hover .flip-card-inner {
            transform: rotateY(-180deg);
          }
          .flip-card-front,
          .flip-card-back {
            backface-visibility: hidden;
            position: absolute;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Home;
