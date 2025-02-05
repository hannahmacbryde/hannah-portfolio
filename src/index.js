import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'

import "@fontsource/outfit";
import "@fontsource/roboto";
import "@fontsource/barlow";
import '@fontsource/berkshire-swash';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);