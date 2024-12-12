
import Navbar from './all-components/navbar/Navbar'
import './App.css'
import mainBgimage from './assets/images/bgMain.png'
function App() {
    const appStyle = {
      backgroundImage: `url(${mainBgimage})`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      height: '100vh',
      width: '100vw',
    }

  return (
    <>
      <div style={appStyle}>
        <Navbar></Navbar>   
      </div>
    </>
  )
}

export default App
