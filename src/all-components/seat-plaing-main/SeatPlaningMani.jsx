import PropTypes from "prop-types";


const SeatPlaningMani = ({slctLeaving, slctDepuring, formattedDate, data}) => {

    console.log(data);
    let getBuses = data[slctLeaving][slctDepuring].buses;//(1)
    
    
    
    return (
        <div>
            <div className="flex flex-row justify-between items-center w-[100%] md:w-3/4 h-12 bg-gray-400 mx-auto px-2 mt-4 font-bold text-sm md:text-lg">
                <p>Operator & Coach Info</p>
                <p>Departure Time</p>
                <p>Fare (BDT)</p>
            </div>
            {
                getBuses.map((singleBuss, indxx)=> (
                    <div key={indxx} className="mt-1">
                        <div>
                            <div className="w-[100%] md:w-3/4 flex flex-row justify-between items-center px-2 mx-auto  bg-white border border-black">
                                <div>
                                    <h1>RAKIB TRANS</h1>
                                    <p>Bus ID: {singleBuss.busId}</p>
                                    <p>Type: { singleBuss.class }</p>
                                </div>
                                <p>Time: {singleBuss.time}</p>
                                <div className="flex flex-col justify-end items-end">
                                    <p>{singleBuss.fare}(tk)</p>
                                    <button className="px-4 py-1 bg-blue-600">Select Seat</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
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