import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from './ApiSlice';
import Navgations from './NavbarSlice'

export const store= configureStore({reducer:{GetSlice:ApiSlice,checkNav:Navgations}})