import { createAction } from "@reduxjs/toolkit";

const setNaviValue = createAction<number>("naviValue/setNaviValue");
const setPopUp = createAction<boolean>("popUp/setPopUp");
export { setNaviValue, setPopUp };
