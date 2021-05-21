import React, { Component } from 'react';
import { Container, StepConnector, Avatar } from "@material-ui/core";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BannerSlider from "../Components/BannerSlider";


export class HomeFragment extends Component {
    constructor(props){
        super(props)

        this.state={
            value:0,
        }
    }

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue,
        })
    }
    
    render() {
        return (
            <Container maxWidth="md" fixed>
              <AppBar position="static" color="white" style={{width:"81.77%", marginLeft:"38px"}} >
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab icon={<CategoryTab/>}/>
                  <Tab icon={<CategoryTab/>} />
                  <Tab icon={<CategoryTab/>} />
                  <Tab icon={<CategoryTab/>} />
                  <Tab icon={<CategoryTab/>} />
                  <Tab icon={<CategoryTab/>} />
                  <Tab icon={<CategoryTab/>} />
                  <Tab icon={<CategoryTab/>} />
                </Tabs>
              </AppBar>
              <BannerSlider/>
              </Container>
          );
    }
}

export const CategoryTab = () => {
    return <Box>
        <Avatar alt="nutrition" variant="square" src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fG51dHJpdGlvbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
        <Typography variant="body2">ITEMS</Typography>
    </Box>
   
}

export default HomeFragment
