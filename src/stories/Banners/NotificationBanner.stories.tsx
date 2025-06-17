import React from 'react';
import { NotificationBanner, NotificationBannerProps } from '../../components/NotificationBanner';

export default {
  title: 'Banners/NotificationBanner',
  component: NotificationBanner,
};

const Template = (args: NotificationBannerProps) => <NotificationBanner {...args} />;

export const Burn = Template.bind({});
Burn.args = {
  type: 'burn',
  message: 'Burn notification!',
  onClose: () => alert('Closed!'),
  index: 0,
};

export const Achievement = Template.bind({});
Achievement.args = {
  type: 'achievement',
  message: 'Achievement unlocked!',
  onClose: () => alert('Closed!'),
  index: 1,
};

export const System = Template.bind({});
System.args = {
  type: 'system',
  message: 'System message!',
  onClose: () => alert('Closed!'),
  index: 2,
};

export const Taunt = Template.bind({});
Taunt.args = {
  type: 'taunt',
  message: 'Taunt message!',
  onClose: () => alert('Closed!'),
  index: 3,
};
