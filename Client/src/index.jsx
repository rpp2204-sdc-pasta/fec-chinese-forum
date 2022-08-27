import React from 'react';
import App from './components/App.jsx';
import { createRoot } from 'react-dom/client';


const rootElement = document.createElement("div");
rootElement.setAttribute("id","root");
document.body.appendChild(rootElement);
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App tab="home" />);