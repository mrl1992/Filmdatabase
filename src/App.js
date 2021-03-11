import { useState } from "react";
import Movies from "./components/Movies";
import Search from "./components/Search";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <h1>hey</h1>
      <Search search={search} setSearch={setSearch} />
    </>
  );
};

export default App;
