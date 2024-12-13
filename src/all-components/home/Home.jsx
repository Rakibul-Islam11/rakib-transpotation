import videoImport from '../../assets/video/coverVideo.mp4'

const Home = () => {
    return (
        <div>
            <div className="w-[90%] md:w-3/4 mx-auto pt-24">
                <video src={videoImport} autoPlay muted loop style={{ width: '100%', height: 'auto' }}></video>
            </div>
        </div>
    );
};

export default Home;