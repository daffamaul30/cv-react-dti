import React from 'react';
import data from '../data/generalData';
import { Soft, Hard } from '../components/index';

import '../App.css';

function Skills() {
  return (
    <div id="skills">
      <Hard hardSkills={data.hardSkills} />
      <Soft softSkills={data.softSkills} />
    </div>
  );
}
export default Skills;
