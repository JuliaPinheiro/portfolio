import { AppBar, Toolbar, Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import React, { ReactNode } from 'react'; // Importe React e ReactNode

const pages = ['about'];

interface HeaderProps {
  children?: ReactNode;
}

function Header({ children }: HeaderProps) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const renderMenuItems = () =>
    pages.map((page) => (
      <MenuItem key={page} onClick={handleCloseNavMenu}>
        {page}
      </MenuItem>
    ));

  const desktopButtons = pages.map((page) => (
    <Button
      key={page}
      onClick={handleCloseNavMenu}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      {page}
    </Button>
  ));

  return (
    <AppBar
      position='static'
      color='primary'
      sx={{
        backgroundColor: '#2B354A',
        backdropFilter: 'blur(10px)',
        alignItems: 'center',
      }}
    >
      <Toolbar>
        {desktopButtons}

        <Menu
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {renderMenuItems()}
        </Menu>
      </Toolbar>
      {children}
    </AppBar>
  );
}

export default Header;
