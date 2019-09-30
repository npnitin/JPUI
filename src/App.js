import React,{Fragment} from 'react';
import './App.css';
import Navbar from './features/navbar/Navbar';
import AuthHome from './features/Login/AuthHome';
import { Route } from 'react-router-dom';
import Dashboard from './features/Jobs/JobsDashboard/Dashboard';
import { Container } from 'semantic-ui-react';
import Home from './features/Home/Home';
import CreateJobForm from './features/Jobs/CreateJob/CreateJobForm';
import RegisterForm from './features/Login/RegisterForm';
import UserDashboard from './features/User/UserDashboard';
import TestComponent from './Test/TestComponent';

function App() {
  
  return (
    <Fragment>
      <Navbar/><br/><br/>
      <Container className="main">
        <Route exact path="/" component={Home}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/login" component={AuthHome}/>
        <Route exact path="/register" component={RegisterForm}/>
        <Route exact path="/create" component={CreateJobForm}/>
        <Route path="/user" component={UserDashboard}/>
        <Route path="/test" component={TestComponent}/>
        </Container>
    </Fragment>
  );
}

export default App;
