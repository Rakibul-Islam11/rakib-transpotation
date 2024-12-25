import PropTypes from "prop-types";
import bgimg from '../../assets/images/BbusBG.png'
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";

const leftSeat = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"];
const leftSecondSeat = ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"];
const c1Seat = ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"];
const d1Seat = ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"];

const SeatPlaningMani = ({ slctLeaving, slctDepuring, formattedDate, data }) => {
    const appStyle = {
        backgroundImage: `url(${bgimg})`,
        width: '254px',
        height: '568px',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '44%',
        backgroundPositionY: '50%',
        backgroundSize: '105% 99%',
        borderRadius: '15% 15% 5% 5%',
        borderBottom: '2px solid white',
        borderLeft: '2px solid white',
        borderRight: '2px solid white',
    };

    const [visibility, setVisibility] = useState([]); // Visibility state
    const getBuses = data[slctLeaving][slctDepuring].buses;

    useEffect(() => {
        const initialVisibility = Array(getBuses.length).fill(false); // Initialize all as hidden
        setVisibility(initialVisibility);
    }, [getBuses]);

    // Toggle visibility for a specific index
    const toggleVisibility = (indxx) => {
        setVisibility((prevVisibility) =>
            prevVisibility.map((visible, i) => (i === indxx ? !visible : visible))
        );
    };

    // Hide visibility for a specific index
    const handleCrossBTN = (indxx) => {
        setVisibility((prevVisibility) =>
            prevVisibility.map((visible, i) => (i === indxx ? false : visible))
        );
    };

    return (
        <div>
            {/* buss time and info card  start*/}
            <div className="flex flex-row justify-between items-center w-[100%] md:w-3/4 h-12 bg-gray-400 mx-auto px-2 mt-4 font-bold text-[15px] md:text-lg">
                <p>Coach Info</p>
                <p>Departure Time</p>
                <p>Fare (BDT)</p>
            </div>
            {/* buss time and info card  end*/}
            {getBuses.map((singleBus, indxx) => (
                <div key={indxx} className="mt-1">
                    <div>
                        {/* available buss card start*/}
                        <div className="w-[100%] md:w-3/4 flex flex-row justify-between items-center px-2 py-6 mx-auto bg-white border border-black">
                            <div>
                                <h1 className="font-bold text-[#656060]">
                                    RAKIB TR <sup className="text-[10px]">TM</sup>
                                </h1>
                                <p className="text-[12px] md:text-md text-[#656060]">
                                    Bus ID: {singleBus.busId}
                                </p>
                                <p className="italic text-[12px] md:text-md text-[#656060]">
                                    Class: {singleBus.class}
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row md:gap-3 items-center">
                                <p>Time:</p>
                                <p className="text-sm md:text-md text-[#656060]">
                                    {singleBus.time}
                                </p>
                            </div>
                            <div className="flex flex-col justify-end items-end gap-2">
                                <p>{singleBus.fare}(tk)</p>
                                <button
                                    onClick={() => toggleVisibility(indxx)}
                                    className="px-2 md:px-4 py-1 md:py-1 bg-blue-600 text-sm md:text-md text-white"
                                >
                                    {visibility[indxx] ? 'Hide Seats' : 'Select Seat'}
                                </button>
                            </div>
                        </div>
                        {/* available buss card end*/}
                        {/* Seat planning section start*/}
                        {visibility[indxx] && (
                            <div className="w-[100%] md:w-3/4 mx-auto bg-white p-4">
                                {/* Cross button */}
                                <div className="flex">
                                    <span
                                        onClick={() => handleCrossBTN(indxx)}
                                        className="ms-auto cursor-pointer text-2xl"
                                    >
                                        <RxCross2 />
                                    </span>
                                </div>
                                <div>
                                    <div style={appStyle} className="flex flex-row gap-12 ps-4 text-[#656060]">
                                        <div className="flex flex-row pt-28 gap-3">
                                            <div className="flex flex-col gap-2">
                                                {leftSeat.map((sinSeat) => (
                                                    <button
                                                        key={sinSeat}
                                                        style={{ borderRadius: '15px 15px 7px 7px' }}
                                                        className="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white text-sm"
                                                    >
                                                        {sinSeat}
                                                    </button>
                                                ))}
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                {leftSecondSeat.map((sinSeat) => (
                                                    <button
                                                        key={sinSeat}
                                                        style={{ borderRadius: '15px 15px 7px 7px' }}
                                                        className="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white text-sm"
                                                    >
                                                        {sinSeat}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex flex-row pt-28 gap-3">
                                            <div className="flex flex-col gap-2">
                                                {c1Seat.map((sinSeat) => (
                                                    <button
                                                        key={sinSeat}
                                                        style={{ borderRadius: '15px 15px 7px 7px' }}
                                                        className="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white text-sm"
                                                    >
                                                        {sinSeat}
                                                    </button>
                                                ))}
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                {d1Seat.map((sinSeat) => (
                                                    <button
                                                        key={sinSeat}
                                                        style={{ borderRadius: '15px 15px 7px 7px' }}
                                                        className="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white text-sm"
                                                    >
                                                        {sinSeat}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* Seat planning section end*/}
                    </div>
                </div>
            ))}
        </div>
    );
};



SeatPlaningMani.propTypes = {
    slctLeaving: PropTypes.string.isRequired, // Must be a string and required
    slctDepuring: PropTypes.string.isRequired, // Must be a string and required
    formattedDate: PropTypes.string.isRequired, // Must be a string and required
    data: PropTypes.objectOf(
        PropTypes.objectOf(
            PropTypes.shape({
                buses: PropTypes.arrayOf(
                    PropTypes.shape({
                        busId: PropTypes.string.isRequired,
                        time: PropTypes.string.isRequired,
                    })
                ).isRequired,
            })
        )
    ).isRequired, // Must follow the nested structure of `data`
};
export default SeatPlaningMani;







// (1)==> আপনি data[slctLeaving][slctDepuring].buses এভাবে অ্যাক্সেস করতে পারছেন কারণ আপনার ডাটা স্ট্রাকচার একটি নেস্টেড অবজেক্ট। JavaScript-এ ব্র্যাকেট নোটেশন ([]) এবং ডট নোটেশন (.) উভয়ই অবজেক্টের প্রপার্টি অ্যাক্সেস করার জন্য ব্যবহার করা যায়। তবে ব্র্যাকেট নোটেশনের কিছু সুবিধা রয়েছে যা এখানে কাজ করছে। নিচে বিস্তারিত ব্যাখ্যা করা হলো:

// ১. ডট নোটেশন এবং ব্র্যাকেট নোটেশনের পার্থক্য:
// ডট নোটেশন:
// ডট নোটেশন সরাসরি প্রপার্টির নাম ব্যবহার করে অ্যাক্সেস করা হয়।
// এটি শুধুমাত্র স্ট্যাটিক কী (যেমন, data.Dhaka) অ্যাক্সেস করার জন্য কাজ করে।
// javascript
// Copy code
// data.Dhaka.Sylhet.buses; // কাজ করবে
// data[slctLeaving][slctDepuring].buses; // এখানে কাজ করবে না, কারণ 'slctLeaving' একটি ভ্যারিয়েবল।
// ব্র্যাকেট নোটেশন:
// ব্র্যাকেট নোটেশন ভ্যারিয়েবল বা ডাইনামিক কী অ্যাক্সেস করার জন্য কাজ করে।
// এতে প্রপার্টির নাম একটি স্ট্রিং বা ভ্যারিয়েবল হতে পারে।
// javascript
// Copy code
// data["Dhaka"]["Sylhet"]["buses"]; // কাজ করবে
// data[slctLeaving][slctDepuring]["buses"]; // কাজ করবে কারণ 'slctLeaving' এবং 'slctDepuring' ডাইনামিক ভ্যালু।
// ২. কেন ব্র্যাকেট নোটেশন প্রয়োজন?
// আপনার স্ট্রাকচারে data[slctLeaving][slctDepuring].buses এই ধরনের অ্যাক্সেস সম্ভব কারণ:

// slctLeaving এবং slctDepuring ভ্যারিয়েবল। তাদের মান Dhaka, Sylhet ইত্যাদি হতে পারে।
// আপনি প্রপার্টি কী ডাইনামিকভাবে নির্ধারণ করছেন। এটি ডট নোটেশনে সম্ভব নয়, কারণ ডট নোটেশন শুধুমাত্র স্ট্যাটিক কী-এর জন্য কাজ করে।
// উদাহরণ:

// javascript
// Copy code
// const slctLeaving = "Dhaka";
// const slctDepuring = "Sylhet";

// console.log(data.Dhaka.Sylhet.buses); // ডট নোটেশনে কাজ করবে।
// console.log(data[slctLeaving][slctDepuring].buses); // ব্র্যাকেট নোটেশনে কাজ করবে কারণ এটি ভ্যারিয়েবল ব্যবহার করছে।
// ৩. কেন ব্র্যাকেট নোটেশন প্রয়োজন হয় (Dynamic Keys):
// যখন কী ডাইনামিক হয়:
// javascript
// Copy code
// const slctLeaving = "Dhaka";
// const slctDepuring = "Sylhet";

// console.log(data.Dhaka.Sylhet.buses); // এখানে সরাসরি ডট নোটেশনে অ্যাক্সেস করা সম্ভব।

// // কিন্তু যখন কী ডাইনামিকভাবে আসে (ভ্যারিয়েবল হিসাবে), ডট নোটেশন কাজ করবে না:
// console.log(data.slctLeaving.slctDepuring.buses); // এখানে কাজ করবে না।
// console.log(data[slctLeaving][slctDepuring].buses); // এখানে কাজ করবে।
// ব্র্যাকেট নোটেশন স্ট্রিং কনস্ট্যান্ট ব্যবহার করতেও কাজে লাগে:
// javascript
// Copy code
// console.log(data["Dhaka"]["Sylhet"]["buses"]); // ব্র্যাকেট নোটেশন স্ট্রিং কনস্ট্যান্ট ব্যবহার করে অ্যাক্সেস করতে পারে।
// ৪. ব্র্যাকেট নোটেশনের ক্ষমতা:
// ব্র্যাকেট নোটেশন দিয়ে ডাইনামিক কী, স্ট্রিং কী, বা এমনকি প্রপার্টির নাম যেটা স্পেস বা স্পেশাল ক্যারেক্টার ধারণ করে, তা অ্যাক্সেস করা সম্ভব।

// উদাহরণ: স্পেস বা স্পেশাল ক্যারেক্টার
// javascript
// Copy code
// const data = {
//   "Dhaka City": {
//     "Sylhet Town": {
//       buses: [{ busId: "BUS101" }, { busId: "BUS102" }]
//     }
//   }
// };

// // ডট নোটেশনে কাজ করবে না:
// // console.log(data.Dhaka City.Sylhet Town.buses); // Invalid

// // ব্র্যাকেট নোটেশন ব্যবহার করুন:
// console.log(data["Dhaka City"]["Sylhet Town"]["buses"]);
// ৫. আপনার স্ট্রাকচারে কেন এটা কার্যকর?
// আপনার ডাটা স্ট্রাকচারটি ডাইনামিক কী ধারণ করছে। তাই data[slctLeaving][slctDepuring].buses কাজ করছে। এটি ডাইনামিকভাবে প্রপার্টি অ্যাক্সেস করতে পারে যেখানে slctLeaving এবং slctDepuring ডাইনামিক ভ্যালু হিসেবে কাজ করছে।

// javascript
// Copy code
// const slctLeaving = "Dhaka";
// const slctDepuring = "Sylhet";

// const buses = data[slctLeaving]?.[slctDepuring]?.buses || [];
// console.log(buses); // অ্যারে রিটার্ন করবে।
// ৬. নোটস (Optional Chaining):
// ডাইনামিক স্ট্রাকচারে ডাটা না থাকলে অ্যাপ্লিকেশন ক্রাশ করতে পারে। এজন্য Optional Chaining (?.) ব্যবহার করলে নিরাপদ অ্যাক্সেস নিশ্চিত করা যায়।

// javascript
// Copy code
// const buses = data[slctLeaving]?.[slctDepuring]?.buses || [];
// if (buses.length > 0) {
//   console.log("Buses:", buses);
// } else {
//   console.log("No buses found.");
// }
// সংক্ষেপে:
// ব্র্যাকেট নোটেশন প্রয়োজন হয় যখন প্রপার্টির নাম ডাইনামিক বা ভ্যারিয়েবল থেকে আসে।
// ডট নোটেশন শুধুমাত্র স্ট্যাটিক কী-এর জন্য কাজ করে।
// আপনার কোডে ডাইনামিক ভ্যালু ব্যবহার হচ্ছে (slctLeaving এবং slctDepuring), তাই ব্র্যাকেট নোটেশন সঠিক সমাধান।