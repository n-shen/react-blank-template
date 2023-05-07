import React from "react";

import { useStateContext } from "../contexts/ContextProvider";
import { Footer, SearchForm, SearchResult } from "../components";

const Home = () => {
  const { screenSize } = useStateContext();

  return (
    <div className={screenSize >= 900 ? "mt-0" : "mt-16"}>
      <div className="mt-5 flex w-full justify-center">
        <SearchForm />
      </div>
      <SearchResult />
      <Footer />
    </div>
  );
};

export default Home;
