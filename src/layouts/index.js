import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import Card from '../components/card';
import EventCard from '../components/EventCard';



const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div>
      {children()}
    </div>
    <div>
      <Header />
      <div className="Hero">
          <div className="HeroGroup">
            <h1>Join a community of designers all over the world</h1>
            <p>Whether it’s in one of our vibrant online communities or at a Sketch meetup in your area, you can join a global network of designers to share knowledge, ask questions and make new friends. Attend a local meetup to improve your skills, discover the latest plugins, or just get inspired and meet designers like you.</p>
            <a href="https://www.youtube.com/watch?v=4FnN4vseiXQ">Find events near you</a>
          </div>
      </div>
    </div>
    <div className="Cards">
      <h2>Groups near you</h2>
      <div className="CardGroup">
      <Card 
          title="Design and Prototype NYC Meetup"
          location="New York, NY"
          image={require('../images/wallpaper.jpg')}
        />
        <Card 
          title="Philadelphia Sketch Meetup"
          location="Philadelphia, PA"
          image={require('../images/wallpaper.jpg')}
        />
        <Card 
          title="Product Design and Animation"
          location="Paris, France"
          image={require('../images/wallpaper.jpg')}
        />
        <Card 
          title="Product Design and Animation"
          location="Paris, France"
          image={require('../images/wallpaper.jpg')}
        />
      </div>
    </div>
    <div className="EventCards">
      <h2>Events</h2>
      <div className="EventCardsGroup">
        <EventCard   
          title="June Magento Phoenix Area Meetup"
          date="Sat, June 23, 8:30pm • Phoenix Area - Magento Meetup"
          image={require('../images/event-photo2.jpg')}
        />
        <EventCard   
          title="June Magento Phoenix Area Meetup"
          date="Sat, June 23, 8:30pm • Phoenix Area - Magento Meetup"
          image={require('../images/event-photo1.jpg')}
        />
      </div>
    </div>
  </div>
)


Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
