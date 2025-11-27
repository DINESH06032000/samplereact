import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Control from './Control'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Fetchdata from './Fetchdata';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Control />
    {/* <Fetchdata/> */}
  </StrictMode>
)
