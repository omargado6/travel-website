import React from 'react';

function FlightSearch() {

    return (
        <div className="flightSearch" id="flights">
            <div className="overlay ">
                <div className="container ">
                    <div className="flyBook">
                        <div className="themainTitle">
                            <h1>welcome to <br /><span>Deripit</span><br /> company</h1>
                            <p className="">Lorem ipsum dolor sit  sed do eiusmod ut laborenostrud exercitation Lorem ipsum dolor sit  sed do eiusmod ut laborenostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            {/* <div className="row d-flex justify-content-center text-center">
                                <button className="btn btnintro">Learn more</button>
                                <button className="btn btnintro">Book now</button>
                            </div> */}
                        </div>
                    </div>
                    <form action="" className="row tour-search-form pt-3 text-center d-flex justify-content-center">
                        <label className="fs-3 fw-bold pb-3">Find your Trip</label>
                        <div className="input-wrapper col-lg-3 col-md-6 col-sm-12">
                            {/* <label for="destination" className="input-label">Search Destination*</label> */}
                            <input type="text" name="destination" id="destination" required placeholder="Enter Destination"
                                className="input-field" />
                        </div>
                        <div className="input-wrapper col-lg-3 col-md-6 col-sm-12">
                            {/* <label for="people" className="input-label">Pax Number*</label> */}
                            <input type="number" name="people" id="people" required placeholder="No.of People" className="input-field" />
                        </div>
                        <div className="input-wrapper col-lg-2 col-md-6 col-sm-12">
                            {/* <label for="checkin" className="input-label">Checkin Date**</label> */}
                            <input type="date" name="checkin" id="checkin" required className="input-field" />
                        </div>
                        <div className="input-wrapper col-lg-2 col-md-6 col-sm-12">
                            {/* <label for="checkout" className="input-label">Checkout Date*</label> */}
                            <input type="date" name="checkout" id="checkout" required className="input-field" />
                        </div>
                        <button type="submit" className="btn btnintro col-lg-2 col-md-6 col-sm-12 text-center">Inquire now</button>
                    </form>

                </div>
            </div>
        </div >
    )
}

export default FlightSearch;