import { Link } from "react-router-dom";
import './HomePage.css'
function Home() {
    return (
        <main className="home-wrap">
            <div className="home-box">
                <h1>Welcome to Skin-Sync!</h1>
                <p>Find skincare products<br />
                    matched to your skin type &<br />
                    concerns!
                </p>
                <div className="shortcut-button">
                    <Link to="/form"><button>Get Started!</button></Link>
                </div>
            </div>
        </main>
    );
}

export default Home;
