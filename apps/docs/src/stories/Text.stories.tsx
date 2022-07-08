import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from '@pelerin-ui/text'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const StyledText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StyledText.args = {
  style: { backgroundColor: '#FF00FF', fontStyle: 'italic'},
  children: 'Some text!'
 };

export const PlainText = Template.bind({})

PlainText.args = {
  children: 'Some text!'
}
