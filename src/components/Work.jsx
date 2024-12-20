import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/ecom.jpg",
    title: "Ecommerce app",
    tags: [
      "E-COMMERCE",
    
      "AI CHATBOT",
"OAUTH",
      "GOOGLE","GITHUB",
      "SRIPE",
      "RAZORPAY",
      "ADMIN",
  
      "CRUD",
      "REDUX",
      "MERN"
    ],
    projectLink:
      "https://ecommerce-frontend-balaji.netlify.app",
    sourceLink:
      "https://github.com/balaji-fullstackdeveloper/Ecommerce-BackEnd",
    demoLink:
      "https://github.com/balaji-fullstackdeveloper/Demo-Credentials/blob/main/ecommerce.txt",
  },
  {
    imgSrc: "/images/food.jpg",
    title: "Food Delivery app",
    tags: [
      "API",
      "CRUD",
      "SRIPE",
      "EXPRESS",
      "ADMIN",
      "NODE",
      "MONGO-DB",
      "REACT",
    ],
    projectLink: "https://cerulean-squirrel-ea5cb5.netlify.app/",
    sourceLink: "https://github.com/balaji-fullstackdeveloper/FOOD-DELIVERY",
    demoLink:
      "https://github.com/balaji-fullstackdeveloper/Demo-Credentials/blob/main/food.txt",
  },
  {
    imgSrc: "/images/dashboard.jpg",
    title: "Admin Dashboard",
    tags: ["API", "CRUD", "NODE", "EXPRESS", "REDUX", "REACT", "MONGO-DB"],
    projectLink: "https://admin-dashboard-frontend-3ugd.onrender.com/",
    sourceLink: "https://github.com/balaji-fullstackdeveloper/Admin-Dashboard",
    demoLink: "https://github.com/balaji-fullstackdeveloper/Demo-Credentials/blob/main/admin-dashboard.txt",
  },
  {
    imgSrc: "/images/booking.jpg",
    title: "Booking App",
    tags: [
      "Web-design",
      "API",
      "CRUD",
      "NODE",
      "EXPRESS",
      "REDUX",
      "REACT",
      "MONGO-DB",
      "SRIPE",
    ],
    projectLink: "https://main--balaji-holidays.netlify.app",
    sourceLink: "https://hotel-booking-app-2zqy.onrender.com",
    demoLink:
      "https://github.com/balaji-fullstackdeveloper/Demo-Credentials/blob/main/booking-app.txt",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(
            (
              { imgSrc, title, tags, projectLink, sourceLink, demoLink },
              key
            ) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                sourceLink={sourceLink}
                demoLink={demoLink}
                classes="reveal-up"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
