
import React, { Fragment } from 'react';
import Navbar2 from '../../../../components/Navbar2/Navbar2';
import { EnergyLaunchShield } from '../components/EnergyLaunchShield';

export const AntyEcosystem = () => {
    return (
        <Fragment>
            <div className="page-wrappers dark-mode">
                <Navbar2 hclass={'wpo-header-style-1'} topbarNone={'topbar-none'} />
                <div className="py-5 main-blog-area">
                    <div className="container">
                        <div className="row justify-content-center"> {/* <== centers the column */}
                            <div className="text-center col-lg-9">     {/* <== center text inside */}
                                <EnergyLaunchShield />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <SponsoredNews />
          <Subscribe />
          <Footer />
          <Scrollbar /> */}
            </div>
        </Fragment>
    );
};

