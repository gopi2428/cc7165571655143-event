import EventCard from "../components/EventCard";
function Home() {
  let images = [
    "homeimg/nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg",
    "/homeimg/chuttersnap-aEnH4hJ_Mrs-unsplash.jpg",
    "/homeimg/evangeline-shaw-nwLTVwb7DbU-unsplash.jpg",
    "/homeimg/rg-event-planners-gobi-kalyana-stores-n-kosavampatti-namakkal-stage-decorators-ojju24eosp.avif",
  ];
  let index = 0;
  const eventData = [
    {
      id: 1,
      Ename: "Birthday Party",
      img: "../istockphoto-1463458517-612x612.jpg",
      des: "At SparkTime Planners, we bring birthdays to life with vibrant themes, engaging activities, and picture-perfect decor. Whether it’s a kid’s magical adventure or an elegant adult soirée, we craft unforgettable birthday celebrations tailored to your style.",
    },
    {
      id: 2,
      Ename: "Corporate Events",
      img: "../public/il_570xN.6256036592_4sft.webp",
      des: "Let SparkTime Planners turn your special day into a stunning reality. From intimate ceremonies to grand celebrations, we design and coordinate weddings with elegance, precision, and a personal touch — so you can focus on making memories.",
    },
    {
      id: 3,
      Ename: "Weddings",
      img: "../public/istockphoto-479977238-612x612.jpg",
      des: "Spark professionalism with SparkTime Planners. From product launches and conferences to team-building retreats, we handle every corporate event with strategic planning and seamless execution — leaving a lasting impression on clients and colleagues alike.",
    },
    {
      id: 4,
      Ename: "Anniversary Celebration",
      des: "Celebrate lasting love with SparkTime Planners. We design intimate and elegant anniversary events that reflect your journey, creating a heartfelt experience for you and your guests.",
      img: "/1650363704_original.jpg",
    },
    {
      id: 5,
      Ename: "Graduation Party",
      des: "Honor academic achievements with SparkTime Planners. We create exciting and meaningful graduation parties that mark this milestone with pride, fun, and flair.",
      img: "public/81iKKNkZPSL.UF1000,1000_QL80.jpg",
    },
    {
      id: 6,
      Ename: "Retirement Party",
      des: "Give a memorable send-off with SparkTime Planners. Our retirement party services are perfect for honoring years of dedication with dignity, fun, and warmth.",
      img: "/634f7c675b1ed1317f1444f4-happy-retirement-party-decorations-giant.jpg",
    },
    {
      id: 7,
      Ename: "Festival Events",
      des: "From Holi and Diwali to Christmas and New Year’s Eve, SparkTime Planners brings communities together through vibrant, joyful, and seamlessly organized celebrations.",
      img: "/festival-event-party-blurred-people-background-lights-decor-decoration-outdoor-82758762.webp",
    },
  ];
  function refreshImage() {
    const img = document.getElementById("refresh-img");
    img.src = images[index];
    index = (index + 1) % images.length;
  }
  window.onload = function () {
    refreshImage();
    setInterval(refreshImage, 3000);
  };
  return (
    <>
      <div className="bg-black max-w-full h-150 m-0">
        <img
          id="refresh-img"
          src="homeimg/rg-event-planners-gobi-kalyana-stores-n-kosavampatti-namakkal-stage-decorators-ojju24eosp.avif"
          alt="no image found"
          style={{ height: "600px", width: "100%",opacity:"80%" }}
        />
      </div>
      <div className="flex flex-wrap gap-6 m-5 w-full  ">
        {eventData.map((e) => (
          <EventCard key={e.id} EventData={e} />
        ))}
      </div>
    </>
  );
}
export default Home;