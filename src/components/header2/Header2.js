import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderTopbar from '../HeaderTopbar/HeaderTopbar'
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from '../../images/logo2.png'
import Logo2 from '../../images/logo2.png'
import Breaking from '../../api/breaking'

const Header2 = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [rightMenuActive, setrightMenuState] = useState(false);
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header" className={props.topbarNone}>
            {/* <HeaderTopbar /> */}
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/home"><img height={120} src="/images/truth_first_logo.png"
                                        alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="mb-2 nav navbar-nav mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/">Home</Link>
                                            {/*  <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/home">Home style 1</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home2">Home style 2</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home3">Home style 3</Link></li>
                                            </ul> */}
                                        </li>
                                        {/* <li className="menu-item-has-children">
                                            <Link to="#">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/blog">Archive</Link></li>
                                                <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                                                <li><Link onClick={ClickHandler} to="/shop">Shop</Link></li>


                                            </ul>
                                        </li> */}
                                        <li><Link onClick={ClickHandler} to="/lifestyle">About</Link></li>
                                        <li><Link onClick={ClickHandler} to="/foods">Anty Ecosystem</Link></li>
                                        <li><Link onClick={ClickHandler} to="/business">Merch Store</Link></li>
                                        <li><Link onClick={ClickHandler} to="/travels">Contact</Link></li>
                                        <li><Link onClick={ClickHandler} to="/travels">Dao</Link></li>
                                        <li><Link onClick={ClickHandler} to="/report">Reports</Link></li>
                                        {/* <button className="h-1 mb-4 btn btn-dark">Connect Wallet</button> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                                className={`fi ti-search ${menuActive ? "ti-close" : "fi "}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi flaticon-magnifiying-glass"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header-right-menu-wrapper">
                                        <div className="header-right-menu">
                                            <div className="right-menu-toggle-btn" onClick={() => setrightMenuState(!rightMenuActive)}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                            <div className={`header-right-menu-wrap ${rightMenuActive ? "right-menu-active" : ""}`}>
                                                <button className="right-menu-close" onClick={() => setrightMenuState(!rightMenuActive)}><i className="ti-close"></i></button>
                                                <div className="logo"><img src={Logo2} alt="" /></div>
                                                <div className="header-right-sec">
                                                    <div className="project-widget widget">
                                                        <h3>Our Latest News</h3>
                                                        <div className="posts">
                                                            {Breaking.slice(0, 3).map((blog, bitem) => (
                                                                <div className="post" key={bitem}>
                                                                    <div className="img-holder">
                                                                        <img src={blog.screens} alt="" />
                                                                    </div>
                                                                    <div className="details">
                                                                        <span className="date">{blog.create_at}</span>
                                                                        <h4><Link onClick={ClickHandler} to={`/breaking-single/${blog.slug}`}>{blog.title}</Link></h4>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="widget wpo-contact-widget">
                                                        <div className="widget-title">
                                                            <h3>Contact Us</h3>
                                                        </div>
                                                        <div className="contact-ft">
                                                            <ul>
                                                                <li><i className="fi flaticon-location"></i>68D, Belsion Town
                                                                    2365 <br /> Fna city, LH 3656, USA</li>
                                                                <li><i className="fi flaticon-telephone"></i>+ 8 (123) 123 456
                                                                    789 <br />
                                                                    + 8 (123) 123 456 789</li>
                                                                <li><i className="fi flaticon-email"></i>Bloggar@gmail.com</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header2;