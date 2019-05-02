import React from "react"
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'

import Button from '@material-ui/core/Button'
import SvgIcon from '@material-ui/core/SvgIcon';
function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

const Header = ()  =>{

return(
    
  
    <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
          <Link to={`/`}>  <HomeIcon className="home-icon"/></Link>
          </IconButton>
          <Typography variant="h6" color="inherit">
          
          <Link to={`/hamburgers`}> <Button id="hamb-btn" >Hamburguesas</Button></Link>
          </Typography>
       
        </Toolbar>
       
      </AppBar>

)




}

export default Header