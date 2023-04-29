import React from "react";

const PageNotFound = () => {

  return (
    <div className="pageNotFound">
      <h1>Page Not Found</h1>
      <img src="/vamp404.png" alt="404 Page Not Found" />
      <p>
        <a href="/">Go Back To Home</a>
      </p>
    </div>
  );
};

export default PageNotFound;
