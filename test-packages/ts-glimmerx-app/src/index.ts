import { renderComponent } from '@glimmerx/core';
import App from './App';

const containerElement = document.getElementById('app') || document.body;

renderComponent(App, containerElement);
