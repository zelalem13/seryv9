import React from 'react'

const Signedup = ({setIsSignedUp}) => {
  return (
    <>
    <h1 className="title">You are now logged in!</h1>
    <button className="back_button" onClick={() => setIsSignedUp(false)}>
      Go Back
    </button>
  </>
  );
};

export default Signedup