import {  legacy_createStore } from "redux";
import Reducer from "./Reducer";

const mystore  = legacy_createStore(Reducer);
mystore.subscribe(() => {
    console.log(mystore.getState());
  });
export default mystore;