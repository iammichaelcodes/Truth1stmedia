import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo2.png'
import ins1 from '../../images/ft-icon/1.png'
import ins2 from '../../images/ft-icon/2.png'
import ins3 from '../../images/ft-icon/3.png'
import ins4 from '../../images/ft-icon/4.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const SubmitHandler = (e) => {
    e.preventDefault()
}

// Add this style to your CSS file or include it in the component
const mobileStyle = `
@media (max-width: 767px) {
    .wpo-site-footer .widget-title {
        text-align: center;
    }
    
    .wpo-site-footer .about-widget p {
        text-align: center;
    }
    
    .wpo-site-footer .link-widget ul {
        text-align: center;
        padding-left: 0;
    }
    
    .wpo-site-footer .link-widget ul li {
        text-align: center;
        list-style-type: none;
    }
    
    .wpo-site-footer .social-widget ul {
        text-align: center;
        padding-left: 0;
    }
    
    .wpo-site-footer .social-widget ul li {
        text-align: center;
        list-style-type: none;
    }
    
    .wpo-site-footer .social-widget ul li a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    
    .wpo-site-footer .social-widget ul li a i {
        margin-right: 8px;
    }
    
    .wpo-site-footer .logo.widget-title {
        display: flex;
        justify-content: center;
    }
}
`;

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer">
            {/* Include the CSS */}
            <style dangerouslySetInnerHTML={{ __html: mobileStyle }} />
            
            <div className="wpo-upper-footer mx-auto">
                <div className="container " >
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget social-widget">
                                <div className="logo widget-title">
                                    <img src="/images/truth_first_logo.png" height={190} alt="blog" />
                                </div>
                                <p className='p-2 text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or randomised words which
                                    don't look even slightly believable.</p>
                            </div>
                        </div>
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget social-widget">
                                <div className="widget-title">
                                    <h3>Important Links</h3>
                                            </div>
                                <ul>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/merch-store">Merch Store </Link></li>
                                    <li><Link to="/dao">Dao</Link></li>
                                    <li><Link to="/report">Reports</Link></li>
                                    <li><Link to="/donations">Donations</Link></li>
                                </ul>   
                            </div>
                        </div>

                        <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget social-widget">
                                <div className="widget-title">
                                    <h3>Social Media</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/">
                                        <i><img height={35} src={ins1} alt="" /></i> Facebook
                                    </Link></li>
                                    <li><a href="https://x.com/TruthFirstHQ?t=yYrDKADoolOcRHAsbHv1Fw&s=09">
                                        <i><img height={35} src={ins2} alt="" /></i> X
                                    </a></li>
                                    <li><Link onClick={ClickHandler} to="/">
                                        <i><img height={35} src={ins3} alt="" /></i> Instagram
                                    </Link></li>
                                    <li><Link onClick={ClickHandler} to="/">
                                        <i><img height={35} src={ins4} alt="" /></i> Youtube
                                    </Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> Copyright &copy; 2023 Bloggar by <Link to="/index">wpOceans</Link>. All
                                Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </footer>
    )
}

export default Footer;