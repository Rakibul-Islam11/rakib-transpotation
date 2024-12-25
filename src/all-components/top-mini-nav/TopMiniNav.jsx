import Marquee from "react-fast-marquee";
const TopMiniNav = () => {
    return (
        <div className=" bg-slate-500">
            <div className="w-100% max-w-7xl flex flex-row justify-around mx-auto px-6  text-blue-300 font-bold h-8 items-center">
                <div className=" flex-shrink">Helpline: 01735500480</div>
                <div className="hidden lg:block w-3/4 overflow-hidden">
                    <Marquee pauseOnHover={true}>
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>

                <div><a href="https://www.facebook.com/rakib.al.muqtadir.2024/">Facebook</a></div>
            </div>
                <div className="block lg:hidden w-3/4 overflow-hidden mx-auto text-blue-300">
                    <Marquee pauseOnHover={true}>
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>
        </div>
    );
};

export default TopMiniNav;