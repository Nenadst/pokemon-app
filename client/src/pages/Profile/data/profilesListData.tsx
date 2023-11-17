import kal from 'src/assets/images/kal-visuals-square.jpg';
import marie from 'src/assets/images/marie.jpg';
import ivana from 'src/assets/images/ivana-square.jpg';
import team3 from 'src/assets/images/team-3.jpg';
import team4 from 'src/assets/images/team-4.jpg';

export default [
  {
    image: kal,
    name: 'Sophie B.',
    description: 'Hi! I need more information..',
    action: {
      type: 'internal',
      route: '/pages/profile/profile-overview',
      color: 'info',
      label: 'reply'
    }
  },
  {
    image: marie,
    name: 'Anne Marie',
    description: 'Awesome work, can you..',
    action: {
      type: 'internal',
      route: '/pages/profile/profile-overview',
      color: 'info',
      label: 'reply'
    }
  },
  {
    image: ivana,
    name: 'Ivanna',
    description: 'About files I can..',
    action: {
      type: 'internal',
      route: '/pages/profile/profile-overview',
      color: 'info',
      label: 'reply'
    }
  },
  {
    image: team4,
    name: 'Peterson',
    description: 'Have a great afternoon..',
    action: {
      type: 'internal',
      route: '/pages/profile/profile-overview',
      color: 'info',
      label: 'reply'
    }
  },
  {
    image: team3,
    name: 'Nick Daniel',
    description: 'Hi! I need more information..',
    action: {
      type: 'internal',
      route: '/pages/profile/profile-overview',
      color: 'info',
      label: 'reply'
    }
  }
];
