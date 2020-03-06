import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';
import Autocomplete from './frontend/autocomplete';

const Root = () => (
  <div>
    <Clock />
    <Tabs
      information={[
        { title: 'one', content: 'this is first' },
        { title: 'two', content: 'second' },
        { title: 'three', content: 'third tab' }
      ]}
    />
    <Weather />
    <Autocomplete
      fruits={[
        'apple',
        'blackberry',
        'blueberry',
        'cherry',
        'dragonfruit',
        'guava',
        'lychee',
        'mango',
        'orange',
        'peach',
        'plum',
        'raspberry',
        'strawberry',
        'tangerine'
      ]}
    />
  </div>
);

export default Root;
