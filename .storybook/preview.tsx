import type { Preview } from '@storybook/react-vite'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../src/store'

// Redux Provider decorator to wrap all stories
const withReduxProvider = (Story: any) => (
  <Provider store={store}>
    <Story />
  </Provider>
)

const preview: Preview = {
  decorators: [withReduxProvider],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;