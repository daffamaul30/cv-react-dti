import React from 'react';
import data from '../data/generalData';
import { Intro, Interest } from '../components/index';

import '../App.css';

function About() {
  return (
    <>
      <Intro items={data.intro} />
      <Interest interests={data.hobbies} />
    </>
  );
}
export default About;
