import Card from "@/components/card";
import { buildApiPath } from "@/utils";

interface spellPropsInterface {
  data: Array<{ id: number; hechizo: string; uso: string }>;
}
export default function Spells(props: spellPropsInterface) {
  const { data: spellList } = props;
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap">
        {spellList.length > 0 &&
          spellList.map((spell) => <Card cardData={spell} key={spell.id} />)}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(buildApiPath("/harry-potter-api/hechizos"));
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
