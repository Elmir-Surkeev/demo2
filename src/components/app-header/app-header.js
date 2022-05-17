import './app-header.css';
import Nav from './app-nav/app-nav';
const Header = () =>{
    const links = [
        {linkName: 'Home', increase: true, a: '#'},
        {linkName: 'Feauture', increase: false, a: '#'},
        {linkName: 'Product', increase: false, a: '#'},
        {linkName: 'Testimotial', increase: false, a: '#'},
    ]
    return(
        <div className="header">
             <Nav links={links}/>
             <div className="header-info">
                <div className="header-left">
                    <div className="h5">
                        <a href="#">Your watch your style</a>
                    </div>
                    <h1>Have You <br /> Ever Worn A <br /> Real Watch.</h1>
                    <h3>The styles of watches available to consumers are <br /> endless and profit also endless. if you are Fashion Geek  <br />and have guts to sort out need related to </h3>
                    <div className="buttons">
                        <div className="btn">GET STATED</div>
                        <div className="btn-inherit">GALLERY</div>
                    </div>
                </div>
                <div className="header-right"></div>
             </div>
             <div className="crooked-picture">
                 
             </div>
        </div>
    )
}

export default Header;