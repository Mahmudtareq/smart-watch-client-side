import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import OurProducts from './Pages/OurProducts/OurProducts';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
function App() {
  return (
    <div className ="App">
    <AuthProvider>
    <Router>
        <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/register">
          <Register></Register>
          </Route>
        <Route path="/aboutUs">
          <AboutUs></AboutUs>
        </Route>
        <Route path="/ourProducts">
          <OurProducts></OurProducts>
            </Route>
        <PrivateRoute path="/booking/:productId">
         <Booking></Booking>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
              <Dashboard></ Dashboard>
        </PrivateRoute>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
