import './app-footer.css';

const Footer = () =>{
    return(
        <footer>
            <div className="footer-container">
                <div className="columns">
                    <div className="column">
                        <div className="column-title">LOGO</div>
                        <div className="column-link">Apple Watch and theapp on iPhone</div>
                        <div className="column-icons">
                            <div className="column-ico face"></div>
                            <div className="column-ico inst"></div>
                            <div className="column-ico twit"></div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="column-title">Product</div>
                        <div className="column-link">About Us</div>
                        <div className="column-link">Blog</div>
                    </div>
                    <div className="column">
                        <div className="column-title">Features</div>
                        <div className="column-link">Smart Watch</div>
                        <div className="column-link">Head Phone</div>
                        <div className="column-link">Home security</div>
                        <div className="column-link">Smart Lock</div>
                    </div>
                    <div className="column">
                        <div className="column-title">About Us</div>
                        <div className="column-link">Who we are</div>
                        <div className="column-link">Contact us</div>
                        <div className="column-link">support</div>
                        <div className="column-link">FAQ</div>
                    </div>
                    <div className="column">
                        <div className="column-title">Subscribe</div>
                        <input type="text" placeholder='Add Email'></input>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;