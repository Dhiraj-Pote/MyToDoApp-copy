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
    "https://lh3.googleusercontent.com/pw/AIL4fc_GS3i3kaY0weiXyjleZXGZjDZ8vA9VaYUWHjwrhrlulaU5ZjdfZ7cfkaTmkA0zS_9t2H2mAXD_0oKnu5M64-WmH-2JzgDoQ7oboVbBRykXQQNclxTjioQdVGaxU7LPWzKACSoL3kr7Qs01nLjaF0Qr=w693-h924-s-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AIL4fc8sPuA-nD0G7zos5r-rG6axVxKqDjvUfE6xzNigja6lrbbON6UWjyf3p-8Bm_pwYl2yEy8M8d9A6SMMxixv3tKvTna4IJ4AFj-FhqrIWHDiJJgyruH--Dm7V9DjO6sXSaFg2j1ztD1yJH9KYib-I1OBLH8z-rjQVC7gFDoY1CCq3J29WEAlVlY8WqUWLiOcaROoU7l-gXX5IGXYK5W8T3qcD9v3qzcYtSECgbUckFP-M47qeAoW2hC3smpNm6sooCkeZKK1U8txhUwWCJKU71yi9QdYzomdvi3MdohO-eL1BXAw6NyUdfTyyis9S02J56rvHy6q5cYHmubKILdUQYUrKvNn1gc39wQ_cmizDPtkfIV8F0bcrJsppN6_z-IFmOWmEX09AcPC3R-17okHcHxZvoXKg4VSOKaAYjT8e2IOHRltXPiUKU0bmqlI1vnR5uYTuMeKud-zFH3iBSP_21bBl4iTxbAe8L9Galg7gXBZgUooz9KjI2A-LiEmhQOaawj6VNwStFSiKF7Ty4cbFlbC2_AST10abrt0BD41g6AzPmdiD79Xhd86ZBRNPoIOLLipVbJITTUfWJpNaImxfITwUXVHVaxt-X_eBiSZ9px5oQLnfqtPfWBN2e6rXEbkGiY-IYU7X3TnokNFtP_t_aGCu_lDTeT7UL-I-F2OccXadJyLnoitJtbOJ7o2l0K0dWs4kMjM-OSHt-D0ZS3NldHi5jAXlbRoBWWKEZ_Ko3jwLZ9LSdnp4n3OPSOzS_3iYgG3Vc7HJdmiLtsMP4fEkDhKBLX5Jin6OR-kJ2utcAKbsij4kt8C0PWM264wKOqd5O7-yuLbUDxQGEMMDtmq3NetZ-KW4ZlsFal4eoZuh8ftw537ShmFXn5kpR0BA4lZjsyzWdNgzeae70POcc4m2JzZEltPdZJaCAcsOar9jR5fGFoPe5_JX25XiBDxtJVOzy4GeadzteacQEYLfgYy4iLE6l2pktwc-25CI7w6T5xgR0fPZXGGx81IMkhqjLaOkQpCX0ESzeKLNhWEaIQMxuo0ZFOTiwckQBNhtuI=w229-h938-s-no?authuser=1",
    "https://lh3.googleusercontent.com/pw/AIL4fc8U83AfFUGrc2e439T42RR80qRHMBIKlS09LAV2TkjKSwNzLXS3mrdClgo5XAzyVhnjZPrkeA25gLgPrho4Nl69VfEkT5Slq6NdCyrwYVqS1KzE2rJCCsQYyuXNt6idWOPm7GCsIor0yXY6KdGHsXA1ARQDs3rZgF9OBJKZ2Fc_E5ekkGRKfJ7TeTfU-eVKvgDIR1mFPD9sZ0tV2BcVCMSWkc8HJSa0BlcZ57ri0IdI1m4qqsKkmzkH1taXI8OnO6LhdSaD3nD3WrODg4ErVVZwsspmy0RZxsddzd-A92cemkqctyxvGNTSEC9wrrkY6PyIq2U6ejTwCV8aNiXrNk9PiAvUNItduVl9G3ADWtb-kUTqOXNGOw45OjfM5cqYj62N1EvX03xqIKvcF02NeTUatyPpsWgK_rDK2gfEM4B2jm47NrzT8KYSnjzEHpB4aurT7mFzeozLN3hCIvvpOdsn3x5O0HTVCix1ZvpjnnDqpHKA9IWLU6MndxAY8Tl7dvdPdNEFNsEbm8LdwjbUWXY1A6nZhZCi2Jr06zwKeIEWiQvX7ufk-ZMb59t4vpEgmH7-9SzRReBIGFmFdlRjP7pK5PigWe8ogNpu-y2M-sqwlzTGByX6FNcDHcqzDxLbb4rRkS6AYN0W0Moo5yeMiTUwIxHcqAg6fen5iujaBiimsLM-1DX7jnTFHRQnyX5UGH9QwAeM_EZZ5Xmp00YZ__sZidNpNG3FOn3b1B9L3btETD79hqdSLpm_I5yX03apoxJxQUF511p2lxXTdNe72tTf339MT9F9yDe00u-MPpVfAeSUraRUAcuJTwrcC5ffZ911Lpm3cWaN72v1XkLRtSG1_HVsBej9MKMurBD-Up-PifQANZdY_WIObKS-C8ipHqPXVpJ22pVpMe9tG7tsEa2ebcup2layzlThEk8IEAjpN5S7-eg28L0pLQxrEOkkzvN2gvKMSiv7Dn6eeZ-FGfLawbAD3DZg_niyXyblou_OaFTyt0d2gNHqCHaQ_7RD96kn_KvG8X4Y3BtZilZXZ22Y062fy2Wihaa2jhA=w640-h853-s-no?authuser=1",
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
      <div style={{ marginTop: "10px" }}>
        <BackgroundSlideshow images={images} />
      </div>
    </div>
  );
}

export default App;
