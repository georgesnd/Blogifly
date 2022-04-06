import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../stylesAdmin/admin.css'

export default function DropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        # TAGS
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} id='menuitem'>Fitness</MenuItem>
        <MenuItem onClick={handleClose} id='menuitem'>Travel</MenuItem>
        <MenuItem onClick={handleClose} id='menuitem'>Music</MenuItem>
        <MenuItem onClick={handleClose} id='menuitem'>Movies</MenuItem>
        <MenuItem onClick={handleClose} id='menuitem'>Politics</MenuItem>
        <MenuItem onClick={handleClose} id='menuitem'>Food</MenuItem>
        <MenuItem onClick={handleClose}id='menuitem'>Books</MenuItem>
        <MenuItem onClick={handleClose} id='menuitem'>Lifestyle</MenuItem>
        <MenuItem onClick={handleClose} id='menuitem'>Makeup</MenuItem>
      </Menu>
    </div>
  );
}
