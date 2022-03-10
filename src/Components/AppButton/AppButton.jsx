import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function AppButton() {
  return (
    <div>
      <Link to="/about">
        <Button colorScheme="blue">Home</Button>
      </Link>
    </div>
  );
}

export default AppButton;
