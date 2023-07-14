import ReactDOM from 'react-dom/client';
import store from './components/app/store';
import { Provider } from 'react-redux';

import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);
