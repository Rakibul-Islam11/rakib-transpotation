import videoImport from '../../assets/video/coverVideo.mp4'
import './Home.css'
import SelectFrom from './sub/select-form/SelectFrom';

const Home = () => {
    return (
        <div>
            <div className="w-[100%] md:w-3/4 mx-auto video-container">
                <video 
                    src={videoImport} 
                    autoPlay 
                    muted 
                    loop
                ></video>
                <SelectFrom></SelectFrom>
            </div>
        </div>
    );
};

export default Home;