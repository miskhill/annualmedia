import React from "react";

const PageNotFound = () => {

  // return a 404 page layout include a link to the home page and the vamp404 image from the public folder

  return (
    <div className="pageNotFound">
      <h1>404 Page Not Found</h1>
      <img src="/vamp404.png" alt="404 Page Not Found" />
      <p>
        <a href="/">Go Home</a>
      </p>
    </div>
  );
};

export default PageNotFound;
