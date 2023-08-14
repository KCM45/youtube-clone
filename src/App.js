import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  ChannelDetail,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetail,
} from "./components";

const App = () => {
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" elemenmt={<VideoDetail />} />
        <Route path="/channel/:id" elemenmt={<ChannelDetail />} />
        <Route path="/search/searchTerm" elemenmt={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>;
};

export default App;
