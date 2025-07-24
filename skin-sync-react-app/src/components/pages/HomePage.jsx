import { Link } from "react-router-dom";
import './HomePage.css'
function Home() {
    return (
        <main className="home-wrap">
            <section className="home-box">
                <h1>Welcome to Skin-Sync!</h1>
                <p>
                    Find skincare products<br />
                    matched to your skin type &<br />
                    concerns!
                </p>

                <nav className="shortcut-button">
                    <Link to="/form"><button>Get Started!</button></Link>
                </nav>

                <div className="image">
                    <img src="./src/assets/SkinCarePhoto.png" alt="Hands holding skincare products" />
                </div>
            </section>
        </main>
    );
}

export default Home;
