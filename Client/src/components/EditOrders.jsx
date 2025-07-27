import Placeorder from "./OrderForm";
import { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
function EditOrder(){
    const {id}=useParams();
    console.log(id)
    const navigate=useNavigate();
    const [order,setOrder]=useState(null);
    useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("events")) || [];
    const found = stored.find((o) => o.id === parseInt(id));
    if (!found) return navigate("/");
    setOrder(found);
  }, [id, navigate]);
    const handleUpdate=(updatedOrder)=>{
        const stored=JSON.parse(localStorage.getItem("events"))||[];
        const updatedList=stored.map((o)=>o.id==parseInt(id) ? updatedOrder:o);
        localStorage.setItem("events",JSON.stringify(updatedList));
        navigate("/")
    }
    return(
        <>
        <div>
            {order && <Placeorder onAdd={handleUpdate} initialData={order}/>}
        </div>
        </>  
    );
}
export default EditOrder;