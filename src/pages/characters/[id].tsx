import { buildApiPath } from "@/utils";
import Image from "next/image";

interface ProfilePropsInteface {
  data: {
    imagen: string;
    casaDeHogwarts: string;
    personaje: string;
    apodo: string;
    interpretado_por: string;
    hijos: Array<string>;
  };
}
export default function Profile(props: ProfilePropsInteface) {
  const { data } = props;
  const getClassByHouse = (house: string) => {
    const housesList = {
      Gryffindor: "bg-red-800",
      Ravenclaw: "bg-sky-700",
      Slytherin: "bg-emerald-700",
      Hufflepuff: "bg-yellow-200",
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

  const getBannerByHouse = (house: string) => {
    const housesList = {
      Gryffindor: "/harry-potter-app/griffindor.jpg",
      Ravenclaw: "/harry-potter-app/ravenclaw.jpg",
      Slytherin: "/harry-potter-app/slytherin.jpg",
      Hufflepuff: "/harry-potter-app/hufflepuff.jpg",
      default: "",
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
    <div
      className={`${getClassByHouse(
        data.casaDeHogwarts
      )} flex h-full justify-start`}
    >
      <div className="mt-12 ml-12 flex h-fit rounded bg-white bg-opacity-20 p-4">
        <div className="mr-4">
          <img src={buildApiPath(data.imagen)} />
        </div>
        <div className="mr-4 w-28">
          <img
            src={getBannerByHouse(data.casaDeHogwarts)}
            alt={`baner casa ${data.casaDeHogwarts}`}
            width="258"
            height="591"
          />
        </div>
        <div className="mr-8 flex flex-col">
          <p className="font-bold uppercase">personaje:</p>
          <p>{data.personaje}</p>
          <p className="font-bold uppercase">apodo:</p>
          <p>{data.apodo}</p>
          <p className="font-bold uppercase">casa:</p>
          <p>{data.casaDeHogwarts}</p>
          <p className="font-bold uppercase">Interpretado por:</p>
          <p>{data.interpretado_por}</p>
          <p className="font-bold uppercase"> Hijos</p>
          <ul>
            {data.hijos.map((hijo: string) => (
              <li key={hijo}>
                <p>{hijo}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch(
    "http://localhost:5020/harry-potter-api/personajes"
  );
  const data = await response.json();
  const paths = data.map((characters: { id: string }) => ({
    params: { id: characters.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context: { params: { id: string } }) {
  const {
    params: { id },
  } = context;
  const response = await fetch(
    `http://localhost:5020/harry-potter-api/personajes?id=${id}`
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
