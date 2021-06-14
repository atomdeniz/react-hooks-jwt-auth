import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const Home = () => {
  const [contents, setContent] = useState();

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <ul>
          {contents &&
            contents.map((content, index) => (
              <li key={index}>{content.body}</li>
            ))}
        </ul>
      </header>
    </div>
  );
};

export default Home;
