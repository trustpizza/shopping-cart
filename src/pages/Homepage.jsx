import { useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {

  return (
    <>
    <div>
      <h1>Bananazon!</h1>
      <Link to="/shop">Start Shopping</Link>
    </div>
    </>
  )
}

export default Homepage;