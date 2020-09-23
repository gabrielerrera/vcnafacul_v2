import React from "react";
import { connect } from "react-redux";

import * as UserAction from "../store/actions/userAction";
/* import MapsGoogle from "../components/mapsGoogle"; */

import MenuNav from '../components/MenuHome/index';

const Home = () => {
  return (
    <div>
      <MenuNav />
    </div>
  );
};

const mapStateToProps = (state) => ({ user: state.AuthReducer });

const mapDispatchToProps = (dispatch) => ({
  change: (value) => dispatch(UserAction.Change(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
