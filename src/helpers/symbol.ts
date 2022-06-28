import Color from '@arcgis/core/color';
import Constants from './constants';
import { Symbols } from './interfaces';
import colors from '../theme/colors';

export const noFlyZoneSymbol: Symbols = {
  color: new Color(colors.blue204),
  type: Constants.SIMPLE_FILL,
  style: 'solid',
  outline: {
    color: colors.white,
    width: 2,
  },
};

export const intersectionZoneSymbol: Symbols = {
  color: new Color(colors.red255),
  type: Constants.SIMPLE_FILL,
  style: 'solid',
  outline: {
    color: colors.black,
    width: 2,
  },
};
