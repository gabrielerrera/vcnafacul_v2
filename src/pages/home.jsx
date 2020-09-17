import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as UserAction from "../store/actions/userAction";
/* import MapsGoogle from "../components/mapsGoogle"; */
import MapsOSM from "../components/mapsOSM";

const Home = ({ user, change }) => {
  return (
    <div>
      <Link to="/login">LoginBrabo</Link>
      {user.firstName}
      {user.email}
      <input onChange={(event) => change(event.target.value)} />
      <MapsOSM />
    </div>
  );
};

const mapStateToProps = (state) => ({ user: state.AuthReducer });

const mapDispatchToProps = (dispatch) => ({
  change: (value) => dispatch(UserAction.Change(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
