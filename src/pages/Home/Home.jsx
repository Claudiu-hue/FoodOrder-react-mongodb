import React from "react";
import { Button } from "flowbite-react";

const Home = () => {
  return (
    <div>
      <Button>{import.meta.env.REACT_APP_API_URL}</Button>
    </div>
  );
};

export default Home;
