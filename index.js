/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import React from "react";
import {Provider} from "react-redux";
import configureStore from "./state-manager/configureStore";
import App from './App';
import {name as appName} from './app.json';


const store = configureStore();


const ReduxifiedApp = ()=>(

    <Provider store={store}>

        <App />

    </Provider>
);


AppRegistry.registerComponent(appName, () => ReduxifiedApp);
