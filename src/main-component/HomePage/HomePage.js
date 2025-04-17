import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2'
import Hero2 from '../../components/hero2/Hero2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import FeaturesNews from '../../components/FeaturesNews/FeaturesNews';
import Footer from '../../components/footer/Footer';
import Subscribe from '../../components/Subscribe/Subscribe';
import HomeSidebar from '../../components/HomeSidebar/HomeSidebar';
import VideoNews from '../../components/VideoNews/VideoNews';
import HighlightsNews from '../../components/HighlightsNews/HighlightsNews';
import SponsoredNews from '../../components/SponsoredNews/SponsoredNews';
import HomeTest from '../../Code/HomepageSections';
import { Channels } from './mods/components/channels';
import { TokenCta } from './mods/components/TokenCta';
import { MemeWall } from './mods/components/memewall';
import { TruthFirstReports } from './mods/components/TruthFirstReport';
import { EnergyLaunchShield } from './mods/components/EnergyLaunchShield';
import { PeopleDecide } from './mods/components/PeopleDecide';
import { MemeticResistanceStore } from './mods/components/MemeticResistanceStore';
import { DonationPage } from './mods/components/DonationPage';
import { AboutTruthFirst } from './mods/components/AboutTruthFirst';

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
                                {/* <TruthFirstReports />
                                <EnergyLaunchShield /> */}
                                <PeopleDecide />
                                {/* <MemeticResistanceStore /> */}
                                {/* <DonationPage /> */}
                                {/* <AboutTruthFirst /> */}





                                {/*   <FeaturesNews />
                                <VideoNews />
                                <HighlightsNews colClass={'col-lg-12'} hideClass={'d-none'} /> */}
                            </div>
                            <HomeSidebar />
                        </div>
                    </div>
                </div>
                <SponsoredNews />
                <Subscribe />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage3;