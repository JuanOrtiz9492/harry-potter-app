import Link from "next/link";
import Image from "next/image";
import { buildApiPath } from "@/utils";

interface CharacterCardProps {
  characterData: {
    imagen: string;
    personaje: string;
    casaDeHogwarts: string;
  };
  href: string;
}
export default function CharacterCard(props: CharacterCardProps) {
  const {
    characterData: { imagen, personaje, casaDeHogwarts },
    href,
  } = props;
  const getClassByHouse = (house: string) => {
    const housesList = {
      Gryffindor: "bg-red-800 text-white",
      Ravenclaw: "bg-sky-700 text-white",
      Slytherin: "bg-emerald-700 text-white",
      Hufflepuff: "bg-yellow-200 text-white",
      default: "bg-teal-100",
    };
    // @ts-ignore
    if (housesList[house]) {
      // @ts-ignore
      return housesList[house];
    } else {
      return housesList.default;
    }
  };

  return (
    <Link
      className={`m-4 flex max-h-72 w-48 cursor-pointer flex-col hover:scale-105`}
      href={href}
    >
      <Image
        className="w-40 rounded-t"
        src={buildApiPath(imagen)}
        alt={`imagen de ${personaje}`}
        width="192"
        height="225"
      />

      <div
        className={`${getClassByHouse(
          casaDeHogwarts
        )} h-16 w-40 rounded-b pt-2`}
      >
        <p className="w-40 text-center font-medium">{personaje}</p>
      </div>
    </Link>
  );
}
