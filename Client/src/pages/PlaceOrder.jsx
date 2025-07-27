import { useNavigate } from "react-router-dom";
import Placeorder from "../components/OrderForm";
function PlaceOrder() {
  const navigate = useNavigate();
  const handleAdd = (e) => {
    const storedData = localStorage.getItem("events");
    const existing = storedData ? JSON.parse(storedData) : [];
    alert("Order Placed Successfully");

    const update = [...existing, e];
    localStorage.setItem("events", JSON.stringify(update));
    navigate("/");
  };
  return (
    <div className="mt-50">
      <Placeorder onAdd={handleAdd} />
    </div>
  );
}
export default PlaceOrder;