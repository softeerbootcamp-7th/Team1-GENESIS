import { CATEGORY_STYLE, type CategoryType } from "@/types/category";

interface CategoryProps {
  type: CategoryType;
}

const Category = ({ type }: CategoryProps) => {
  const { label, bg, text } = CATEGORY_STYLE[type];
  return (
    <button className={`inline-flex items-center rounded-sm ${bg} px-1.5 py-0.75 border-radius-md cursor-pointer`}>
      <p className={`category-regular ${text}`}>
        {label}
      </p>
    </button>
  );
};

export default Category;
