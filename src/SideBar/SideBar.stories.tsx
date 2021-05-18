import { storiesOf } from '@storybook/react';
import React from 'react';
import { IMenuItem } from './types';
import Decorator from '../utils/Decorator';

import homeIcon from '../../stories/assets/menu-home-icon.svg';
import SideBar from './SideBar';

const menu: IMenuItem[] = [
  {
    ariaLabel: 'Menu 1',
    id: 'menu1',
    label: 'Menu 1',
    iconSrc: homeIcon,
    url: '/section1/',
  },
];

storiesOf('Components / Side Menu', module)
  .addDecorator(Decorator)
  .add('default', () => (
    <SideBar
      active="menu1"
      menuItems={menu}
      onMenuItemClick={() => undefined}
      logoSrc={{ light: homeIcon }}
    />
  ));
