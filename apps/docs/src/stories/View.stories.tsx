import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { View } from '@pelerin-ui/view'
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/View',
  component: View,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof View> = (args) => <View {...args} />;

export const Styled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Styled.args = {
  style: { width: 20, height: 20, backgroundColor: '#FF00FF'}
 };

export const WithChildren = Template.bind({})

WithChildren.args = {
  children: 'Some text!'
}
