import React from "react";
import { BrowserRouter as Router, Route, Routes,useHistory, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import routesConfig from './routesConfig'; // Mengimpor konfigurasi rute
import './style.css';

const Navbar = () => {
  return (
    <div className="flex w-full mb-3">
        <div className="w-6/12 mr-3 relative font-bold flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg p-4"><Link to="/">Register</Link></div>
        <div className="w-6/12 relative font-bold flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg p-4"><Link to="/list">List User</Link></div>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="relative bg-blueGray-100">
          <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12"></div>
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            
        <Navbar/>
        <Routes>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
        </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
