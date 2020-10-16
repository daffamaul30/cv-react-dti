import Profil from '../assets/images/profil.jpg';
import FB from '../assets/images/facebook.png';
import IG from '../assets/images/instagram.png';
import LI from '../assets/images/linkedin.png';
import WA from '../assets/images/whatsapp.png';
import GH from '../assets/images/github.png';

import Phone from '../assets/images/phone.png';
import Mail from '../assets/images/mail.png';

import Basket from '../assets/images/basket.png';
import Code from '../assets/images/code.png';
import Games from '../assets/images/games.png';
import Cars from '../assets/images/cars.png';
import Movie from '../assets/images/movie.png';

const datas = {
  profiles: [
    {
      link: '/',
      image: Profil,
      alt: 'profile pict',
    },
    {
      link: 'https://www.facebook.com/daffamaulana03',
      image: FB,
      alt: 'Facebook',
    },
    {
      link: 'https://instagram.com/daffmln_',
      image: IG,
      alt: 'Instagram',
    },
    {
      link: 'https://www.linkedin.com/in/daffa-maulana-599b65129',
      image: LI,
      alt: 'LinkedIn',
    },
    {
      link: 'https://api.whatsapp.com/send?phone=6281313067790',
      image: WA,
      alt: 'Whatsapp',
    },
    {
      link: 'https://github.com/daffamaul30',
      image: GH,
      alt: 'Github',
    },
  ],
  intro: {
    desc:
      "Hi, I'm Daffa. I'm passionate about front-end development. I can do some front-end development for you. In addition, I can work as a team, I have good communication, I can manage my time, I'm a creative man, and I'm good in leadership",
    contacts: [
      {
        logo: Phone,
        value: '+62 878 4215 0371',
      },
      {
        logo: Phone,
        value: '+62 813 1306 7790',
      },
      {
        logo: Mail,
        value: 'daffamaulana30@gmail.com',
      },
    ],
    info: [
      {
        title: 'fullName',
        value: 'Daffa Maulana Hibban',
      },
      {
        title: 'Address',
        value: 'Nurul Haq Street No.10 Makassar, South Sulawesi',
      },
      {
        title: 'Place & Date of Birth',
        value: 'Madiun, 03 October 2000',
      },
      {
        title: 'Gender',
        value: 'Male',
      },
      {
        title: 'Language',
        value: ['Indonesian, ', 'English'],
      },
    ],
  },
  hardSkills: [
    {
      name: 'Html-CSS',
      id: 'html',
      percentage: '90%',
    },
    {
      name: 'Javascript',
      id: 'js',
      percentage: '85%',
    },
    {
      name: 'React JS',
      id: 'react',
      percentage: '50%',
    },
    {
      name: 'Java',
      id: 'java',
      percentage: '80%',
    },
    {
      name: 'Kotlin',
      id: 'kotlin',
      percentage: '80%',
    },
  ],
  softSkills: [
    'Communication',
    'Time Management',
    'Leadership',
    'Team Work',
    'Problem-Solving',
    'Creative',
  ],
  educations: [
    {
      year: '2017-Now',
      school: 'S1 Informatics at Telkom University',
    },
    {
      year: '2014-2017',
      school: 'Insan Cendekia Senior High School Sukoharjo',
    },
  ],
  hobbies: [
    {
      image: Basket,
      alt: 'Basket',
    },
    {
      image: Code,
      alt: 'Codes',
    },
    {
      image: Games,
      alt: 'Games',
    },
    {
      image: Cars,
      alt: 'Cars',
    },
    {
      image: Movie,
      alt: 'Movies',
    },
  ],
};

export default datas