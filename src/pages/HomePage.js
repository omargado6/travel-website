import React from 'react'
import FlightSearch from '../components/FlightSearch'
import PopularDestination from '../components/PopularDestination'
import WhyUs from '../components/WhyUs'
import Stats from '../components/Stats'
import Hotels from '../components/Hotels'

function HomePage() {
  return (
    <div className="HomePage" id="home">
      <FlightSearch />
      <Hotels />
      <PopularDestination />
      <WhyUs />
      <Stats />
    </div>
  )
}

export default HomePage