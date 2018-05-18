import _ from 'lodash';
import React from 'react';
import { render } from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './common/awesome/scss/font-awesome.scss';
import './common/styles/index.scss';

const root = document.createElement('div');
document.body.appendChild(root)

render(<App />, root)
