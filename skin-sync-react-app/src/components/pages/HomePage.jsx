import { Link } from "react-router-dom";
import './HomePage.css';

function Home() {
    return (
        <main className="home-wrap">
            <section>
                <div className="bannerImage">
                    <img 
                        src="/images/home-background.png" 
                        alt="Skin Care aesthetic background" 
                    />
                </div>
                <div className="image">
                    <img 
                        src="/images/skin_care_image.png" alt="Person pouring a skin product into hand" />
                </div>
            </section>

            <section>
                <div className="explanation">
                    <h2>How it Works</h2><br />
                    <li>Step 1: Take the Quiz – Quick questions about your skin.</li><br />
                    <li>Step 2: Get Recommendations – Personalized products and routine.</li><br />
                    <li>Step 3: Glow with Confidence – Follow your routine and see results.</li><br />
                </div>

                <nav className="shortcut-button">
                    <Link to="/skin-quiz">
                        <button><b>Get Started!</b></button>
                    </Link>
                </nav>

                <div className="face-wash">
                    <img 
                        src="/images/washing_face.png" alt="Female washing her face" />
                </div>

                <div className="logo-circle">
                    Finding Skin Care Shouldn't Be This Hard... Let Skin-Sync do the hard work for you.
                </div>
            </section>
        </main>
    );
}

export default Home;
