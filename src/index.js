import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./NetworkSettings/store";
import App from "./App";
// import {serviceWorker} from  "./serviceWorker"

const rootEl = document.getElementById("root");


ReactDOM.render(
    <Provider store={store}>
<App/>
    </Provider>,
    rootEl
)


// serviceWorker.unregister();
