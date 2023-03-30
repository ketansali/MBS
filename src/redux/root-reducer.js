import { combineReducers } from 'redux';
import App from '@iso/redux/app/reducer';
import Auth from '@iso/redux/auth/reducer';
import Box from '@iso/redux/box/reducer';
import DynamicChartComponent from '@iso/redux/dynamicEchart/reducer';
import ThemeSwitcher from '@iso/redux/themeSwitcher/reducer';
import LanguageSwitcher from '@iso/redux/languageSwitcher/reducer';
import drawer from '@iso/redux/drawer/reducer';

export default combineReducers({
  Auth,
  App,
  ThemeSwitcher,
  LanguageSwitcher,
  Box,
  DynamicChartComponent,
  drawer,
});
