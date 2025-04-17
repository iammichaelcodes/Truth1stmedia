import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2'
import Hero2 from '../../components/hero2/Hero2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import HomeSidebar from '../../components/HomeSidebar/HomeSidebar';
import { Channels } from './mods/components/channels';
import { TokenCta } from './mods/components/TokenCta';
import { MemeWall } from './mods/components/memewall';

const HomePage3 = () => {
    return (
        <Fragment>
            <div className="page-wrappers dark-mode">
                <Navbar2 hclass={'wpo-header-style-1'} topbarNone={'topbar-none'} />
                <div className="main-blog-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">

                                <Hero2 />
                                <Channels />
                                <TokenCta />
                                <MemeWall />
                                </div>
                            <HomeSidebar />
                        </div>
                    </div>
                </div>
                {/* <SponsoredNews /> */}
                {/* <Subscribe /> */}
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage3;