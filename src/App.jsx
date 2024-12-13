
import { Outlet } from 'react-router-dom'
import Navbar from './all-components/navbar/Navbar'
import './App.css'
import mainBgimage from './assets/images/bgMain.png'
function App() {
    const appStyle = {
    backgroundImage: `url(${mainBgimage})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // ব্যাকগ্রাউন্ড ইমেজ ফিক্সড থাকবে
    height: '100vh',
    width: '100vw',
    overflow: 'auto', // কনটেন্ট স্ক্রল করতে সক্ষম হবে
  };

  return (
    <>
      <div style={appStyle}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
