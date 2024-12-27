import React, { useState } from 'react';
import '../../../../all-components/global-css/globle.css';

const AboutTranspotation = () => {
    const [showFullText, setShowFullText] = useState(false);

    const handleToggle = () => {
        setShowFullText(!showFullText);// toggle করে হয়ে state এ false থাকলে true হবে আর true থাকলে false হবে
    };

    const shortText = `Rakib Transportation is a trusted name in passenger travel, known for its commitment to comfort and reliability. The fleet includes modern buses with spacious, reclining seats for long journeys. Passengers enjoy air-conditioned cabins, ensuring a comfortable travel experience in all seasons.`;

    const fullText = `${shortText} Onboard amenities include LED screens for entertainment, free Wi-Fi connectivity, and mobile charging ports at every seat. The buses are equipped with GPS tracking for enhanced safety and real-time updates. Clean and hygienic restrooms are provided for convenience. Professional and courteous staff ensure excellent customer service. Punctuality is a hallmark, minimizing delays and maximizing satisfaction. Luxury-class options feature additional comforts like plush seating and complementary snacks. Regular maintenance keeps the fleet in top-notch condition, emphasizing passenger safety. Affordable pricing makes Rakib Transportation accessible to a wide range of travelers. For premium travel solutions with reliability and comfort, Rakib Transportation is a top choice.`;

    return (
        <div className="bg-white shadow-2xl">
            <div>
                <h1 className="text-center text-2xl text-slate-500 for_use_font_class pt-4">Welcome To RAKIB Couch</h1>
                <div>
                    <p className="text-slate-600 for_use_font_class px-4 leading-relaxed pt-2 md:pt-0">
                        {showFullText ? fullText : shortText}
                        {!showFullText && (
                            <span
                                onClick={handleToggle}
                                className="text-blue-500 cursor-pointer ml-2"
                            >
                                More...
                            </span>
                        )}
                    </p>
                    {showFullText && (
                        <span
                            onClick={handleToggle}
                            className="text-blue-500 cursor-pointer ml-2"
                        >
                            Show Less
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AboutTranspotation;
