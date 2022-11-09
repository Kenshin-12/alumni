import './index.css';
import Konsultasi from './components/Konsultasi/konsultasi'
import AddTraining from './components/TambahTraining/AddTraining';
import ListTraining from './components/training/listTraining';
import ListPerusahaan from './components/list/listPerusahaan';
import Dtraining from './components/training/detailTraining';
import DetailTraining from './components/training/detailTraining2';
import DTraining from './components/training/detailTraining3';
import Sidebar from './components/Sidebar/sidebar';
import Notifikasi from './components/notifikasi/notifikasiPencarikerja';
import DetailKonsultasi from './components/Konsultasi/detailKonsultasi';
import Home from './components/home/home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login/login'

function App() {
  return (
    <>
      <Router>
      <>
        <Sidebar />
        <Routes>
        <Route  path='/' element={<Navigate to="/home" replace/>} />
        <Route  path='/home' element={<Home />} />
        <Route  path='/AddTraining' element={<AddTraining />} />
        <Route  path='/List-Training' element={<ListTraining />} />
        <Route  path='/List-perusahaan' element={<ListPerusahaan />} />
        <Route  path='/Detail-Training' element={<Dtraining />} />
        <Route  path='/DetailTraining' element={<DetailTraining />} />
        <Route  path='/dTraining' element={<DTraining />} />
        <Route  path='/notifikasi' element={<Notifikasi />} />
        <Route  path='/konsultasi' element={<Konsultasi />} />
        <Route  path='/detailKonsultasi' element={<DetailKonsultasi />} />
        </Routes>
      </>
      </Router>
    </>
  );
}

export default App;
