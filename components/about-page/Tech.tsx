import { NextPage } from "next";
import Image from "next/image";

interface TechProps {
  techIcon: string;
  techName: string;
}

const Tech: NextPage<TechProps> = ({ techIcon, techName }) => {
  return (
    <div className="about__tech">
      <div className="about__tech-icon">
        <Image width={"100%"} height={"100%"} src={techIcon} alt="image" />
        <h1 className="about__tech-title">{techName}</h1>
      </div>
    </div>
  );
};

export default Tech;
