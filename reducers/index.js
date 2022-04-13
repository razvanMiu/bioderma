import { configureStore } from '@reduxjs/toolkit';

import api from '../middleware/api';

import registry from './registry';

const reducer = {
  registry,
};

export default configureStore({ reducer, middleware: [api] });
