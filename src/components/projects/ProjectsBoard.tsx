import { Link } from "@tanstack/react-router";

import { projectsBoard as b } from "@/data/pages";

/** Projects page: navy header, beige page with six project cards, navy footer. */
export function ProjectsBoard() {
  return (
    <div className="flex min-h-screen flex-col bg-beige font-board">
      <header className="w-full bg-navy px-5 py-3 md:h-[60px] md:py-0">
        <div className="mx-auto flex h-full max-w-[1200px] flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="leading-tight">
            <span className="block text-2xl font-bold text-white">{b.name}</span>
            <span className="block text-[13px] text-teal">{b.tagline}</span>
          </Link>
          <nav aria-label="Main" className="self-start rounded-md bg-white md:self-auto">
            <ul className="flex flex-wrap">
              {b.menu.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block px-5 py-2.5 text-sm text-navy no-underline"
                    activeProps={{ className: "font-semibold" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1 px-5 py-12">
        <h1 className="text-center text-5xl font-bold text-navy">{b.title}</h1>
        <p className="mt-3 mb-[25px] text-center text-base text-board-green">{b.subtitle}</p>

        <ul className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {b.items.map((p) => (
            <li
              key={p.title}
              className="flex min-h-[260px] flex-col rounded-xl border border-board-line bg-white p-6"
            >
              {/* Badge floats top-right so long titles wrap under it instead of being cut off. */}
              <div className="flow-root">
                <span className="float-right -mt-2 -mr-2 mb-1 ml-3 rounded-md bg-board-gold px-2.5 py-1 text-[13px] font-bold text-navy">
                  {p.date}
                </span>
                <h2 className="text-[21px] leading-snug font-bold text-navy">{p.title}</h2>
              </div>
              <p className="my-2 text-sm text-board-muted">{p.tech}</p>
              <p className="mb-5 text-sm leading-normal text-board-text">{p.description}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                <a
                  href={b.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-board-button px-3.5 py-2 text-[13px] font-bold text-white transition-opacity hover:opacity-90"
                >
                  {b.githubButton}
                </a>
                <span className="rounded-lg bg-board-grey px-2.5 py-2 text-xs text-board-text">{b.demoButton}</span>
              </div>
            </li>
          ))}
        </ul>
      </main>

      <footer className="w-full bg-navy p-3.5 text-center text-[13px] text-white">
        {b.footerBefore} •{" "}
        <a href={b.githubUrl} target="_blank" rel="noreferrer" className="text-white no-underline hover:underline">
          {b.githubLabel}
        </a>
        {b.footerAfter.map((part) => ` • ${part}`).join("")}
      </footer>
    </div>
  );
}
