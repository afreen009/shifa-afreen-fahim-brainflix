import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
    return (
        <header>
            <nav className="headers">
                <Link to={'/'}>
                    <div className="headers__logoDiv">
                        <div className="headers__logo"></div>
                    </div>
                </Link>
                <div className="headers__rightSec">
                    <div className="headers__searchDiv">
                        <input type="text" className="headers__searchBar" placeholder="Search" />
                        <div className="headers__imageBox">
                            <div className="headers__image">
                                <img src="/src/assets/images/Mohan-muruge.jpg" className="headers__imgCircle" alt="users image"/>
                            </div>
                        </div>
                    </div>
                    <div className="headers__uploadBtnDiv">
                    <Link to={'/upload-video'} className="headers__linkTag">
                        <div className="headers__uploadBtnAlone">
                            <button type="submit" className="headers__uploadBtn">
                                <img className="headers__btnImg" src="/src/assets/icons/upload.svg" alt="upload image" />
                                UPLOAD
                            </button>
                        </div>
                    </Link>   
                        <div className="headers__tabDesk">
                            <div className="headers__image">
                                <img src="/src/assets/images/Mohan-muruge.jpg" className="headers__imgCircle" alt="users image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;