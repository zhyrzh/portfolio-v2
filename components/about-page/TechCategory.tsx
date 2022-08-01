import Image from "next/image";
import { NextPage } from "next";
import Tech from "./Tech";

interface TechCategoryProps {
  categoryName: string;
  techs: TechProps[];
  color: string;
}

interface TechProps {
  techIcon: string;
  techName: string;
}

const TechCategory: NextPage<TechCategoryProps> = ({
  categoryName,
  techs,
  color,
}) => {
  return (
    <div className="about__tech-category">
      <h1 className="about__tech-category-title">{categoryName}</h1>
      <div
        className="about__tech-category-techs"
        style={{ border: `3px solid ${color}` }}
      >
        {techs.map(({ techIcon, techName }) => (
          <Tech key={techName} techIcon={techIcon} techName={techName} />
        ))}
      </div>
    </div>
  );
};

export default TechCategory;
