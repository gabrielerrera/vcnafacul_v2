import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const Home = ({ user }) => {
  console.log(user);
  return (
    <div>
      <Link to="/login">LoginBrabo</Link>
      {user.firstName}
      {user.email}

    </div>
  );
};

const mapStateToProps = (state) => ({ user: state.AuthReducer });

export default connect(mapStateToProps)(Home);
