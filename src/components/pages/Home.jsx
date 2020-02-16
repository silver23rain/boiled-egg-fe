import React from "react";

/*userinfo test*/
const userInfo = JSON.parse(localStorage.getItem("userInfo"));
const username = userInfo.username;
const useremail = userInfo.useremail;

const Home = () => {
  return (
    <div>

  <h2>{username}</h2>
  <h2>{useremail}</h2>
    </div>
  );
};

export default Home;
