import Card from "./Card";

export default function Projects() {
  const projectData = [
    {
      id: 6,
      title: "Weather Forecast App",
      imgUrl: "/images/weather-forecast-app.png",
      tags: ["React", "Tailwind", "TypeScript", "REST"],
      live: "https://weather-app-fm30.netlify.app/",
      gitHub: "https://github.com/joyce-ship-it/adv-weather-app",
    },
    {
      id: 5,
      title: "Rest API country",
      imgUrl: "/images/rest-countries.png",
      tags: ["React", "Tailwind", "Responsive", "REST"],
      live: "https://rest-api-country-001.netlify.app/",
      gitHub: "https://github.com/joyce-ship-it/rest-api-country",
    },
    {
      id: 4,
      title: "Jobs Filtering UI",
      imgUrl: "/images/jobs-filter.png",
      tags: ["TypeScript", "React", "Tailwind", "Responsive"],
      live: "https://jobs-filter-ui.netlify.app/",
      gitHub: "https://github.com/joyce-ship-it/jobs-filter-ui",
    },
    {
      id: 3,
      title: "News Home Page UI",
      imgUrl: "/images/newspage-ui.png",
      tags: ["React", "Tailwind", "responsive"],
      live: "https://newspage-ui.netlify.app/",
      gitHub: "https://github.com/joyce-ship-it/newspage-ui",
    },
    {
      id: 2,
      title: "Agency landing page UI",
      imgUrl: "/images/agency-landing-page.png",
      tags: ["React", "Tailwind", "responsive"],
      live: "https://stirring-blancmange-66a77b.netlify.app/#%20",
      gitHub: "https://github.com/joyce-ship-it/agency-landing-page",
    },
    {
      id: 1,
      title: "Weather App",
      imgUrl: "/images/weather-api.png",
      tags: ["Vanilla JS", "CSS", "HTML", "API", "asynchronous"],
      live: "https://joyce-ship-it.github.io/weather-app/",
      gitHub: "https://github.com/joyce-ship-it/weather-app",
    },
  ];
  return (
    <main
      className="mx-auto flex max-w-[900px] flex-col items-center gap-4 p-4 pt-[8rem] pb-12"
      id="projects"
    >
      <h2 className="text-[1.4rem] font-semibold md:text-[1.8rem]">Projects</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 self-stretch">
        {projectData.map((project) => {
          return (
            <Card
              key={project.id}
              title={project.title}
              imgUrl={project.imgUrl}
              tags={project.tags}
              live={project.live}
              gitHub={project.gitHub}
            ></Card>
          );
        })}
      </div>
    </main>
  );
}
