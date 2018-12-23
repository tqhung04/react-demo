import React from 'react';
import { storiesOf } from '@storybook/react';
import Cart from '../src/components/cart';

storiesOf('Cart', module)
  .add('cart item', () => (
    <Cart></Cart>
  ))