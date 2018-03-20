import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import { IntlProvider, addLocaleData } from 'react-intl';
import intlEN from 'react-intl/locale-data/en';
import intlVI from 'react-intl/locale-data/vi';
import { store, history } from './Backend/Redux/store/configureStore'
import { BrowserRouter } from 'react-router-dom';
import Scene from 'Utils/globalRoute'
import ReduxConnectIntl from 'Assets/Lang'

addLocaleData([...intlEN, ...intlVI]);

const App = () => {
    if (module.hot) {
        module.hot.accept()
    }
    return (
        <Provider store={store}>
            <ReduxConnectIntl>
                <BrowserRouter >
                    <Scene />
                </BrowserRouter>
            </ReduxConnectIntl>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
