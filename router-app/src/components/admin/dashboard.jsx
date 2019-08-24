import React from "react";
import SideBar from './sideBar';
import { Route, Switch } from "react-router-dom";
import Users from "./users";
import Posts from "./posts";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar/>
      <div className="content">
          <Switch>
            <Route path= "/admin/users" component= {Users}></Route>
            <Route path="/admin/posts" component={Posts}> </Route>
          </Switch>
        </div> 
    </div>
  );
};

export default Dashboard;
