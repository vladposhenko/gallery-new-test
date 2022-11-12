import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import ImageList from "./features/ImageList";
import {fetchImages} from "./app/app-reducer";
import { useDispatch, useSelector } from "react-redux";
import ImagePage from "./features/ImagePage";

function App() {
  const dispatch = useDispatch()
  const images = useSelector(state => state.images)
  useEffect( () => {
    dispatch(fetchImages())
  }, [])
  return (
          <div className="App">
              <BrowserRouter>
                  <Routes>
                      <Route path="" element={<ImageList images={images} />} />
                      <Route path="images/:id" element={<ImagePage images={images} />} />
                  </Routes>
              </BrowserRouter>
          </div>
  );
}

export default App;
