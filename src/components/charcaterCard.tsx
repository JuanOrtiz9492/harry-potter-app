import Link from "next/link";
import Image from "next/image";
import { buildApiPath } from "@/utils";
export default function CharacterCard(props) {
  const {
    characterData: { imagen, personaje, casaDeHogwarts, id },
    href,
  } = props;

  return (
    <Link
      className={`m-4 flex max-h-96 w-48 cursor-pointer flex-col border-2 border-red-800 bg-amber-400 p-4 hover:scale-105`}
      href={href}
    >
      <div className="border-2 border-red-800">
        <Image
          src={buildApiPath(imagen)}
          alt={`imagen de ${personaje}`}
          width="192"
          height="225"
        />
      </div>
      <div className="mt-2">
        <p className="font-bold uppercase">Personaje:</p>
        <p>{personaje}</p>
        <p className="font-bold uppercase">Casa:</p>
        <p>{casaDeHogwarts}</p>
      </div>
    </Link>
  );
}
