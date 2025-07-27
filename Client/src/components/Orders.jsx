import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Order({ events }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this order?");
    if (confirmed) {
      const stored = JSON.parse(localStorage.getItem("events")) || [];
      const updated = stored.filter((e) => e.id !== events.id);
      localStorage.setItem("events", JSON.stringify(updated));
      navigate(0); // reload current page
    }
  };

  return (
    <div className="bg-black shadow-md rounded-xl p-4 text-white w-full max-w-md">
      <p><strong>Name:</strong> {events.name}</p>
      <p><strong>Date:</strong> {events.date}</p>
      <p><strong>Location:</strong> {events.location}</p>
      <p><strong>Event:</strong> {events.event}</p>
      <p><strong>Requirements:</strong> {events.requirements}</p>
      <p><strong>Phone:</strong> {events.phone}</p>

      <div className="flex justify-between mt-4">
        <Link
          to={`/Edit/${events.id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Order;