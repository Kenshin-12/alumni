import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline'
import './list.css';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
// import Avatar from '@mui/material/Avatar';
// import HomeIcon from '@mui/icons-material/Home';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
// import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import ChatIcon from '@mui/icons-material/Chat';
// import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
// import LogoutIcon from '@mui/icons-material/Logout';
import IMG from '../../assets/BigLogo.png'
import IMG2 from '../../assets/loginusa.png'
import IMG3 from '../../assets/Brilyan.png'
import IMG4 from '../../assets/unimasa.png'
import Grid from '@mui/material/Grid'
import {Skeleton, TextField, MenuItem, Select, ListItem, ListItemIcon, ListItemText, InputLabel} from "@mui/material"
import Paper from '@mui/material/Paper'
import { makeStyles } from '@mui/material';
import InputBase from '@mui/material/InputBase'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useState,useEffect,useRef } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Card, styled, Input, InputAdornment } from '@mui/material';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ButtonBase from '@mui/material/ButtonBase'
import {Link} from 'react-router-dom'

const Img = styled('img')({
  margin:"auto",
  display:"block",
  maxWidth:"auto",
  maxHeight:"auto"
})

const drawerWidth = 258;

const daerahPerusahaan = [
  {
    value: 'Jawa Tengah',
    label: 'Jawa Tengah',
  },
  {
    value: 'Jawa Barat',
    label: 'Jawa Barat',
  },
  {
    value: 'Jawa Timur',
    label: 'Jawa Timur',
  },
  {
    value: 'Sumatera Selatan',
    label: 'Sumatera Selatan',
  },
  {
    value: 'Sumatera Barat',
    label: 'Sumatera Barat',
  },
  {
    value: 'Sumatera Utara',
    label: 'Sumatera Utara',
  },
  {
    value: 'Sulawesi Tengah',
    label: 'Sulawesi Tengah',
  },
  {
    value: 'Sulawesi Barat',
    label: 'Sulawesi Barat',
  },
  {
    value: 'Sulawesi Utara',
    label: 'Sulawesi Utara',
  },
  {
    value: 'Sulawesi Selatan',
    label: 'Sulawesi Selatan',
  },
];

const bidangPerusahaan = [
  {
    value: 'UI Designer',
    label: 'UI Designer',
  },
  {
    value: 'Technical IT Support',
    label: 'Technical IT Support',
  },
  {
    value: 'IT Development Staff',
    label: 'IT Development Staff',
  },
  {
    value: 'IT Staff/Admin',
    label: 'IT Staff/Admin',
  },
  {
    value: 'Grapich Design',
    label: 'Grapich Design',
  },
];

export default function ResponsiveDrawer() {
  const [daerah, setDaerah] = useState('');

  const handleChange = (event: SelectChangeEvent<String>, child: React.ReactNode) => {
    setDaerah(event.target.value);
  };


  const [bidang, setBidang] = useState('');

  const openChange = (event: SelectChangeEvent<String>, child: React.ReactNode) => {
    setBidang(event.target.value);
  };

    let dataAssessment = [
        {
          bidang:"IT Technical support",
          perusahaan:"PT Big Data Indonesia",
          alamat:"Graha Krama Yudha Lt.4 Unit B, Jakarta Selatan",
          nomor:"+62-8888-8888",
          image:<img alt="kerja" src={IMG} style={{width:'55vh', marginLeft:'0.5rem'}}/>,
          link:'/Detail-Training'
        },
        {
            bidang:"IT Development Staff",
            perusahaan:"CV Teknologi Nusantara",
            alamat:"Ruko Pasar Alam, Jalan Alun-Alun Selatan No. 46, Kota Bekasi, Jawa Barat",
            nomor:"+62-8888-8888",
          image:<img alt="kerja" src={IMG2} style={{width:'65vh', marginLeft:'-3rem', marginTop:'-1rem'}}/>,
          link:'/DetailTraining'
        },
        {
            bidang:"IT Staff",
            perusahaan:"PT. Brilyan Trimatra Utama",
            alamat:"Jalan Dahlia Raya Blok E Nomor 12, Kemang Pratama 2, Kota Bekasi, Jawa Barat.",
            nomor:"+62-8888-8888",
          image:<img alt="kerja" src={IMG3} style={{width:'50vh'}}/>,
          link:'/dTraining'
        },
        {
          bidang:"GRAPHIC DESIGN",
          perusahaan:"PT Unimasi Media Kreasi",
          alamat:"Jalan Dahlia Raya Blok E Nomor 12, Kemang Pratama 2, Kota Bekasi, Jawa Barat.",
          nomor:"+62-8888-8888",
          image:<img alt="kerja" src={IMG4} style={{width:'25vh', marginLeft:'1rem'}}/>,
          link:'/dTraining'
          },
      ]
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position= "fixed"
        sx={{
          width: { md: `calc(200vh)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: 'white',
          paddingTop: '10px',
          paddingLeft:'4rem'
        }}
        >
        <Toolbar sx={{ width:'auto', ml:'2rem' }}>
        <Typography sx={{ ml:'1px' }} fontSize={'24px'} fontFamily={'Poppins'} color={'black'} paddingLeft={'3rem'}>
          Training
        </Typography>
      </Toolbar>
          </AppBar>
        <Grid container sx={{mt:5}} style={{backgroundColor:"#ECECEC", height:'100%', width:'100%'}}>
            <Grid item md={8} alignItems='center' sx={{ p:"35px", ml:'18rem'}}>
              {
                dataAssessment.map((item,index)=>(
                  <Box sx={{p:"10px"}}>
                    <Link to={item.link}>
                    <Card sx={{mt:'10px', width:'115vh', height:'55vh', ml:"-35px"}} display="flex">
                      <Box sx={{ml:'0rem', width: "50vh", height: "25vh",p: 4.5 }}>
                        {item.image}
                      </Box>
                      <Box sx={{ml:'30rem', mt:'-6rem',width: "35vh", height: "25vh"}}>
                        <Typography fontSize={"18px"} color="#004085" marginBottom={"0.5rem"}>
                            {item.bidang}
                        </Typography>
                        <Typography fontSize={"18px"} color="black">
                          <b>{item.perusahaan}</b>
                        </Typography>
                      </Box>
                      <Box sx={{ml:'3rem', mt:'0rem',width: "40vh", height: "25vh"}}>
                        <Typography fontSize={"18px"} color="black" marginBottom={"0.5rem"}>
                          <b>Alamat</b>  
                        </Typography>
                        <Typography fontSize={"14px"} color="black">
                          {item.alamat}
                        </Typography>
                      </Box>
                      <Box sx={{ml:'30rem', mt:'-10rem',width: "40vh", height: "25vh"}}>
                        <Typography fontSize={"18px"} color="black" marginBottom={"0.5rem"}>
                          <b>Contact</b>  
                        </Typography>
                        <Typography fontSize={"14px"} color="black">
                          {item.nomor}
                        </Typography>
                      </Box>
                    </Card>  
                    </Link>
                  </Box>
                ))
              }   
   </Grid>         
   <Grid item md={6} sx={{position:'fixed', height:'100vh',px:"36px",py:"45px", backgroundColor:'white', ml:'66rem'}}>
    <Paper
        component="form"
        elevation={0}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250, mt: 3, height: 40, border:'1px solid #EAEAEA',borderRadius:"10px" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, }}
          placeholder="Pencarian"
          inputProps={{ 'aria-label': 'Pencarian' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Box sx={{mt:"38px", mb:'38px'}}>
        <Typography sx={{fontSize:20}}><b>Filter</b></Typography>
      </Box>
      <FormControl  sx={{ width:250 }}>
        <Select
        id="custom-select"
        value={daerah}
        labelId='custom-select-label'
        onChange={handleChange}
        sx={{ borderRadius:'10px', border:'none'}}
        IconComponent={ () => null}
        displayEmpty
        renderValue={(value) => value ? value :
          <Box flexDirection="row" displa="flex" sx={{width:'100vh'}}>
            <PlaceOutlinedIcon sx={{color:'#808088'}} />
            <Typography sx={{ color:'#808088', fontSize:'14px', marginLeft:'2rem', marginTop:"-1.7rem"}}>Daerah</Typography>
          </Box> }
        >
        {daerahPerusahaan.map((option) => (
            <MenuItem sx={{mb:"-0.5rem"}} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl  sx={{ width:250, mt:'2rem' }}>
        <Select
        id="custom-select"
        value={bidang}
        labelId='custom-select-label'
        onChange={openChange}
        sx={{ borderRadius:'10px', border:'none'}}
        IconComponent={ () => null}
        displayEmpty
        renderValue={(value) => value ? value :
          <Box flexDirection="row" displa="flex" sx={{width:'100vh'}}>
            <WorkOutlineOutlinedIcon sx={{color:'#808088'}} />
            <Typography sx={{ color:'#808088', fontSize:'14px', marginLeft:'2rem', marginTop:"-1.7rem"}}>Bidang</Typography>
          </Box> }
        >
        {bidangPerusahaan.map((option) => (
            <MenuItem sx={{mb:"-0.5rem"}} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    </Grid>
    </Box>
  );
}