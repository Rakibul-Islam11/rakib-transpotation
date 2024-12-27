import { Link } from "react-router-dom";
import "./FlipCard.css";

const FlipCard = () => {
    const cards = [
        { id: 1, title: "About Us", url: "/about", description: "Find details about our service." },
        { id: 2, title: "Service", url: "/service", description: "See our detailed services." },
        { id: 3, title: "Route Map", url: "/home/route-map", description: "Find our service on the map." },
        { id: 4, title: "Query", url: "/home/query", description: "Ask us if you have any question." },
    ];

    return (
        <div className="flex justify-center gap-6 p-4 flex-wrap lg:flex-nowrap bg-white">
            {cards.map((card) => (
                <div key={card.id} className="card-container group">
                    <div className="card-content">
                        {/* Front Side */}
                        <div className="card-front bg-purple-600 text-white flex flex-col items-center justify-center">
                            <h2 className="text-2xl font-semibold">{card.title}</h2>
                            <p className="mt-2 text-sm">{card.description}</p>
                        </div>
                        {/* Back Side */}
                        <div className="card-back bg-gray-800 text-white flex flex-col items-center justify-center">
                            <h3 className="text-xl font-semibold">{card.title}</h3>
                            <Link to={card.url}>
                                <button className="mt-4 px-4 py-2 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FlipCard;
