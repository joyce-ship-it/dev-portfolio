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
      <article className="flex flex-col gap-3 overflow-clip rounded-md border-2 border-slate-700 p-4 hover:border-[#ff637e]">
        <img src={imgUrl} alt="" className="w-full" />
        <div className="flex items-center gap-2">
          <h2 className="text-[1.2rem] font-semibold">{title}</h2>
          <a href={gitHub}>
            <FaGithub className="hover:text-green-400" size={24} />
          </a>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="border-2 border-slate-600 p-2">
              {tag}
            </span>
          ))}
        </div>
      </article>
    </a>
  );
}
