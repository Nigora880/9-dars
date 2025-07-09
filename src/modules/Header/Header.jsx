import { FacebookIcon,TwitterIcon, YoutubeIcon,InstagramIcon,PhoneIcon,LanguageIcon, SearchIcon,} from "../../assets/icons"
import {Logo} from "../../assets/img"
import "./header.scss"
// BEM -> block element modificator
const Header = () => {
    const navList = ["HOME","SHOP", "PAGE", "BLOG", "CONTACT US" ]
    return(
        <header className="site-header">
            <div className="header-top">
                 <div className="container header-top__content">
                    <div className="header-top__wrapper">
                    <div>
                        <a href="#"><FacebookIcon/></a>
                        <a href="#"><TwitterIcon/></a>
                        <a href="#"><YoutubeIcon/></a>
                        <a href="#"><InstagramIcon/></a>
                    </div>
                        <a href="tel:+1234567890">
                            <PhoneIcon/>
                            <span>(+123)4567890</span>
                        </a>
                         <div className="header-top__right">
                            <p>USD $</p>
                            <button>
                                <LanguageIcon/>
                                <span>English</span>
                            </button>
                         </div>
                    </div>
            </div>
            </div>
                <div className="header-bottom">
             <div className="container">
              <HeaderButtonContent/>
                <a href={"#"}>
                    <img src={Logo} alt="SIte logo" width={114} height={34}/>
                </a>
                <nav>
                 {navList.map((item, index) => <a key={index} href="#">{item}</a>)}
                </nav>
                <div>
                    <button><SearchIcon/></button>
                    <button><ReplyIcon/></button>
                    <button><LikeIcon/></button>
                    <button><SaveIcon/></button>

                </div>
             
             </div>
        </div>
        </header>
    )
}

export default Header