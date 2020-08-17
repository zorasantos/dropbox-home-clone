import React from 'react';
import Section from './index';
import SideMenu from '../SideMenu'
import MenuForm from '../MenuForm';

import data from '../../data';

function SectionIndex() {
  return (
    <>
      <Section
        variant="blue"
        title={data[0].title}
        description={data[0].description}
      />
      <Section
        variant="beige"
        title={data[1].title}
        description={data[0].description}
      />
      <Section
        variant="blue"
        title={data[2].title}
        description={data[0].description}
      />
      <Section
        variant="white"
        title={data[3].title}
        description={data[0].description}
      />
      <Section
        variant="black"
        title={data[4].title}
        description={data[0].description}
      />

      <SideMenu>
        <MenuForm />
      </SideMenu>
    </>
  );
}

export default SectionIndex;