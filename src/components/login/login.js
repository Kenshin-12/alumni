import React from 'react';
import PropTypes from 'prop-types';
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
import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import SearchIcon from '@mui/icons-material/Search';
import {
  Grid,
  Card,
  InputBase,
  Paper,
  IconButton,
  CssBaseline,
  AppBar, 
  Button
} from '@mui/material'
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const drawerWidth = 0;
export default function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let dataAssessment = [
    {
      type:"Pertanyaan dari Nur Kholiq Ansori",
      time:" · 16 jam yang lalu",
      title:"Bagaimana cara menarik perhatian HRD?"
    },
    {
        type:"Pertanyaan dari Zacky Al Baehaki ",
        time:" · 18 jam yang lalu",
        title:"Mengapa perusahaan lebih senang dengan pekerja yang berlatar belakang organisasi?"
      },
      {
        type:"Pertanyaan dari Misna Syari ",
        time:" · 20 jam yang lalu",
        title:"Apa saja tes yang ada di perusahaan"
      },   
  ]
  return (
    <Box sx={{ maxWidth:'100%', display:'flex', ml:'17rem' }}>
        <CssBaseline />
      <AppBar
        elevation={1}
        position= "fixed"
        sx={{
          width: { md: `calc(200vh)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: 'white',
          paddingTop: '10px',
          paddingLeft:'4rem'
        }}
        >
        <Toolbar sx={{ width:'auto', ml:'3rem' }}>
        <Typography sx={{ ml:'1px' }} fontSize={'24px'} fontFamily={'Poppins'} color={'black'} paddingLeft={'3rem'}>
          Notifikasi
        </Typography>
      </Toolbar>
          </AppBar>
    <Grid container sx={{mt:'70px'}}>
    <Grid item md={8} sx={{p:"35px",height:'90vh',borderRight:'1px solid #EAEAEA'}}>
      {
        dataAssessment.map((item,index)=>(
          <Card elevation={0} sx={{p:3,backgroundColor:'#F5F5F5',mb:"31px"}}>
            <Button component="box">
            <Box>
              <Box flexDirection="row" display="flex">
                <Typography sx={{color:'#2A68C4',fontSize:14}}>{item.type}</Typography>
                <Typography sx={{color:'#ababab',fontSize:14}}>{item.time}</Typography>
              </Box>
              <Typography sx={{color:'#2A68C4',mt:'10px',mb:'10px',fontSize:20}}>{item.title}</Typography>
              <Typography sx={{color:'#272729',mb:'10px',fontSize:14}}>{item.description}</Typography>
            </Box>
            </Button>
          </Card>
        ))
      }
    </Grid>
    <Grid item md={4} sx={{height:400,px:"26px",py:"20px"}}>
    <Paper
        component="form"
        elevation={0}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,border:'1px solid #EAEAEA',borderRadius:"10px" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Pencarian"
          inputProps={{ 'aria-label': 'Pencarian' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Box sx={{mt:"38px"}}>
        <Typography>Filter</Typography>
      </Box>
      <Box sx={{mt:'10px'}}>
            <FormControl>
              <FormLabel >Diurutkan berdasarkan</FormLabel>
                  <FormControlLabel value="Terlalu" control={<Radio />} label="Terbaru" />
                  <FormControlLabel value="Terlama" control={<Radio />} label="Terlama" />
            </FormControl>
            </Box>
            <Box sx={{mt:'10px'}}>
            <FormControl>
              <FormLabel >Dari siapa</FormLabel>
                  <FormControlLabel value="Semua" control={<Radio />} label="Semua" />
                  <FormControlLabel value="Assesor" control={<Radio />} label="Assesor" />
                  <FormControlLabel value="Sistem" control={<Radio />} label="Sistem" />
            </FormControl>
            </Box>
    </Grid>
  </Grid>
  </Box>
  );
}