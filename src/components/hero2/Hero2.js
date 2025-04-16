import React from 'react'
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import heroBlog from '../../api/heroBlogs'
import { Link } from 'react-router-dom'
import bgImage from './HeroBanner.png'


const Hero2 = (props) => {
    return (

        <section className="wpo-hero-slider">
            <div className="swiper-container">
                {/* <div className="swiper-wrapper">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        loop={true}
                        speed={1800}
                        parallax={true}
                        navigation
                    >

                        {heroBlog.slice(4, 6).map((blog, bitem) => (
                            <SwiperSlide key={bitem}>
                                <div className="swiper-slide" style={{ backgroundImage: `url(${blog.screens})` }}>
                                    <div className="slide-inner slide-bg-image"
                                        data-background="assets/images/slider/slide-1.jpg">
                                        <div className="slide-content">
                                            <div data-swiper-parallax="300" className="slide-title">
                                                <h2><Link to={`/hero-blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                            </div>
                                            <div data-swiper-parallax="400" className="slide-text">
                                                <p>{blog.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="thumb">{blog.thumb}</div>
                                </div>
                            </SwiperSlide>
                        ))}

                        ...
                    </Swiper>


                </div> */}
                <div className="hero-container" style={{
                    backgroundImage: `url(${bgImage})`,  // Replace with your image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '90vh',
                    width: '100%',
                    position: 'relative'
                }}>
                    <div className="slide-content" style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        color: '#fff'
                    }}>
                        <div className="slide-title">
                            <h2>SATIRE MEETS SUBSTANCE</h2>
                        </div>
                        <div className="slide-text">
                            <p>Cutting-edge satire exposing corruption and Idiocy across the political spectrum, fueled by the community and crypto.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero2;