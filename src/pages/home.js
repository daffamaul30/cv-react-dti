import React from 'react';
import data from '../data/generalData';
import { Banner } from '../components/index';

import '../App.css';

function Home() {
  return (
    <Banner items={data.profiles} />
  );
}
export default Home;
