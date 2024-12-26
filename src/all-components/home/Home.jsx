// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import grimgone from '../../assets/images/heroimgone.jpg'
import hrimgtwo from '../../assets/images/hroimgtwo.jpg'
import hrimgtree from '../../assets/images/heroimgfour.jpg'
import hrimgffi from '../../assets/images/heroimgone.jpg'

// Import required modules
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';

// Import CSS (Make sure the path is correct)
import './Home.css';
import SelectFrom from './sub/select-form/SelectFrom';
import AboutTranspotation from './sub/about-transpotation/AboutTranspotation';

const Home = () => {
    return (
        <div className="relative w-full md:w-3/4 h-[80vh] mx-auto">
            
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
                className="absolute top-1/2 transform translate-x-[8%] -translate-y-[25%] md:translate-x-[26%] z-10 w-full"
            >
                
                <SelectFrom />
            </div>
            {/* rander abouttranspotaion componnet */}
            <AboutTranspotation></AboutTranspotation>
        </div>
    );
};

export default Home;
