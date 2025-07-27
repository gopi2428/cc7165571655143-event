import { useState,useEffect } from "react";

function Placeorder({ onAdd ,initialData}) {
  const [form, setForm] = useState({
    name: "",
    date: "",
    location: "",
    event: "",
    requirements: "",
    phone: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.location || !form.date)
      return alert("location and date is required");
    onAdd({ ...form,id: initialData?.id || Date.now() });
    setForm({
      name: "",
      date: "",
      location: "",
      event: "",
      requirements: "",
      phone: "",
    });
  };
  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-md rounded-xl max-w-md mx-auto"
      >

        <h2 className="pl-35 pb-5 font-bold text-2xl">Place Order</h2>

        <input
          className="w-full p-2 border mb-3"
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 border mb-3"
          type="date"
          name="date"
          placeholder="Event Date"
          required
          value={form.date}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border mb-3"
          type="text"
          name="location"
          placeholder="Your Location"
          required
          value={form.location}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border mb-3"
          type="text"
          name="event"
          placeholder="Event Name"
          required
          value={form.event}
          onChange={handleChange}
        />

        <input
          className="w-full p-2 border mb-3"
          type="text"
          name="requirements"
          placeholder="Your requirement"
          required
          value={form.requirements}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border mb-3"
          type="number"
          name="phone"
          placeholder="Phone Number"
          required
          value={form.phone}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          submit
        </button>
        <p className="p-3 font-serif text-red-800">* Once you placed order our team will reach you with you Phone Number.</p>
      </form>
    </>
  );
}
export default Placeorder;