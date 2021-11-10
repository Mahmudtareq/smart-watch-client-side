import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    AppBar, Toolbar, Typography, List, ListItem,
    withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';
// import useAuth from '../../hooks/useAuth';

const styleSheet = {
    list: {
        width: 200,
    },
    padding: {
        paddingRight: 30,
        cursor: "pointer",
    },

    sideBarIcon: {
        padding: 0,
        color: "white",
        cursor: "pointer",
    }
}

class ResAppBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = { drawerActivate: false, drawer: false };
        this.createDrawer = this.createDrawer.bind(this);
        this.destroyDrawer = this.destroyDrawer.bind(this);
    }
    componentWillMount() {
       
        if (window.innerWidth <= 600) {
            this.setState({ drawerActivate: true });
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 600) {
                this.setState({ drawerActivate: true });
            }
            else {
                this.setState({ drawerActivate: false })
            }
        });
    }

    //Small Screens
    createDrawer() {
        
       
        return (
            <div>
                <AppBar >
                    <Toolbar>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <MenuIcon
                                className={this.props.classes.sideBarIcon}
                                onClick={() => { this.setState({ drawer: true }) }} />

                            <Typography color="inherit" variant="headline">Smart Watch</Typography>
                            <Typography color="inherit" variant="headline"></Typography>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <SwipeableDrawer
                    open={this.state.drawer}
                    onClose={() => { this.setState({ drawer: false }) }}
                    onOpen={() => { this.setState({ drawer: true }) }}>

                    <div
                        tabIndex={0}
                        role="button"
                        onClick={() => { this.setState({ drawer: false }) }}
                        onKeyDown={() => { this.setState({ drawer: false }) }}>
                        <NavLink style={{ textDecoration: 'none', color: 'blue' }} to="/home">
                            <Button variant="outline">Home</Button>
                        </NavLink>
                    </div>
                </SwipeableDrawer>

            </div>
        );
    }

    //Larger Screens
    destroyDrawer() {
        const { classes } = this.props
        
       
        return (
            <AppBar>
                <Toolbar>
                    <NavLink style={{textDecoration:'none',color:'white'}} to="/home">
                        <Button variant="outline">Home</Button>
                    </NavLink>
                    <NavLink style={{textDecoration:'none',color:'white'}} to="/aboutUs">
                        <Button variant="outline">AboutUs</Button>
                    </NavLink>
                    <NavLink style={{textDecoration:'none',color:'white'}} to="/home">
                        <Button variant="outline">Home</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        )
    }

    render() {
       
        return (
            <div>
                {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
            </div>
        );
    }
}

ResAppBar.propTypes = {
    classes: PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);