import React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
import './addTraining.css'
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// // import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import ListItem from '@mui/material/ListItem';
// import LogoutIcon from '@mui/icons-material/Logout';
// import ListItemButton from '@mui/material/ListItemButton';
// import { Link } from 'react-router-dom'
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ME from '../../assets/Ellipse.png'
// import ListItemText from '@mui/material/ListItemText';
// import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
// import Paper from '@mui/material/Paper';
// import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// // import MenuIcon from '@mui/icons-material/Menu';
// import AssignmentIcon from '@mui/icons-material/Assignment';
import { Toolbar } from '@mui/material';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import ChatIcon from '@mui/icons-material/Chat';
// import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
// import HomeIcon from '@mui/icons-material/Home';
// import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Typography from '@mui/material/Typography';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery'
// import {
//   Link as RouterLink,
//   Route,
//   Routes,
//   MemoryRouter,
//   useLocation,
// } from 'react-router-dom';
// import { StaticRouter } from 'react-router-dom/server';
// import SearchIcon from '@mui/icons-material/Search';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import {
  Grid,
  Card,
  CssBaseline,
  AppBar,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Button
} from '@mui/material'
import { width } from '@mui/system';

const drawerWidth = 240;
export default function ResponsiveDrawer() {
  const [value, setValue] = React.useState(new Date(''));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth:'100%', display:'flex', ml:'17rem' }}>
        <CssBaseline />
      <AppBar
        elevation={0}
        position= "fixed"
        sx={{
          width: { md: `calc(200vh)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: 'white',
          paddingTop: '10px',
          paddingLeft:'4rem',
          borderBottom:'5px solid #EAEAEA'
        }}
        >
        <Toolbar sx={{ width:'auto', ml:'0px' }}>
        <Typography sx={{ ml:'20px' }} fontSize={'24px'} fontFamily={'Poppins'} color={'black'} paddingLeft={'3rem'}>
          Training 
        </Typography>
      </Toolbar>
          </AppBar>
    <Box marginLeft="1rem">
    <Toolbar sx={{ width:'100vh', height:'0px', mt:'100px' }}>
            <Typography  
            textTransform={'capitalize'}
            fontSize={'24px'} 
            sx={{ marginLeft:'-0.5rem' }}
            >
            Lengkapi Data Dibawah Ini
            </Typography>
      </Toolbar>
      <Grid container sx={{ml:'-1rem',mt:'1rem', width:'auto'}}>
        <Grid item md={10} sx={{p:"30px", width:'100%',height:'90vh'}} >
        <Box marginBottom="2rem">
      <Typography sx={{ fontSize:'24px' }}>
        <b>Keterangan Training</b>
      </Typography>
      </Box>
        <Card sx={{width:"110%", height:'75vh', ml:'1.5rem'}} >
        <Box display="flex" flexDirection="row" marginTop="1rem" marginLeft={"3rem"}>
                <Grid item md={7}>
                 <Box sx={{ width:"35vh", pl:0 }}>
                  <Typography sx={{color:'black',mt:'10px',mb:'10px',fontSize:18}}><b>Judul</b></Typography>
                  <TextField sx={{ width:'20rem' }} size="small" display="block" multiline maxRows={8} id="outlined-basic2" variant="outlined" />
                </Box>
                <Box marginTop="31px">
                  <Typography sx={{color:'black',mt:'10px',mb:'10px',fontSize:18}}><b>Tanggal</b></Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField sx={{ width:'20rem' }} size="small" {...params} />}
                  />
                  </LocalizationProvider>
                </Box>
                <Box marginTop="31px">
                  <Typography sx={{color:'black',mt:'10px',mb:'10px',fontSize:18}}><b>Link Pendaftaran</b></Typography>
                  <TextField sx={{ width:'20rem' }} size="small" display="block" multiline maxRows={8} id="outlined-basic2" variant="outlined" />
                </Box>
                <Box marginTop="31px">
                  <Typography sx={{color:'black',mt:'10px',mb:'10px',fontSize:18}}><b>Deskripsi</b></Typography>
                  <TextField sx={{ width:'20rem' }} size="small" display="block" multiline maxRows={2} id="outlined-basic2" variant="outlined" />
                </Box>
              </Grid>
              <Grid item md={4} marginTop="-1.5rem">
              <Box marginTop="31px">
                  <Typography sx={{ color:'black',mt:'10px',mb:'10px',fontSize:18}}><b>Waktu </b></Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField sx={{ width:'20rem' }} size="small" {...params} />}
                  />
                  </LocalizationProvider>
                </Box>
                <Box marginTop="37px">
                  <Typography sx={{color:'black',mt:'10px',mb:'10px',fontSize:18}}><b>Alamat</b></Typography>
                  <TextField sx={{ width:'20rem', paddingTop:'0px' }} multiline maxRows={2}  size='small' id="outlined-basic" variant="outlined" />
                </Box>
                <Box marginTop="45px">
                <FormControl>
                  <FormLabel focused={false} id="demo-radio-buttons-group-label" sx={{fontSize:18, color:"black", pb:'10px'}}><b>Metode</b></FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue=""
                      name="radio-buttons-group"
                      row
                    >
                      <FormControlLabel value="online" control={<Radio />} label="Online" />
                      <FormControlLabel value="offline" control={<Radio />} label="Offline" />
                    </RadioGroup>
              </FormControl>
              </Box>
              </Grid>
              </Box>
              </Card>
        </Grid>   

        <Grid item md={10} sx={{p:"30px", width:'100%',height:'80vh', mt:'4rem'}} >
        <Box marginBottom="2rem">
      <Typography sx={{ fontSize:'24px' }}>
        <b>Contact Person</b>
      </Typography>
      </Box>
        <Card sx={{width:"110%", height:'45vh', ml:'1.5rem'}} >
        <Box display="flex" flexDirection="row" marginTop="1rem" marginLeft={"3rem"}>
                <Grid item md={7}>
                 <Box sx={{ width:"35vh", pl:0 }}>
                  <Typography sx={{color:'black',mt:'10px',mb:'10px',fontSize:18}}><b>Nama</b></Typography>
                  <TextField sx={{ width:'20rem' }} size="small" display="block" multiline maxRows={8} id="outlined-basic2" variant="outlined" />
                </Box>
                <Box marginTop="31px">
                <Typography sx={{color:'black',mt:'10px',mb:'10px',fontSize:18}}><b>Email</b></Typography>
                  <TextField sx={{ width:'20rem' }} size="small" display="block" multiline maxRows={8} id="outlined-basic2" variant="outlined" />
                </Box>
              </Grid>
              <Grid item md={4} marginTop="-1.5rem">
                <Box marginTop="31px">
                  <Typography sx={{color:'black',mt:'10px',mb:'10px',fontSize:18}}><b>No. Telp</b></Typography>
                  <TextField sx={{ width:'20rem', paddingTop:'0px' }} multiline maxRows={2}  size='small' id="outlined-basic" variant="outlined" />
                </Box>
                <Box marginTop="35px">
                <Typography sx={{color:'black',mt:'10px',mb:'10px',fontSize:18}}><b>Social Media</b></Typography>
                  <TextField sx={{ width:'20rem' }} size="small" display="block" multiline maxRows={8} id="outlined-basic2" variant="outlined" />
              </Box>
              </Grid>
              </Box>
              </Card>
        </Grid>
        <Box marginBottom="51px" marginLeft="50rem" width="50%">
                  <Button id="tombol" href='/konsultasi' sx={{  borderRadius:'10px', ml:'-1rem'}} variant="contained">
                        <Typography 
                        fontFamily={'Poppins'} 
                        textTransform={'capitalize'}
                        fontSize={'14'} 
                        marginTop={'-1px'}
                        sx={{ }}
                        >
                        Kembali
                        </Typography>
                  </Button>
                  <Button id="button2" href='/konsultasi' sx={{  borderRadius:'10px', background:'white', ml:'1rem' }} variant="contained">
                        <Typography 
                        fontFamily={'Poppins'} 
                        textTransform={'capitalize'}
                        fontSize={'14px'} 
                        marginTop={'-1px'}
                        sx={{ }}
                        >
                        Tambah
                        </Typography>
                  </Button>
                  </Box>   
      </Grid>
    </Box>
  </Box>
  );
}