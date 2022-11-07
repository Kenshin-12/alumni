import React from 'react';
import {Link} from 'react-router-dom'
import { Avatar, Toolbar, Box, Divider, Typography, Chip, Button } from '@mui/material';
import { Assignment, PendingActionsOutlined, PlaylistAddCheck, RecommendRounded } from '@mui/icons-material'
import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from 'react-router-dom';
import "./home.css"
import { StaticRouter } from 'react-router-dom/server';
import SquareIcon from '@mui/icons-material/Square';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import IMG from '../../assets/loginusa.png'
import IMG2 from '../../assets/unimasa.png'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views-utils';
import { autoPlay } from 'react-swipeable-views-utils';
import IMG3 from '../../assets/BigLogo.png'
import IMG4 from '../../assets/Brilyan.png'
import Slider from 'react-slick'
import SearchIcon from '@mui/icons-material/Search';
import {
  Grid,
  Card,
  InputBase,
  Paper,
  Tabs,
  Tab,
  IconButton,
  MenuItem,
  FormControl,
  Select,
  CssBaseline,
  AppBar
} from '@mui/material'
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import {Bar, Doughnut, Pie} from 'react-chartjs-2';
import {useState, useEffect} from 'react';
import { borderRadius } from '@mui/system';

ChartJs.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

let riwayatAssessment =[
  {
    tanggal:"26 Februari 2020",
    bidang:"Marketing",
    status:  
    <Card elevation={0} align="center" sx={{width:'auto', height:'5vh',  backgroundColor:"#E7E7E7", mt:'-0.2rem'}}>
    <Typography color="#5C5C5C" marginTop="0.3rem" fontFamily="Poppins" fontSize="14px"><b>Menunggu</b></Typography>
  </Card>,
    aksi:"Detail"
  },
  {
    tanggal:"26 April 2020",
    bidang:"Finance",
    status:
    <Card elevation={0} align="center" sx={{width:'11vh', height:'5vh',  backgroundColor:"#CBF9EE", mt:'-0.2rem'}}>
      <Typography color="#16C098" marginTop="0.3rem" fontFamily="Poppins" fontSize="14px"><b>Selesai</b></Typography>
    </Card>,
    aksi:"Detail"
  },
  {
    tanggal:"26 Maret 2020",
    bidang:"R&D",
    status:
    <Card elevation={0} align="center" sx={{width:'11vh', height:'5vh',  backgroundColor:"#CBF9EE", mt:'-0.2rem'}}>
      <Typography color="#16C098" marginTop="0.3rem" fontFamily="Poppins" fontSize="14px"><b>Selesai</b></Typography>
    </Card>,
    aksi:"Detail"
  },
]


let listPerusahaan =[
  {
    img: <img style={{ width:'50vh', marginBottom:'1.2rem', marginLeft:'1.5rem' }} src={IMG3} alt="title" /> ,
    desk: "is one of the limited few independent infrastructure system integrators of end-to-end enterprise information technology and telecommunications solutions for Indonesian IT..."
  },
  {
    img: <img style={{ width:'50vh', marginLeft:'-1.2rem', marginTop:"-1rem" }} src={IMG} alt="title" /> ,
    desk: "Kami lebih utama bergerak di bidang Software Loginusa berdiri pada tahun 2014 dan berpengalaman selama 7 tahun, kami dapat bekerja sama dengan client kami dengan baik...."
  },
  {
    img: <img style={{ width:'35vh', marginLeft:'0.5rem',marginBottom:'1.2rem', marginTop:"1rem" }} src={IMG4} alt="title" /> ,
    desk: "Our focus is to provide you with the solution that will answer your problems in the most efficient way, one that also accentuates your identity as people, organisation, or industry and is in accordance to your strengths."
  },
  {
    img: <img style={{ width:'20vh', marginBottom:'1rem', marginLeft:'1rem', marginTop:"1rem" }} src={IMG2} alt="title" /> ,
    desk: "is one of the limited few independent infrastructure system integrators of end-to-end enterprise information technology and telecommunications solutions for Indonesian IT..."
  },
]

let dataAssessment = [
    {
      jumlah:<Typography sx={{color:'#27A4EB', fontSize:30}}><b>3</b></Typography> ,
      icon:<Card display="block" sx={{ background:'#27A4EB',width:'52px', height:'52px',borderRadius:50,ml:'-3.5rem' ,mt:'1rem',p:1.4 }}><Assignment sx={{ color:'white', fontSize:30 }}/></Card>,
      title:"Asesmen yang telah dikerjakan"
    },
    {
        jumlah:<Typography sx={{color:'orange', fontSize:30}}><b>2</b></Typography> ,
        icon:<Card display="block" sx={{ background:'orange', width:'52px', height:'52px',borderRadius:50, ml:'-3.5rem',mt:'1rem',p:1.5 }}><PendingActionsOutlined sx={{ color:'white', fontSize:30 }}/></Card>,
        title:"Asesmen yang sedang dinilai"
    },
    {
        jumlah:<Typography sx={{color:'#00A75A', fontSize:30}}><b>4</b></Typography> ,
        icon:<Card display="block" sx={{ background:'#00A75A', width:'52px', height:'52px',borderRadius:50,ml:'-3.5rem', mt:'1rem' ,p:1.5 }}><PlaylistAddCheck sx={{ color:'white', fontSize:30 }}/></Card>,
        title:"Training yang telah diikuti"
    },
    {
        jumlah:<Typography sx={{color:'#FF3688', fontSize:30}}><b>10</b></Typography> ,
        icon:<Card display="block" sx={{ background:'#FF3688', width:'52px', height:'52px',borderRadius:50, mt:'-0.3rem', ml:'-3.5rem',p:1.5 }}><RecommendRounded sx={{ color:'white', fontSize:30 }}/></Card>,
        title:"Rekomendasi perusahaan yang tersedia"
    }
  ]

const drawerWidth = 240;
export default function ResponsiveDrawer(props) {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [chartData, setChartData] = useState({
    datasets:[],
  });

  const [chartOptions, setChartOptions] = useState ({});

  useEffect(() => {
    setChartData({
      labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep","Oct", "Nov", "Dec"],
      datasets:[
        {
          label:"Performa Asesmen",
          data: [12, 23, 32, 45, 39, 25, 50, 77, 55, 65, 50, 53],
          borderColor: "rgb(39, 148, 235)",
          backgroundColor:"rgb(39, 148, 235)",
          borderRadius: 7
        },
      ],
    });
    setChartOptions ({
      responsive: true,
      plugins: {
        legend: {
          display: false,
        }
      }
    })
  }, [])

  const [dataDonutLevel, setDataDonutLevel] = useState({
    datasets: [],
  })

  const [dataDonutOptionLevel, setDataDonutOptionLevel] = useState({})

  useEffect(() => {
    setDataDonutLevel({
      labels: [
      "Level 1", 
      "Level 2", 
      "Level 3",
      "Level 4", 
      "Level 5"],
      datasets:[
        {
          label: "warga berdasarkan usia",
          data: [ 15, 45, 55, 60, 75],
          borderColor:  [
            "#16C098",
            "#C06816",
            "#8AC016",
            "#2794EB",
            "#4A4347",
          ],
          backgroundColor: [
            "#16C098",
            "#C06816",
            "#8AC016",
            "#2794EB",
            "#4A4347",
          ],
          rotation: -10,
          radius: "80%",
          cutout: "70%",    
          hoverBorderJoinStyle: false,
          hoverOffset: false, 
        }
      ]
    });
    setDataDonutOptionLevel({
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position:"right",
          padding: 100,
          labels:{
            boxWidth: 12,
            padding: 20,
          },
        },
        
      }
    })
  }, [])

  return (
    <Box sx={{ maxWidth:'150%', display:'flex', ml: { sm: `${drawerWidth}px` } }}>
        <CssBaseline />
        <AppBar
        elevation={0}
        position= "absolute"
        sx={{
          width: { md: `calc(200vh)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: 'white',
          paddingTop: '10px',
          paddingLeft:'3.5rem'
        }}
        >
        <Toolbar sx={{ width:'auto' , mt:'15px' }} >
          <Box paddingLeft={10}flexDirection="column" display="column">
            <Typography sx={{color:'Black',fontSize:24}}><b>Selamat Datang, Cindy Riyanti</b></Typography>
            <Typography sx={{fontSize:18}} variant="h6" color='text.secondary'>Berikut rangkuman statistik anda</Typography>
          </Box>
        </Toolbar>
        </AppBar>
  <Grid container sx={{mt:'120px'}}>
    <Grid item md={12} sx={{p:"35px",gap:'1rem',height:'35vh'}} flexDirection="row" display="flex">
    {
        dataAssessment.map((item,index)=>(
          <Card elevation={1} flexDirection="row" display="flex" sx={{p:3,ml:'1rem', width:'100vh'}}>
           <Grid item md={2}>
              <Box width='22vh' flexDirection="column" display="column">
                <Typography>{item.jumlah}</Typography>
                <Typography sx={{color:'#ababab',fontSize:16}}>{item.title}</Typography>
              </Box>
           </Grid>
              <Box paddingLeft="12rem" marginTop="-6rem" flexDirection="row" display="flex">
                {item.icon}
              </Box>
          </Card>
        ))
      }
    </Grid>
    <Grid item md={12} sx={{p:"35px",gap:'1rem',height:'100vh'}} flexDirection="row" display="flex">
      <Card elevation={1} sx={{width:'100%', p:2.5,ml:'1rem', height:'93vh'}}>
          <Typography fontFamily={'poppins'}>
           <b>Peforma Asesmen</b>
          </Typography>
          <Box flexDirection="row" display="flex" sx={{ minWidth: 0,ml:'44rem', marginTop:'-1.5rem', mb:"1rem" }}>
            <Box flexDirection="row" display="flex" gap="0.5rem" marginTop="0.5rem" sx={{width:'65vh'}}>
              <SquareIcon borderRadius={25} sx={{color:'rgb(39, 148, 235)', mt:'-0.3rem'}}/>
              <Typography fontFamily="Poppins" fontSize="14px">
              <b> Rata-rata Nilai</b>
              </Typography>
            </Box>
          <FormControl fullWidth sx={{ "& .MuiInputLabel-root": {color: 'green'},
    "& .MuiOutlinedInput-root": {
      "& > fieldset": { borderColor: "#F6F6F6" },
    },}}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              variant='outlined'
              size='small'
              sx={{ width:'8rem', background:'#F6F6F6',fontSize:'14px', borderColor:'#F6F6F6',fontFamily:'Poppins', color:'#2794EB', borderRadius:'10px' }}
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>Minggu ini</MenuItem>
              <MenuItem value={20}>Bulan ini</MenuItem>
              <MenuItem value={30}>Tahun ini</MenuItem>
            </Select>
          </FormControl>
        </Box>
          <div sx={{ width:'10px' }}>
          <Bar  data={chartData} options={chartOptions} />
          </div>
     </Card>
    </Grid>
    <Grid item md={5} sx={{p:"35px",height:'75vh'}} flexDirection="row" display="flex">
      <Card elevation={1} sx={{width:'65vh',height:'50vh' ,ml:'1rem'}}>
        <Box marginTop="1rem" marginLeft="2rem">
        <Typography><b>Level Kompetensi</b></Typography>
        </Box>
        <div clasName="doughnut" style={{ marginLeft:'0rem', marginTop:"-3rem",width:'350px' }} >
        <Doughnut data={dataDonutLevel} options={dataDonutOptionLevel} />
        </div> 
     </Card>
    </Grid>
    <Grid item md={7} sx={{p:"35px",height:'75vh', ml:"-3.5rem"}}>
        <Card elevation={1} sx={{width:'101vh', height:'50vh',p:2.5,ml:'1rem'}}>
        <Grid item md={12}>
        <Box flexDirection="row" display="flex">
          <Typography><b>Riwayat Asesmen</b></Typography>
          <Link style={{marginLeft:'17rem'}}><Typography sx={{color:"#2794EB"}}>
            Lihat Riwayat Asesmen</Typography></Link> 
        </Box>
        </Grid>
        <Grid>
        <Box flexDirection="row" display="flex" sx={{gap:'4rem', mt:'1.5rem',mb:'1rem'}}>
            <Typography color="#949494" fontFamily="Poppins" fontSize="14px">
              Tanggal Pengerjaan
            </Typography>
            <Typography color="#949494" fontFamily="Poppins" fontSize="14px">
              Bidang
            </Typography>
            <Typography color="#949494" fontFamily="Poppins" fontSize="14px">
              Status Diperiksa
            </Typography>
            <Typography color="#949494" fontFamily="Poppins" fontSize="14px">
              Aksi
            </Typography>
          </Box>
        </Grid>
      {
      riwayatAssessment.map((item,index)=>(
        <Grid item md={12}>
          <Box flexDirection="row" display="flex" sx={{mt:'2.5rem'}}>
          <Box flexDirection="row" display="flex" sx={{ width:'30vh' }}>
            <Typography>
              {item.tanggal}
            </Typography>
          </Box>
          <Box sx={{ml:"1.5rem", width:'15vh'}}>
            <Typography>
              {item.bidang}
            </Typography>
          </Box>
          <Box sx={{ml:"1.5rem",  width:'15vh'}}>
            {item.status}
          </Box>
          <Box sx={{ml:"4.2rem",  width:'15vh'}}>
            <Card elevation={0} align="center" sx={{width:'11vh', height:'5vh',  backgroundColor:"rgb(39, 148, 235)", mt:'-0.2rem', borderRadius:'12px'}}>
            <Typography color="white" marginTop="0.3rem" fontFamily="Poppins"       fontSize="14px"><b>{item.aksi}</b></Typography>
            </Card>
          </Box>
          </Box>
        </Grid>
         ))
        }
       </Card>
    </Grid>
    <Grid item md={12} sx={{p:"35px",gap:'1rem',height:'55vh'}}>
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      // itemClass="carousel-item-padding-60-px"
    >
      {
      listPerusahaan.map((item,index) => (
      <Card sx={{  width: "95%",
      marginLeft: "auto",
      marginRight: "auto",
      height: "200px"}}>
        <Box sx={{width:'150%'}}>
        <Box>
          {item.img}
        </Box>
        <Typography>
          {item.desk}
        </Typography>
        </Box>
      </Card>
      ))
      }
      </Carousel>
    </Grid>
  </Grid> 
  </Box>
  );
}