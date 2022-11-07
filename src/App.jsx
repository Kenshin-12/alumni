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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/login'

function App() {
  return (
    <>
      <Router>
      <>
        <Sidebar />
        <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route  exact path='/AddTraining' element={<AddTraining />} />
        <Route  exact path='/List-Training' element={<ListTraining />} />
        <Route  exact path='/List-perusahaan' element={<ListPerusahaan />} />
        <Route  exact path='/Detail-Training' element={<Dtraining />} />
        <Route  exact path='/DetailTraining' element={<DetailTraining />} />
        <Route  exact path='/dTraining' element={<DTraining />} />
        <Route  exact path='/notifikasi' element={<Notifikasi />} />
        <Route  exact path='/konsultasi' element={<Konsultasi />} />
        <Route  exact path='/detailKonsultasi' element={<DetailKonsultasi />} />
        </Routes>
      </>
      </Router>
    </>
  );
}

export default App;
