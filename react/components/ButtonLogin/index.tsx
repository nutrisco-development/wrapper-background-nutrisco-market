import React from "react";
import {Button} from "vtex.styleguide";

const ButtonLogin = () => {
  return (
    <Button variation="primary" size="small">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        width={18}
        height={18}
        strokeWidth={2}
      >
        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path> <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>{" "}
        <path d="M17 17h-11v-14h-2"></path> <path d="M6 5l14 1l-1 7h-13"></path>
      </svg>
    </Button>
  );
};

export default ButtonLogin;
