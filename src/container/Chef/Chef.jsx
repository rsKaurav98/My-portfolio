import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
        </div>
        <p className="p__opensans"> The chef's unwavering beliefs are the backbone of their culinary prowess. They believe in the transformative power of food, using it as a medium to tell stories, evoke emotions, and create unforgettable experiences. With a deep reverence for ingredients, a commitment to innovation, and a dedication to excellence, they craft dishes that transcend mere sustenance. Their belief in the unifying nature of food drives them to create meals that foster connection, leaving a lasting imprint on the palates and hearts of all who taste their creations. </p>
      </div>

      <div className="app__chef-sign">
        <p>Himanshu Bhadoria</p>
        <p className="p__opensans">Chef & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;