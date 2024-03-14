import React from "react";

function withButton(Component, partialProps) {
  return (props) => {
    return <Component {...props} {...partialProps} />;
  };
}

export default withButton;
