
import { Outlet } from 'react-router-dom'
import Navbar from './all-components/navbar/Navbar'
import './App.css'
import './all-components/global-css/globle.css'
import TopMiniNav from './all-components/top-mini-nav/TopMiniNav';
function App() {
  // const appStyle = {
    
  //   backgroundImage: `url(${mainBgimage})`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundAttachment: 'fixed', // ব্যাকগ্রাউন্ড ইমেজ ফিক্সড থাকবে
  
    
  // };

  return (
    <>
      <div >
        <TopMiniNav></TopMiniNav>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
