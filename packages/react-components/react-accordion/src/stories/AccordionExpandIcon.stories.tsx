import * as React from 'react';
import { RocketRegular } from '@fluentui/react-icons';

import { AccordionItem, AccordionHeader, AccordionPanel, Accordion } from '../index';

export const ExpandIcon = () => (
  <Accordion>
    <AccordionItem value="1">
      <AccordionHeader expandIcon={<RocketRegular />}>Accordion Header 1</AccordionHeader>
      <AccordionPanel>
        <div>Accordion Panel 1</div>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="2">
      <AccordionHeader expandIcon={<RocketRegular />}>Accordion Header 2</AccordionHeader>
      <AccordionPanel>
        <div>Accordion Panel 2</div>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="3">
      <AccordionHeader expandIcon={<RocketRegular />}>Accordion Header 3</AccordionHeader>
      <AccordionPanel>
        <div>Accordion Panel 3</div>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

ExpandIcon.parameters = {
  docs: {
    description: {
      story: 'An accordion item can have a custom expand icon.',
    },
  },
};
