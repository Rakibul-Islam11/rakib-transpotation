import { useState } from "react";
import "flatpickr/dist/flatpickr.css"; // Flatpickr এর CSS ইমপোর্ট
import Flatpickr from "react-flatpickr";
import './slelctForm.css';
import { useNavigate } from "react-router-dom";


const LeavingCities = [
    { value: "Select City", label: "Select City" },
    { value: "Dhaka", label: "Dhaka" },
    { value: "Gazipur", label: "Gazipur" },
    { value: "Narayanganj", label: "Narayanganj" },
    { value: "Mymansing", label: "Mymansing" },
    { value: "Rajshahi", label: "Rajshahi" },
    { value: "Pabna", label: "Pabna" },
    { value: "Kushtia", label: "Kushtia" },
    { value: "Natore", label: "Natore" },
    { value: "Chittagong", label: "Chittagong" },
];

const DepurtingCities = [
    { value: "Select City", label: "Select City" },
    { value: "Sylhet", label: "Sylhet" },
    { value: "Rangamati", label: "Rangamati" },
    { value: "Khagrachari", label: "Khagrachari" },
    { value: "Bandarban", label: "Bandarban" },
    { value: "Vhola", label: "Vhola" },
    { value: "Sunamganj", label: "Sunamganj" },
    { value: "Norayel", label: "Norayel" },
    { value: "Mirpur", label: "Mirpur" },
    { value: "Nobabgang", label: "Nobabgang" },
];

const SelectFrom = () => {
    const [slctLeaving, setSlctLeaving] = useState("Select City"); // leaving state
    const [slctDepuring, setSlctDepuring] = useState("Select City"); // departing state
    const [date, setDate] = useState(null); // date state (5)
    const [errs, setErrs] = useState({ slctLeaving: false, slctDeparting: false, datee: false }); // change to object
    const navigate = useNavigate()//এটি usenagigate hook এইটার veriable নিচে use করা হয়েছে
    console.log(date);
    
    //handle selct leaving
    const handleSlctLeaving = (e) => {
        const getLeavingValue = e.target.value;
        setSlctLeaving(getLeavingValue);
        setErrs(prev => ({...prev, slctLeaving: getLeavingValue === "Select City" }))//(1)(2)(3)
    };

    // handle slct deprting
    const handleSlecDeparting = (e) => {
        const getDepartValue = e.target.value;
        setSlctDepuring(getDepartValue);
        setErrs(prev => ({...prev, slctDeparting: getDepartValue === "Select City" }))
    };

    // date handler
    const dateHandler = (selectedDates) => {
        setDate(selectedDates.length > 0 ? selectedDates[0] : null);
        setErrs(prev => ({ ...prev, datee: selectedDates.length === 0 }));
    };

    // form handler
    const formHandler = (e) => {
        e.preventDefault();
        // Check if "leaving city" is selected
        setErrs(prev => ({ ...prev, slctLeaving: slctLeaving === "Select City" }));//(1)(2)
        // Check if "depatuing city" is selected
        setErrs(prev => ({ ...prev, slctDeparting: slctDepuring == "Select City" }));
        // Check if "date" is selected
        setErrs(prev => ({ ...prev, datee: date === null }));
        //navigate
        if (slctLeaving !== "Select City" && slctDepuring !== "Select City" && date !== null) {
            navigate('/seatSelect', {
                state: { // (7)
                    slctLeaving, // Leaving city
                    slctDepuring, // Departing city
                    date, // Selected date
                }
            });
        }

    };

    return (
        <div className='w-5/6 md:w-3/6 '>
            <form onSubmit={formHandler}>
                <div className="slct_form p-7 flex flex-col gap-3">
                    {/* Leaving From */}
                    <div>
                        <label htmlFor="leaveFRM" className="text-sm mb-2 text-white font-bold ">
                            
                            LEAVING FROM
                        </label>
                        {errs.slctLeaving && <p className="text-red-500 ml-3 inline text-sm md:text-md">Please select a city</p>}
                        <br />
                        <select
                            id="leaveFRM"
                            //এখানে daynamically selct box এর color দেওয়া হয়েছে
                            className= {`w-full py-1.5 bg-white px-2 rounded-md focus:outline-none 
                                        ${errs.slctLeaving ? "border-red-500 ring-1 ring-red-500" : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"} text-black`}

                            onChange={handleSlctLeaving}
                            
                        >
                            {LeavingCities.map(city => (
                                <option value={city.value} key={city.value}>
                                    {city.label}
                                </option>
                            ))}
                        </select>
                        {/* Display error if slctLeav is true */}
                        
                    </div>

                    {/* Going To */}
                    <div>
                        <label htmlFor="depFRM" className="text-sm mb-2 text-white font-bold">
                            GOING TO
                        </label>
                        {errs.slctDeparting && <p className="text-red-500 ml-3 inline text-sm md:text-md">Please select a city</p>}
                        <br />
                        <select
                            id="depFRM"
                            className={`w-full py-1.5 bg-white px-2 rounded-md focus:outline-none 
                                        ${errs.slctDeparting ? "border-red-500 ring-1 ring-red-500" : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"} text-black `}
                            onChange={handleSlecDeparting}
                        >
                            {DepurtingCities.map(city => (
                                <option value={city.value} key={city.value}>
                                    {city.label}
                                </option>
                            ))}
                        </select>
                        {/* Display error if slctLeav is true */}
                        
                    </div>

                    {/* date pick */}
                    <div>
                        <label htmlFor="datePicker" className="text-sm mb-2 text-white font-bold">
                            DEPARTING DATE
                        </label>
                        {errs.datee && <p className="text-red-500 ml-3 inline text-sm md:text-md">Please select date</p>}
                        <Flatpickr
                            id="datePicker"
                            options={{
                                dateFormat: "Y-m-d", // Date format
                                minDate: "today", // Min date: today
                                maxDate: new Date().fp_incr(10), // Max date: 10 days from today
                            }}
                            value={date || undefined} // Keep it undefined when no date is selected
                            onChange={dateHandler}
                            className={`w-full py-1.5 bg-white px-2 rounded-md focus:outline-none 
                                        ${errs.datee ? "border-red-500 ring-1 ring-red-500" : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"} text-black`}
                            placeholder="Choose the date"
                        />
                        
                    </div>

                    {/* Submit Button */}
                    <button
                        type='submit'
                        className='w-2/3 py-2 bg-green-300 mt-5 mx-auto hover:bg-green-500'
                    >
                        Search Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SelectFrom;


//(1)==> এখানে ...prev এর মাধ্যমে পুরো স্টেট অবজেক্টের পূর্বের মান ধরে রাখা হয় অরথাত এই slctDepurting slctDate দুইটার মান ধরে রাখা হচ্ছে যা অপরিবর্তিত থাকছে  কিন্তু যেই প্রপার্টির মান আপনি নতুনভাবে সেট করেন, সেটি overwrite হয়ে যায় অরথাথ সেইটার পূর্বের মান এই ...prev ধরে রাখবে না বরং নতুন মান দিয়ে overwrite হয়ে যায় । কিন্তু এখানে errs state এর মদ্ধে কেবল একটি state ই থাক্তো তখন আমাদের এই ..prev দিয়ে আগের state এর মান ধরে রাখতে হতো না । তাই এখানে যেহেতূ এখানে error state এর মদ্ধে multiple state হিসেবে কাজে লাগাচ্ছি এজম্ন্য state এর মদ্দে কোনো নির্দিষ্ট state এর মান update করতে গেলে জেনো অন্য statae value replace না হয়ে যায় এজন্য এই ...prev পেরামিটারে স্প্রিড অপারেটর use করা হয়েছে।

//(2)==> এখানে এই দুই জায়গাতে কেনো এই লজিক সেট করে value upadate করা হলো এখানে submite button এ কেঈ ক্লিক করলে যদি কোন selectbox unselect থাকে তাহলে error text দেখাবে । আবার error text দেখানো অবস্থাতে যদি কেউ সেই সিলেক্ট box এ select করে তাহলে error text যাতে চলে যায় এজন্য আলাদা ভাবে আবার অই সিলেক্ট box এর handler এ আবার লজিক খাটানো হয়েছে।


// (3)==>  এখানে এই লাইন্টাতে setErrs(prev => ({...prev, slctLeaving: getLeavingValue === "Select City" })) আমি নিছের সেইম লজিকের মতন কেন slctLeaving use না করে  কেনো সরাসরি অই state এর বাহির তেকে getLeavingValue এইটার মাদ্ধমে ভেলূ নিয়ে লজিকে লাগালাম এর ব্যখ্যা হলো  আপনার সমস্যার কারণ হলো state update হওয়া এবং সেটির নতুন মান reflect হওয়ার মধ্যে কিছুটা সময় লাগে, কারণ React-এ setState asynchronous (অ্যাসিনক্রোনাস) প্রক্রিয়া। আপনি slctLeaving state ব্যবহার করে যাচাই করছেন, কিন্তু handleSlctLeaving-এ নতুন মান সেট করার জন্য setSlctLeaving(e.target.value) ডাকার পরপরই slctLeaving এর মান এখনো আপডেট হয়নি। তাই, আপনি পুরনো মানের উপর ভিত্তি করে যাচাই করছেন।কেন এটি কাজ করে?
// e.target.value সরাসরি DOM থেকে বর্তমান সিলেকশন নেয়। অন্যদিকে, slctLeaving-এর মান React state আপডেটের পরে রি-রেন্ডারের সময় পরিবর্তন হয়। সুতরাং, যদি আপনি slctLeaving ব্যবহার করেন, তবে এটি সর্বশেষ মানের চেয়ে এক ধাপ পেছনে থাকবে।


//(5)==> আপনি যদি চান যে আমি date pick box এ defualt কোনো current date দেখাবো না সেটা blank থাকবে user date box এ ক্লিক করে ডেট সিলেক্ট করবে তাহলে state null দিয়ে রাখবেন। আর যদি মনে করেন deafult current date show করাবো পাশাপাশি সে সেখানে ক্লিক করেও সিলেক্ট করতে পারবে তাহলে এখানে new Date() এটা সেট করবেন ।

//(7)==> এখানে useNavigat এর মাদ্ধমে অন্য পেইজে যাওয়া হয়েছে সাথে state এর মাদ্ধমে আমরা ডাটা পাঠিয়ে দিয়েছি অই naviagte কৃত পেইজে এখানে যেহেতু একের অধিক জিনিস পাঠাচ্ছি তাই object আকারে পাঠানো হয়েছে। আর সেটা useLocation() এর মাদ্ধমে রিসিভ করা হবে।