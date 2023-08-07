import { useContext } from "react";
import { Route } from "wouter";
import AddTodo from "./components/Todos/AddTodo";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";
import Todos from "./components/Todos/Todos";
import { MainContext } from "./context/MainContext";
import About from "./pages/About";
import Settings from "./pages/Settings";
import React from 'react';
import BackgroundSlideshow from "./components/BackgroundSlideshow";

function App() {
  const { addTodo } = useContext(MainContext)!;

  const images = [
    "https://live.staticflickr.com/65535/53098885489_bd1c7fbdd7_n.jpg",
    "https://live.staticflickr.com/65535/53098885669_426b857606_n.jpg",
    "https://live.staticflickr.com/65535/53099107880_6d2aa82b3a_n.jpg",
    "https://live.staticflickr.com/65535/53098885479_c52d4a29c1_w.jpg",
    "https://live.staticflickr.com/65535/53099202863_f414aa99f2_w.jpg",
    "https://live.staticflickr.com/65535/53098885694_7ef3dde028_n.jpg",
    "https://live.staticflickr.com/65535/53099203018_348227aac3_w.jpg",
    "https://live.staticflickr.com/65535/53099203003_b41df8db74_w.jpg",
    "https://live.staticflickr.com/65535/53098706701_10649a54b6_w.jpg",
    "https://live.staticflickr.com/65535/53098141447_4a64a91815_w.jpg",
    "https://live.staticflickr.com/65535/53098130212_e564c775f6_m.jpg",
    "https://live.staticflickr.com/65535/53099197098_886d750c51_m.jpg",
    "https://live.staticflickr.com/65535/53099203043_3de5d25086_w.jpg",
    "https://live.staticflickr.com/65535/53098885494_a521b73887_n.jpg",
    "https://live.staticflickr.com/65535/53098885514_aa5aaca046_n.jpg",
    "https://live.staticflickr.com/65535/53099203138_1f89c3378b_w.jpg",
    "https://live.staticflickr.com/65535/53098706461_73746f79ac_z.jpg",
    "https://live.staticflickr.com/65535/53099203048_ff208ec54c_n.jpg",
    "https://live.staticflickr.com/65535/53098141452_5a6c5be8a7_w.jpg"
  ];

  return (
    <div >
      <PersistentDrawerLeft />
      <Route path="/">
        <AddTodo addTodo={addTodo} />
        <Todos />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <BackgroundSlideshow images={images} />
    </div>
  );
}

export default App;
