import Order from "../components/Orders";

function Yourorder() {
  const savedEvents = localStorage.getItem("events");

  let parsedEvents = [];
  try {
    parsedEvents = savedEvents ? JSON.parse(savedEvents) : [];
    console.log("Parsed Events:", parsedEvents);
  } catch (err) {
    console.error("Error parsing events:", err);
  }

  return (
    <div className="min-h-10 flex flex-wrap gap-4 p-4">
      {parsedEvents.length > 0 ? (
        parsedEvents.map((eventItem, index) => (
          <Order key={index} events={eventItem} />

        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
}

export default Yourorder;