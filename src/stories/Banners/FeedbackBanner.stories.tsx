import React from 'react';
import { FeedbackBanner, FeedbackBannerProps } from '../../components/FeedbackBanner';

export default {
  title: 'Banners/FeedbackBanner',
  component: FeedbackBanner,
};

const Template = (args: FeedbackBannerProps) => <FeedbackBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'This is a feedback message!',
};
