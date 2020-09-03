import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { Link } from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      
    <IconButton
        edge="start"
        onClick={handleClick}
        color="inherit"
         aria-label="open drawer"
    >
        <MenuIcon />
    </IconButton>
    
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <Link to="/"> 
            <ListItemText primary="Home" />
            </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/category/politica"> 
            <ListItemText primary="Política" />
           </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/category/internacionales">
            <ListItemText primary="Internacionales" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/category/tecnologia">
            <ListItemText primary="Tecnología" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/category/espectaculos">
            <ListItemText primary="Espectaculos" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/category/deportes">
            <ListItemText primary="Deportes" />
          </Link>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}