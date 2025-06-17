import React from 'react';
import { VSModeModal, VSModeModalProps } from '../../components/VSModeModal/VSModeModal';

export default {
  title: 'Modals/VSModeModal',
  component: VSModeModal,
};

const Template = (args: VSModeModalProps) => <VSModeModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
  onClose: () => {},
  onSelect: () => {},
  isSearching: false,
};
