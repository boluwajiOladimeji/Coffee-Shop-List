import CoffeeList from "./components/CoffeeList";
import HeaderText from "./components/HeaderText";

function App() {
  return (
    <div className="container min-h-screen py-24 ">
      <div className="mx-auto w-11/12 max-w-7xl rounded-md bg-[#1B1D1F] px-8 py-12">
        <HeaderText />
        <CoffeeList />
      </div>
    </div>
  );
}

export default App;
