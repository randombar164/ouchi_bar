import { useRouter } from "next/router";

/* original component */
import { Layout } from "src/components/Layout";
import { IngredientCard } from "src/components/IngredientCard";

/* type */
import type { Ingredient } from "src/utils/types/type";

/* MUI Component */

const IngredientPage: React.VFC = (): JSX.Element => {
  const sample_ingredients: Ingredient[] = [
    {
      img: "/whisky.png",
      name: "whisky",
      content: "whisky content",
    },
    {
      img: "/whisky.png",
      name: "whisky",
      content: "whisky content",
    },
    {
      img: "/whisky.png",
      name: "whisky",
      content: "whisky content",
    },
  ];

  const router = useRouter();

  return (
    <Layout>
      {sample_ingredients?.map((ingredient) => {
        return (
          <IngredientCard //TODO: IngredientCardの修正
            canDelete={false}
            imgSrc={ingredient.img}
            name={ingredient.name}
            onClick={() => {
              router.push("/ingredient/show");
            }}
          />
        );
      })}
    </Layout>
  );
};

export default IngredientPage;
