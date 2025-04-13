import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 import {Provider} from "react-redux"
 import {configureStore} from '@reduxjs/toolkit'
 import rootReducer from './reducer/index.jsx'
 import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

 const store= configureStore({
  reducer:rootReducer,
});

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
    <StrictMode>

    <App />
    <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        
      />
  </StrictMode>
   </Provider>
  ,
)
