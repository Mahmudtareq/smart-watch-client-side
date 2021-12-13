import  React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from '../../../hooks/useAuth';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrder from '../MyOrder/MyOrder';
import AddProducts from '../../AddProducts/AddProducts';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageProduct from '../../ManageProduct/ManageProduct';
import Reviews from '../Reviews/Reviews';
import PayMent from '../PayMent/PayMent';
import { Button, IconButton } from '@mui/material';
const drawerWidth = 220;

function Dashboard(props) {
  const { window } = props;
  const { logOut,admin} = useAuth();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography sx={{color:'info.main'}} variant="h5">
          <NavLink style={{ textDecoration: "none" }} to="/home">
            <Button  variant="contained">Back To Home</Button>
          </NavLink>
      </Typography>
      </Toolbar>
      <Divider />
      {
        admin && <Box>
          <NavLink style={{ textDecoration: 'none' }} to={`${url}/addProducts`}>
            <Button sx={{ my: 1, px: 4 }} variant="contained" color="inherit">Add Products</Button>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={`${url}/manageProduct`}>
            <Button sx={{ my: 1}}variant="contained" color="inherit" >Manage Product</Button>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}>
            <Button sx={{ my: 1, px: 5 }} variant="contained" color="inherit">Make Admin</Button>
          </NavLink>
          <NavLink style={{ textDecoration: 'none',color:'red' }} to="/">
            <Button sx={{ my: 1, px: 7.5 }} onClick={logOut} variant="contained" color="inherit">LogOut</Button>
          </NavLink>
      
        </Box>
      }
      {
        !admin && <Box>
          <NavLink style={{ textDecoration: 'none' }} to={`${url}`}>
            <Button sx={{ my: 1, px: 5 }} variant="contained" color="inherit">Dashboard</Button>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={`${url}/reviews`}>
            <Button sx={{ my: 1}}variant="contained" color="inherit">Product Review</Button>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={`${url}/myOrder`}>
            <Button sx={{ my: 1, px: 6 }} variant="contained" color="inherit">My Order</Button>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={`${url}/payMent`}>
            <Button sx={{ my: 1}} variant="contained" color="inherit" >PayMent System</Button>
          </NavLink>
          <NavLink style={{ textDecoration: 'none',color:'red' }} to="/">
            <Button sx={{ my: 1, px: 7.5 }} onClick={logOut} variant="contained" color="inherit">LogOut</Button>
          </NavLink>
        </Box>
      }
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/myOrder`}>
          <MyOrder></MyOrder>
          </Route>
          <Route path={`${path}/reviews`}>
         <Reviews></Reviews>
          </Route>
          <Route path={`${path}/payMent/:orderId`}>
          <PayMent></PayMent>
          </Route>
          <Route path={`${path}/addProducts`}>
          <AddProducts></AddProducts>
          </Route>
          <Route path={`${path}/manageProduct`}>
          <ManageProduct></ManageProduct>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
