import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from "./store/configStore";
import "./i18n/i18n";
ReactDOM.createRoot(document.getElementById('root')!).render(
      
      <Provider store={store}>
    <App />
    </Provider>
 
)
