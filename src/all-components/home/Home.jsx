// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Marquee from "react-fast-marquee";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import grimgone from '../../assets/images/heroimgone.jpg'
import hrimgtwo from '../../assets/images/hroimgtwo.jpg'
import hrimgtree from '../../assets/images/heroimgfour.jpg'
import hrimgffi from '../../assets/images/heroimgone.jpg'
import dbgr from '../../assets/buss-brand-img/dbgr.png'
import dem from '../../assets/buss-brand-img/demier.svg'
import scina from '../../assets/buss-brand-img/scina.svg'
import imgee from '../../assets/buss-brand-img/imgne.png'
import isu from '../../assets/buss-brand-img/Isuzu.svg'
import toyo from '../../assets/buss-brand-img/Toyota.svg'



// Import required modules
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';

// Import CSS (Make sure the path is correct)
import './Home.css';
import SelectFrom from './sub/select-form/SelectFrom';
import AboutTranspotation from './sub/about-transpotation/AboutTranspotation';
import FlipCard from './show-details-in-the-card/FlipCard';


const Home = () => {
    return (
        <div className="relative w-[96%] md:w-3/4  mx-auto fr_horizental">
            
            {/* Swiper Slider */}
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={false}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500, // 2.5 সেকেন্ড পর পর slide হবে
                    disableOnInteraction: false, // ইউজার ইন্টারঅ্যাকশন করলেও autoplay চলবে
                }}
                modules={[EffectFade, Navigation, Autoplay]} // Autoplay module যোগ করা হয়েছে
                className="mySwiper"
            >
                
                <SwiperSlide>
                    <img 
                        src={grimgone}
                        alt="nature-1" 
                        className="w-full h-screen object-cover"
                    />
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src={hrimgtwo}
                        alt="nature-2" 
                        className="w-full h-screen object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src={hrimgtree}
                        alt="nature-3" 
                        className="w-full h-screen object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src={hrimgffi}
                        alt="nature-4" 
                        className="w-full h-screen object-cover"
                    />
                </SwiperSlide>
            </Swiper>


            {/*rander SelectFrom Component */}
            <div
                className="absolute top-[30%] transform translate-x-[8%] -translate-y-[25%] md:translate-x-[26%] z-10 w-full"
            >
                
                <SelectFrom />
            </div>
            {/* rander abouttranspotaion componnet */}
            <AboutTranspotation></AboutTranspotation>
            {/* brand marque start */}
            <div className='bg-white pt-8 px-4'>
                <div>
                    <h1 className='text-slate-500 text-2xl text-center'>With Our Spuer Couches</h1>
                    <Marquee>
                        <div className='flex flex-row items-center gap-10'>
                            <div className='w-28'><img src={dbgr} alt="" /></div>
                            <div className='w-32'><img src={dem} alt="" /></div>
                            <div className='w-24'><img src={scina} alt="" /></div>
                            <div className='w-28'><img src={imgee} alt="" /></div>
                            <div className='w-28'><img src={isu} alt="" /></div>
                            <div className='w-40'><img src={toyo} alt="" /></div>
                        </div>

                    </Marquee>
                </div>
            </div>
            {/* rander ShowDetailsCard compo  */}
            <FlipCard></FlipCard>
        </div>
    );
};

export default Home;
