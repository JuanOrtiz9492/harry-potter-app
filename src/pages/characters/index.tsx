import CharacterCard from "../../components/charcaterCard";

interface charactersPropsInterface {
  data: Array<{
    id: number;
    personaje: string;
    apodo: string;
    estudianteDeHogwarts: boolean;
    casaDeHogwarts: string;
    interpretado_por: string;
    hijos: Array<string>;
    imagen: string;
  }>;
}

export default function Characters(props: charactersPropsInterface) {
  const { data } = props;
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((character) => (
        <CharacterCard
          characterData={character}
          key={character.id}
          href={`/characters/${character.id}`}
        />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "http://localhost:5020/harry-potter-api/personajes"
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
