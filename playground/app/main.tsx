import React from 'react';
import { createRoot } from 'react-dom/client';
import ButtonDemo from './components/button/page';
import '../../src/styles/globals.css';

const root = createRoot(document.getElementById('root')!);
root.render(<ButtonDemo />);
