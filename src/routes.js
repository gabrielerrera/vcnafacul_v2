import React from "react";

import { connect } from "react-redux";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import StudentPage from "./pages/studentPage";
import TeacherPage from "./pages/teacherPage";

const PrivateRoutes = (statusLogin, isTeacher) => {
  
  if (!isTeacher && statusLogin) {
    return <Route path="/vCnaFacul" exact render={() => <StudentPage />
       } />;
  } else if (isTeacher && statusLogin) {
    return <Route path="/vCnaFacul/Teacher" render={() => <TeacherPage />
       } />;
  }
};

const Routes = ({ user }) => {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      {PrivateRoutes(user.statusLogin, user.isTeacher)}
      <Redirect to="/" from="*" />
    </Switch>
  </BrowserRouter>)
};

const mapStateToProps = (state) => ({ user: state.AuthReducer });

export default connect(mapStateToProps, null)(Routes);
