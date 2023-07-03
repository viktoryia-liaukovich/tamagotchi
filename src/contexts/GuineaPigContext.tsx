import { createContext } from 'react';
import { GuineaPig } from '../models/GuineaPig';
import { Sex } from '../types';

export const GuineaPigContext = createContext<GuineaPig | null>(new GuineaPig({ sex: Sex.male }));
