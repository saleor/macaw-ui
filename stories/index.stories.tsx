import Decorator from './Decorator';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from '@material-ui/core/Button';

storiesOf('Home', module)
  .addDecorator(Decorator)
  .add('default', () => (
    <div>
      Macaw UI
      <Button color="primary" variant="contained">
        Go to components
      </Button>
    </div>
  ));
