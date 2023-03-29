import { buildApiPath } from "@/utils";
import griffindor from "../../../public/griffindor.png";
import ravenclaw from "../../../public/ravenclaw.png";
import slytherin from "../../../public/slytherin.png";
import hufflepuff from "../../../public/hufflepuff.png";
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

  const getBannerByHouse = (house: string) => {
    const housesList = {
      Gryffindor: griffindor,
      Ravenclaw: ravenclaw,
      Slytherin: slytherin,
      Hufflepuff: hufflepuff,
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
  const banerUrl = getBannerByHouse(data.casaDeHogwarts);

  return (
    <div>
      <div className="mt-12 ml-12 flex h-fit w-fit rounded bg-white bg-opacity-20 p-4">
        <div className="mr-4">
          <Image
            src={buildApiPath(data.imagen)}
            width="423"
            height="600"
            alt={`imagen de ${data.personaje}`}
          />
        </div>
        <div className="mr-4 w-28">
          {banerUrl && (
            <Image
              src={banerUrl}
              alt={`baner casa ${data.casaDeHogwarts}`}
              width="258"
              height="591"
            />
          )}
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
  const response = await fetch(buildApiPath("/harry-potter-api/personajes"));
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
    buildApiPath(`/harry-potter-api/personajes?id=${id}`)
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
