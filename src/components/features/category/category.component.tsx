import { Dispatch, SetStateAction } from "react";
import { Tags } from "types/tags.enum";
import "components/features/category/category.scss";

interface ICategoryProps {
  setTag: Dispatch<SetStateAction<Tags>>;
  activeTag: Tags;
}

export const Category = ({ setTag, activeTag }: ICategoryProps) => {
  const handleTagClick = (tag: Tags): void => {
    setTag(tag);
  };

  return (
    <div className="category">
      {Object.values(Tags).map((tag) => {
        return (
          <div
            className={`tag ${tag == activeTag ? "tag--active" : ""}`}
            onClick={() => handleTagClick(tag)}
          >
            <span className="tag__name">{tag}</span>
          </div>
        );
      })}
    </div>
  );
};
