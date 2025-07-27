import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Placeorder from "./pages/PlaceOrder";
import Yourorder from "./pages/YourOrder";
import EditOrder from "./components/EditOrders";
function App() {
  return (
    <>
    <div className="min-h-screen flex flex-col bg-amber-200 m-0  ">
      <Router>
        <nav className="w-full bg-white shadow flex ">
          <div className="flex justify-between items-center w-full">
          <div className="max-w-5xl m-0  flex justify-between items-center px-6 py-4 pl-2 ml-20 gap-2">
            <img src="\public\icons8-spark-25.png" alt="" />
            <h1 className="font-body text-2xl m-0 font-bold text-gray-800">
              GK Event Management
            </h1>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poppins&display=swap" rel="stylesheet"></link>
            </div>
            <p  className=" hidden lg:block" style={{fontFamily:"Great Vibes"}}>Crafting Moments, Creating Memories</p>


          <div className="space-x-6 p-5 items-baseline-last flex flex-wrap">
            <Link
              to="/"
              className="font-serif rounded-sm p-1 text-white bg-blue-500 hover:bg-blue-900"
            >
              Home
            </Link>{" "}
            <Link
              className="font-serif rounded-sm p-1 text-white bg-blue-500 hover:bg-blue-900"
              to="/Placeorder"
            >
              Place Order
            </Link>
            <Link
              to="/Yourorder"
              className="font-serif rounded-sm p-1 text-white bg-blue-500 hover:bg-blue-900"
            >
              Your Order
            </Link>
          </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Placeorder" element={<Placeorder />} />
          <Route path="/Yourorder" element={<Yourorder />} />
          <Route path="/Edit/:id" element={<EditOrder/>}/>
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;