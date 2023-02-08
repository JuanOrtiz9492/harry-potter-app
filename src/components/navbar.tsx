import Link from "next/link";

const LINKS = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Hechizos",
    href: "/spells",
  },
  {
    id: 3,
    name: "Curiosidades",
    href: "/info",
  },
  {
    id: 4,
    name: "Personajes",
    href: "/characters",
  },
  {
    id: 5,
    name: "Libros",
    href: "/books",
  },
];
export default function Navbar() {
  return (
    <nav className="h-1/10 flex w-full items-center justify-center bg-red-800">
      <ul className="flex w-2/3 justify-between px-4">
        {LINKS.map(({ id, name, href }) => (
          <li key={id}>
            <Link
              className=" block w-32 border-2 border-slate-800 bg-amber-400 p-2 text-center font-semibold uppercase hover:scale-110"
              href={href}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
