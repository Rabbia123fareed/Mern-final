import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import GlobalContextProvider from './Context/context.jsx';
// import CartContextProvider from './context/addtoCart/usercontext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <CartContextProvider> */}
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
    {/* </CartContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
)
