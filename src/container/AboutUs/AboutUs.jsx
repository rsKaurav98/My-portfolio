import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"> From humble beginnings to culinary mastery, we have embraced the ever-changing culinary landscape, introducing novel flavors and techniques that have delighted our patrons throughout the years. Join us as we honor our rich history and toast to the future, where passion and creativity merge to create unforgettable dining experiences.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"> Celebrating 30 Years of Culinary Evolution: Embark on a gastronomic journey at Quality Restaurant, where innovation meets tradition. With three decades of excellence, our establishment has continuously pushed boundaries, refining and upgrading our cuisines to captivate discerning palates.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;