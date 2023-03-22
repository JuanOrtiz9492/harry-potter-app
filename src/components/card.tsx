import Image from "next/image";

interface cardPropsInterface {
  cardData: {
    id: number;
    hechizo: string;
    uso: string;
    imgsrc?: string;
  };
}

export default function Card(props: cardPropsInterface) {
  const {
    cardData: { id, hechizo: spellName, uso: description, imgsrc = "card.jpg" },
  } = props;
  return (
    <div className="m-6 h-96 w-64">
      <div className="flex h-full flex-col rounded border-4 border-cream-300 bg-gradient-to-r from-cream-200 via-cream-100 to-cream-200 p-4">
        <div className="z-20 rounded border-4 border-cream-300">
          <img
            src={imgsrc}
            alt={`imagen del hechizo ${spellName}`}
            width="253"
            height="214"
          />
        </div>
        <div className="z-20 my-2 self-center">
          <p className="text-ellipsis text-xl">{spellName}</p>
        </div>
        <section className="z-20">
          <article>{description}</article>
        </section>
      </div>
      <div className="relative bottom-96 z-10 h-96 w-64 rounded bg-paper-texture opacity-50"></div>
    </div>
  );
}
