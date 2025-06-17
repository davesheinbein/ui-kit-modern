import React from 'react';
import { VSRoomModal, VSRoomModalProps } from '../../components/VSRoomModal/VSRoomModal';

export default {
	title: 'Modals/VSRoomModal',
	component: VSRoomModal,
};

const Template = (args: VSRoomModalProps) => <VSRoomModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
  onClose: () => {},
  onCreateRoom: () => {},
  onJoinRoom: () => {},
  isJoining: false,
};
