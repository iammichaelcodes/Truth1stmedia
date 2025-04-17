
import React, { Fragment } from 'react';
import Navbar2 from '../../../../components/Navbar2/Navbar2';
import { DonationPage } from '../components/DonationPage';
import { PeopleDecide } from '../components/PeopleDecide';
import Footer from '../../../../components/footer/Footer';

export const DaoPage = () => {
    return (
        <Fragment>
            <div className="page-wrappers dark-mode">
                <Navbar2 hclass={'wpo-header-style-1'} topbarNone={'topbar-none'} />
                <div className="py-5 main-blog-area">
                    <div className="container">
                        <div className="row justify-content-center"> {/* <== centers the column */}
                            <div className="text-center col-lg-9">     {/* <== center text inside */}
                                <PeopleDecide />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <SponsoredNews />
          <Subscribe />
          <Scrollbar /> */}
          <Footer />
            </div>
        </Fragment>
    );
};

