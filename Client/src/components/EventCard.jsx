function EventCard({ EventData }) {
  return (
    <>
      <div
        className="bg-black shadow-md rounded-xl p-1 text-white max-w-md w-full h-100 mx-auto mb-6 overflow-hidden "
        style={{ position: "relative", zIndex: "1" }}
      >
        <h2
          className="text-xl font-semibold p-4"
          style={{ position: "absolute", zIndex: 3 }}
        >
          {EventData.Ename}
        </h2>

        <p
          className=" font-semibold p-4"
          style={{
            position: "absolute",
            zIndex: 4,
            bottom: "0%",
            transform: "translateY(-50%)",
          }}
        >
          {EventData.des}
        </p>

        <img
          className="p-2 h-100 w-full object-cover rounded-xl overflow-hidden opacity-40  "
          style={{
            position: "absolute",
            zIndex: 2,
            inset: "0",
            borderRadius: "1rem",
          }}
          src={EventData.img}
          alt="Event"
        />
      </div>
    </>
  );
}
export default EventCard;