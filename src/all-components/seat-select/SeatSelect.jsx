import {  useLoaderData, useLocation } from "react-router-dom";
import SeatPlaningMani from "../seat-plaing-main/SeatPlaningMani";

const SeatSelect = () => {
    const location = useLocation()//navigate এ যে state এর মাদ্ধমে ডাটা পাঠানো হয়েছে তা রিসিভ করা হয়েছে।
    const { slctLeaving, slctDepuring, date } = location.state || {}; //(8) distucturing
    const formattedDate = `${new Date(date).toLocaleDateString("en-GB", {//(9)
            day: "2-digit", // Two-digit day
            month: "2-digit", // Two-digit month
            year: "numeric", // Full year
        })} (${new Date(date).toLocaleDateString("en-US", {
            weekday: "long", // Full weekday name
        })})`;
    //recieve api data
    const data = useLoaderData()
    return (
        <div>
            <div className="w-[100%] md:w-3/4 mx-auto bg-green-400 px-4 py-1">
                <h1 className="text-lg md:text-2xl font-bold text-gray-600">Available Bus</h1>
                <div className="flex flex-row items-center justify-start gap-2 md:gap-3">
                    <h1 className="text-sm md:text-xl text-gray-600">{slctLeaving}</h1>
                    <h1 className="text-sm md:text-xl text-gray-600">To</h1>
                    <h1 className="text-sm md:text-xl text-gray-600">{slctDepuring} on</h1>
                    <div>
                        <h1 className="text-gray-600 text-sm md:text-xl">{formattedDate}</h1>
                    </div>
                </div>
                
            </div>
            <SeatPlaningMani slctLeaving={slctLeaving} slctDepuring={slctDepuring} formattedDate={formattedDate} data={data}></SeatPlaningMani>
        </div>
    );
};

export default SeatSelect;

// (8)==> || {} অংশটি ডিফল্ট ভ্যালু (default value) হিসেবে ব্যবহার করা হয়, যাতে অ্যাপ্লিকেশন ক্র্যাশ না করে। এটি একটি নিরাপত্তামূলক ব্যবস্থা।

// কেন || {} ব্যবহার করা হয়েছে?
// location.state যদি undefined বা null হয়:

// location.state সরাসরি অ্যাক্সেস করতে গেলে, যদি এটি undefined হয়, তাহলে জাভাস্ক্রিপ্ট এর্রোর মতো "Cannot destructure property of undefined" দেখাবে।
// || {} ব্যবহার করে আমরা নিশ্চিত করছি যে, যদি location.state ফালসি (undefined, null, বা ফাঁকা) হয়, তাহলে এটি একটি খালি অবজেক্ট {} ব্যবহার করবে।
// ডিফল্ট ফ্যালব্যাক ভ্যালু:

// আমরা location.state থেকে ডেটা ডেস্ট্রাকচার করছি। কিন্তু state যদি এক্সিস্ট না করে, তাহলে {} দিয়ে এটি নিরাপদে খালি অবজেক্ট হিসেবে কাজ করবে।
// এইভাবে আমরা অ্যাপ ক্র্যাশ হওয়ার ঝুঁকি এড়াতে পারি।


// (9)==> এখানে date কে  রিসিভ করে অন্যভাবে ব্যবহার করাহয়েছে এটা বুঝতে হবে না কারন এটা flaipicker with momoent js react দিয়ে করা হয়েছে এটা যখন লাগবে তখন এখান থেকে দেখে নিয়ে এভাবে সেট করলেই হবে