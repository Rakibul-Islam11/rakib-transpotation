import { Link } from 'react-router-dom';
import nvbrandimg from '../../assets/images/navbrand.png'

const Service = () => {
    return (
        <div className="w-[96%] md:w-3/4 mx-auto bg-white px-6 py-5">
            <Link to={'/home'} className='flex justify-center mb-2 md:mb-4'>
                <img src={nvbrandimg} alt="" />
            </Link>
            <div>
                <div className="text-slate-500 font-bold text-2xl mb-3">
                    <h1>Greenline Paribahan Route</h1>
                </div>
                <div className="text-slate-600 space-y-4">
                    <div className="bg-white p-4 border rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <p>Dhaka – Chittagong – Dhaka.</p>
                    </div>
                    <div className="bg-white p-4 border rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <p>Dhaka – Cox’s Bazar – Dhaka.</p>
                    </div>
                    <div className="bg-white p-4 border rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <p>Dhaka – Teknaf – Dhaka.</p>
                    </div>
                    <div className="bg-white p-4 border rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <p>Dhaka – Sylhet – Dhaka.</p>
                    </div>
                    <div className="bg-white p-4 border rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <p>Dhaka – Banapole – Dhaka.</p>
                    </div>
                    <div className="bg-white p-4 border rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <p>Dhaka – Khulna – Dhaka.</p>
                    </div>
                    <div className="bg-white p-4 border rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <p>Dhaka – Rajsahi – Dhaka.</p>
                    </div>
                    <div className="bg-white p-4 border rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <p>Chittagong – Sylhet – Chittagong.</p>
                    </div>
                    <div className="bg-white p-4 border rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <p>Chittagong – Banapole – Chittagong.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Service;