import React from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import './konsultasi.css'
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
import ME from '../../assets/LOGO.png'
import ME2 from '../../assets/LOGO2.png'
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import ListItem from '@mui/material/ListItem';
// import LogoutIcon from '@mui/icons-material/Logout';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
// // import Paper from '@mui/material/Paper';
// import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// import MenuIcon from '@mui/icons-material/Menu';
// import AssignmentIcon from '@mui/icons-material/Assignment';
import { Avatar, Toolbar,Card, CardContent } from '@mui/material';
// import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
// import ChatIcon from '@mui/icons-material/Chat';
// import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
// import HomeIcon from '@mui/icons-material/Home';
// import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'

export default function ResponsiveDrawer() {
  const drawerWidth = 250;
  const theme = useTheme();

  const tkxv = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box sx={{ maxWidth:'100%', display: 'flex', marginLeft:'17rem' }}>
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
        <Toolbar sx={{ width:'150%', ml:'4rem' }} >
          <Typography sx={{ ml:'10px' }} variant="h5" fontFamily={'Poppins'} color={'black'}>
            Detail pertanyaan
          </Typography>
          <Button sx={{ mb:'0px', borderRadius:'10px', ml: tkxv ? '38rem' : "-12px"}} variant="contained"> 
            <Typography 
            textTransform={'capitalize'}
            fontSize={'12px'} 
            marginTop={'-1px'}
            >
            Tanya sebuah pertanyaan
            </Typography>
        </Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{ display:'block' ,flexGrow: 1, p: 3, ml: -1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Button href='/konsultasi' sx={{ mb:'-40px', borderRadius:'10px', ml: tkxv ? '10px' : "-12px"}} variant="contained">
        <KeyboardBackspaceIcon sx={{ width: '18px', marginTop:'-2px' }}/> 
            <Typography 
            fontFamily={'Poppins'} 
            textTransform={'capitalize'}
            fontSize={'11.5px'} 
            marginTop={'-1px'}
            sx={{ paddingLeft:'10px' }}
            >
            Kembali
            </Typography>
        </Button>
        <Box sx={{ flexGrow: 1, pt: 8, pl:'10px', maxWidth:'100vh' }}
        >
        <Typography sx={{ paddingBottom:'35px' }}variant='h6' fontFamily={'Poppins'} noWrap component="div">
           Bagaimana cara menarik perhatian HRD?
        </Typography>
        <Box sx={{ width:'165vh' }}>
          <Card elevation={0} sx={{alignItems:'center',display:'flex', pb: 4, maxWidth: '165vh' }}>
          <Avatar sx={{mt: '0px', width: 60, height: 60 }} alt="Remy Sharp" src={ME} />
          <Typography sx={{ ml: 4, pb:'1rem' }}variant='h6' fontSize={19}  >
            <b>Nur Kholiq Ansor</b>
          </Typography>
          <Typography sx={{ ml: '-10rem' ,mt: 5 }} variant='h6' color="text.secondary" fontSize={19}  >
            <h5>Pencari Kerja</h5>
          </Typography>
          <Typography sx={{ ml: '40rem' ,mt: 6.5 }} variant='h5' color="text.secondary" fontSize={19}  noWrap component="div">
            <h5>6 Jam yang lalu</h5>
          </Typography>
          </Card>
          <div className='ask'>
          <Card variant="left" elevation={0} sx={{ width:'165vh', mr:'10px' }}>
          <CardContent>
          <Typography fontSize={15} sx={{ ml: -2 }} variant='h6' >
          Saya selalu dilihat  “kecil” oleh HRD pada saat interview (Bukan karena badan saya kecil, tapi  seperti diremehkan menurut saya). Mungkin karena itu saya selalu ditolak oleh perusahaan. Apa tips untuk dapat mendapatkan perhatian HRD?
          </Typography>
          </CardContent>
          </Card>
          </div>
        </Box>
        <Divider variant="middle" sx={{ ml:'-3px', backgroundColor: 'black', width: '165%' }} component="li"/>
        <Box
        sx={{ display:'block' ,ml:-2 ,flexGrow: 1, mt: -2, width:'100vh' }} >
        <Toolbar />
            <Typography  
            textTransform={'capitalize'}
            fontSize={'16px'} 
            marginTop={'-1px'}
            color="text.secondary"
            sx={{ paddingLeft:'10px' }}
            >
            dijawab oleh
            </Typography>
        <Box sx={{ flexGrow: 1, pt: 5, ml:'50px', width:'100vh' }}
        >
        <Box sx={{ ml:'5px', width: '160vh' }}>
        <Card elevation={0} sx={{alignItems:'center',display:'flex', pb: 4, maxWidth: '100%' }}>
          <Avatar sx={{mt: '0px', width: 60, height: 60 }} alt="Remy Sharp" src={ME2} />
          <Typography sx={{ ml: 4, pb:'1rem' }}variant='h6' fontSize={19}  >
            <b>Nur Kholiq Ansor</b>
          </Typography>
          <Typography sx={{ ml: '-10.2rem' ,mt: 5 }} variant='h6' color="text.secondary" fontSize={19}  >
            <h5>Pencari Kerja</h5>
          </Typography>
          <Typography sx={{ ml: '36rem' ,mt: 6.5 }} variant='h5' color="text.secondary" fontSize={19} noWrap component="div">
            <h5>2 Menit yang lalu</h5>
          </Typography>
          </Card>
          <div className='ask'>
          <Card variant="left" elevation={0} sx={{ width: '100%', mr:'10px' }}>
          <CardContent>
          <Typography fontSize={15} sx={{ ml: -2 }} variant='h6' >
            <p>
              Halo Rizka!<br/>
              Sebetulnya ada banyak cara yang bisa kamu lakuin untuk membuat HRD tertarik. Pertama, bisa dimulai dari membuat CV yang menarik. Untuk membuat CV yang menarik makan kamu perlu mencantumkan pengalaman, baik itu pengalaman kerja, volunteer, organisasi yang relevan dengan bidang yang ingin kamu tekuni. Selain itu kamu kamu juga bisa membuat profil yang menarik, dan mencantumkan achivement kamu selama ini. Lalu buatlah design yang menarik serta kreatif.<br/>
              Kedua, kamu dapat menarik HRD melalui personal branding kamu. Bagaimana caranya? Kamu bisa membangun personal branding di media social professional seperti LinkedIn atau forum seputar dunia kerja, seperti Glints Community.
              Ketiga, kamu bisa coba membuat portofolio hasil kerja kamu, bisa online maupun offline. Misalkan kamu pandai design atau menulis, maka kamu bisa membuat blog atau website yang berisikan hasil karya kamu, dan kamu jadikan sebagai portofolio online.
            </p>
          </Typography>
          </CardContent>
          </Card>
          </div>
        </Box>
        </Box>
        </Box>
      </Box>
      </Box>
    </Box>
  );

}

