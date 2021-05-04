import React from 'react';
import ReactDom from 'react-dom';
import CardDetailMovie from './CardDetailMovie';

it("renders without crashing", () => {
    const div = document.createElement("div");
    const item = {
        Poster: "",
        Title: "",
        Year: "",
        Type: "",
        imdbID: "",
    }
    ReactDom.render(<CardDetailMovie item={item} />, div);
})