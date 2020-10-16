import { Home, About, Skill, EduExp } from '../pages/index';

const navRoutes = [
  {
    path: '/education&experience',
    component: EduExp,
  },
  {
    path: '/skills',
    component: Skill,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/',
    component: Home,
  },
];
export default navRoutes;
