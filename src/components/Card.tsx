import { FaGithub } from "react-icons/fa";
type cardPropTypes = {
  title: string;
  imgUrl: string;
  tags: string[];
  live: string;
  gitHub: string;
};
export default function Card({
  title,
  imgUrl,
  tags,
  live,
  gitHub,
}: cardPropTypes) {
  return (
    <a href={live} target="_blank">
      <article className="group flex flex-col gap-3 rounded-md border-2 border-slate-700 p-4 transition-colors duration-150 hover:ring-2">
        <div className="overflow-hidden">
          <img
            src={imgUrl}
            alt={title}
            className="h-48 w-full object-contain transition-transform duration-300 group-hover:scale-125"
          />
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-[1.2rem] font-semibold">{title}</h2>
          <a href={gitHub}>
            <FaGithub className="hover:text-green-400" size={24} />
          </a>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border-2 border-slate-600 p-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </a>
  );
}
