
// import './App.scss';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';

function App() {

  return (
    <>
      <Navbar />
    <div>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/page1' element={<Page1 />} />
      <Route path='/page2' element={<Page2 />} />
    </Routes>
      </div>
    
    
    </>
  );
}

export default App;
