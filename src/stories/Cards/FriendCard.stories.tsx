import React from 'react';
import { FriendCard, FriendCardProps } from '../../components/FriendCard';

export default {
  title: 'Cards/FriendCard',
  component: FriendCard,
};

const Template = (args: FriendCardProps) => <FriendCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  friend: {
    id: '1',
    username: 'JaneDoe',
    online: true,
    division: 'Gold',
    tier: 'II',
    inMatch: false,
    idle: false,
  },
  onChallenge: () => alert('Challenge!'),
  onMessage: () => alert('Message!'),
  onRemove: () => alert('Remove!'),
  unreadCount: 2,
};
