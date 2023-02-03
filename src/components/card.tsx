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
    <div className="container m-6 h-96 w-64 rounded border-2 border-slate-900 bg-teal-500 p-6">
      <div className="mb-2 border-2 border-teal-900 px-2 uppercase">
        <p className="text-ellipsis">{spellName}</p>
      </div>
      <div className="border-4 border-teal-900">
        <img src={imgsrc} alt={`imagen del hechizo ${spellName}`} />
      </div>
      <section className="my-4 h-28 border-2 border-teal-900 bg-teal-300 p-1">
        <article>{description}</article>
      </section>
    </div>
  );
}
