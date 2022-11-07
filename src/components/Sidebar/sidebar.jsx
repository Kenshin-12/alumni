import React from 'react';
import PropTypes from 'prop-types';
import './sidebar.css'
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ListItem from '@mui/material/ListItem';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemButton from '@mui/material/ListItemButton';
// import { Link } from 'react-router-dom'
import ListItemIcon from '@mui/material/ListItemIcon';
import ME from '../../assets/Ellipse.png'
import ListItemText from '@mui/material/ListItemText';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
// import Paper from '@mui/material/Paper';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// import MenuIcon from '@mui/icons-material/Menu';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Avatar, Toolbar } from '@mui/material';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import HomeIcon from '@mui/icons-material/Home';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Typography from '@mui/material/Typography';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery'

const drawerWidth = 258;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let sideFirst = [
    {
      title:"Home",
      icon: <HomeIcon sx={{ fontSize:20, ml:0.5 }}/>,
      link:"/home"
    },
    {
      title:"Asesmen",
      icon:<AssignmentIcon sx={{ fontSize:20, ml:0.5 }}/>,
      link:""
    },
    {
      title:"Konsultasi",
      icon:<ConnectWithoutContactIcon sx={{ fontSize:20, ml:0.5 }}/>,
      link:"/konsultasi"
    },
    {
      title:"Training",
      icon: <OndemandVideoIcon sx={{ fontSize:20, ml:0.5 }}/>,
      link:"/List-Training"
    },
  ]

  let sideSecond = [
    {
      title:"Akun",
      icon: <ManageAccountsOutlinedIcon sx={{ fontSize:20, ml:0.5 }} />,
      link:""
    },
    {
      title:"Notifikasi",
      icon:<NotificationsOutlinedIcon sx={{ fontSize:20, ml:0.4 }} />,
      link:"/notifikasi"
    },
    {
      title:"Pesan",
      icon:<ChatIcon sx={{ fontSize:20, ml:0.5 }} />,
      link:""
    },
  ]

  const drawer = (
    <div>
      <Toolbar sx={{mt:'28px', ml:'5px', width:'auto' }}>
      <Avatar sx={{ml: '-4px', width: 50, height: 50 }} alt="Remy Sharp" src={ME} />
              <Box paddingLeft={3}flexDirection="column" display="column">
                <Typography sx={{color:'white',fontSize:13}}><b>Cindy Riyanti</b></Typography>
                <Typography sx={{fontSize:11}} variant="h6" color='white'>Pencari Kerja</Typography>
              </Box>
      </Toolbar>
        <List sx={{ pt:'15px', pb:'25px' }}>
          { sideFirst.map((item,index)=>( 
            <ListItem disablePadding>
              <ListItemButton id='button' href={item.link} sx={{ marginLeft: '20px',marginRight:'10px', height:'50px' }}>
                  {item.icon}
                <Typography sx={{fontSize:13.5, ml:"40px"}}>{item.title}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
          <Divider variant="middle" sx={{backgroundColor: 'white'}} component="li"/>
        <Box sx={{ pt:'17px' }}>
        <List>
          {sideSecond.map((item,index)=>(
            <ListItem disablePadding>
              <ListItemButton href={item.link} id='button' sx={{ marginLeft: '20px',marginRight:'10px', height:'50px' }}>  
                  {item.icon}
                <Typography  sx={{fontSize:13.5, ml:"40px"}}>{item.title}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
            <ListItemButton id='button' sx={{ mt:7, marginLeft: '20px',marginRight:'10px', height:'50px' }}>
                
                  <LogoutIcon sx={{fontSize:20, ml:0.5 }} />
                
                <Typography sx={{fontSize:13.5, ml:"40px"}}>Logout</Typography>
            </ListItemButton>
        </List>
        </Box>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
            '& .MuiDrawer-paper': { bgcolor:'#252b42', boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {  background : "#252b42", boxSizing: 'border-box', width: '40vh', height:'100vh' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = { 
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
