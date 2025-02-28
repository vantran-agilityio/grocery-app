import { Images } from '@assets/images';
import { Slide } from '@repo/models';

export const slides: Slide[] = [
  {
    id: 1,
    title: 'Welcome to',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    image: Images.splash1,
  },
  {
    id: 2,
    title: 'Buy Quality Dairy Products',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    image: Images.splash2,
  },
  {
    id: 3,
    title: 'Buy Premium Quality Fruits',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    image: Images.splash3,
  },
  {
    id: 4,
    title: 'Get Discounts On All Products',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    image: Images.splash4,
  },
];

export const homeSlides: Slide[] = [
  {
    id: 1,
    title: '20% off on your first purchase',
    image: Images.banner1,
  },
  {
    id: 2,
    title: '20% off on your first purchase',
    image: Images.banner2,
  },
  {
    id: 3,
    title: '20% off on your first purchase',
    image: Images.banner3,
  },
  {
    id: 4,
    title: '20% off on your first purchase',
    image: Images.banner4,
  },
];
