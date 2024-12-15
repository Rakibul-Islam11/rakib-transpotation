

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="content">
                <h1>Contact</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                {/* Repeat Lorem ipsum for testing scroll */}
                {Array.from({ length: 50 }, (_, i) => (
                    <p key={i}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                ))}
            </div>
        </div>
    );
};

export default Contact;
