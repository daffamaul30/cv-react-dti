import React from 'react';
import data from '../data/generalData';
import { Education, Experience } from '../components/index';

import '../App.css';

function EduExp() {
  return (
    <div id="edu-exp">
      <Education edu={data.educations} />
      <Experience />
    </div>
  );
}
export default EduExp;