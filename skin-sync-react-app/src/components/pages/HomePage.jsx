import { Link } from "react-router-dom";
import './HomePage.css'
import HomeBg from '../assets/home-background.png';
import SkinCareImg from '../assets/skin_care_image.png';
import WashFace from '../assets/washing_face.png';

function Home() {
    return (
        <main className="home-wrap">
            <section>
                <div className="bannerImage">
                    <img src={HomeBg} alt="Skin Care aesthetic background" />
                </div>
                <div className="image">
                    <img src={SkinCareImg} alt="Person pouring a skin product into hand" />
                </div>
            </section>

            <section>
                <div className="explaination">
                    <h2>How it Works</h2>
                    <li>Step 1: Take the Quiz – Quick questions about your skin.</li>
                    <li>Step 2: Get Recommendations – Personalized products and routine.</li>
                    <li>Step 3: Glow with Confidence – Follow your routine and see results.</li>
                </div>

                <nav className="shortcut-button">
                    <Link to="/skin-quiz"><button><b>Get Started!</b></button></Link>
                </nav>

                <div className="face-wash">
                    <img src={WashFace} alt="Female washing her face" />
                </div>

                <div className="logo-circle">
                    Finding Skin Care Shouldn't Be This Hard... Let Skin-Sync do the hard work for you.
                </div>
            </section>
        </main>
    );
}

export default Home;