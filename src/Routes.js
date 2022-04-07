import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DetailPage from "./pages/Detail";
import HomePage from "./pages/index";
import FavoritePage from "./pages/FavoriteBook"
import { Provider } from 'react-redux'
import store from './redux'


const MainRoutes = () => {
	return (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route exact path="/favorite" element={<FavoritePage/>} />
                <Route exact path="/favorite/:id" element={<DetailPage/>} />
                <Route exact path="/:id" element={<DetailPage/>} />
                <Route exact path="/*" element={<HomePage/>} />
            </Routes>
        </BrowserRouter>
    </Provider>
	);
};

export default MainRoutes;
