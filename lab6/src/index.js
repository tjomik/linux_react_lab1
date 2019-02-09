import React from 'react';
import ReactDOM from 'react-dom';
import img_1 from './images/il_570xN.1120523464_ngse.jpg'
import {AppContainer} from "react-hot-loader";
import App from "./components/App/App";


ReactDOM.render(
    <AppContainer>
    <App />
    </AppContainer>,
document.getElementById('root')
);
if (module.hot){
    module.hot.accept();
}
