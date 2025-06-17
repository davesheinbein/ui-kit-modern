import React from 'react';
import { Graphs, GraphsProps } from '../../components/Graphs';

export default {
	title: 'Graphs/Graph',
	component: Graphs,
};

const Template = (args: GraphsProps) => <Graphs {...args} />;

export const Bar = Template.bind({});
Bar.args = {
  data: [
    { match: 'A', score: 10 },
    { match: 'B', score: 20 },
    { match: 'C', score: 15 },
  ],
  shape: 'bar',
  dataKey: 'score',
  labelKey: 'match',
  title: 'Bar Chart',
};

export const Pie = Template.bind({});
Pie.args = {
  data: [
    { match: 'A', score: 10 },
    { match: 'B', score: 20 },
    { match: 'C', score: 15 },
  ],
  shape: 'pie',
  dataKey: 'score',
  labelKey: 'match',
  title: 'Pie Chart',
};
