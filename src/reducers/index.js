import { configureStore } from '@reduxjs/toolkit';

import api from '../middleware/api';

import theme from './theme';

const reducer = {
  theme,
};

export default configureStore({ reducer, middleware: [api] });
