import { createMedia } from '@artsy/fresnel';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/desktop/Home';

const {MediaContextProvider, Media} = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  }
})

function App() {
  return (
   <MediaContextProvider>
    <Media at='mobile'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home  mobile />} />
        </Routes>
      </BrowserRouter>
    </Media>

    <Media greaterThan='mobile'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Media>
   </MediaContextProvider>
  );
}

export default App;
