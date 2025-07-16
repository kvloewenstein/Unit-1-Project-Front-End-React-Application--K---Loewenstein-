import { Link } from "react-router-dom";

function Header() {
     return (
        <header className="header">
            <div className="logo-overlay"></div>
            <h1>Skin-Sync</h1> 
            <p>Matching You to Your Perfect Skin Care</p>

            <div className="button-group">
            <Link to="/"><button>Home</button></Link>
            <Link to="/about"><button>About</button></Link>
            <Link to="/form"><button>Skin Form</button></Link>
            </div>
        </header>
     );
}
export default Header;