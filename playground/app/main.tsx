import React from 'react';
import { createRoot } from 'react-dom/client';
import MaximallyDRYPlayground from './MaximallyDRYPlayground';
import '../../src/styles/globals.css';

const root = createRoot(document.getElementById('root')!);
root.render(<MaximallyDRYPlayground />);
