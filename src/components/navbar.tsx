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
    <nav className="flex h-20 w-full items-center justify-center bg-gray-800">
      <ul className="flex w-full justify-end px-4">
        {LINKS.map(({ id, name, href }) => (
          <li key={id}>
            <Link
              className=" box-border block w-32 p-2 text-center font-semibold uppercase text-white hover:border-b-2 hover:border-white"
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
