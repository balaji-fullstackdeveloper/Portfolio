import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/html.png",
    label: "HTML5",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/redux.png",
    label: "Redux",
    desc: "State Management",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/bootstrap.png",
    label: "Bootstrap",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/mongodb.png",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/mysql.png",
    label: "MySQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/aws.png",
    label: "AWS",
    desc: "Delopment Server",
  }

];

const Skill = () => {
  return (
    <section id="skill" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
