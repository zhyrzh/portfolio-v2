interface navIcon {
  isActive: boolean;
}

const AboutIcon = ({ isActive }: navIcon) => {
  return (
    <svg
      fill={isActive ? "#D9D9D9" : "#000000"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="384px"
      height="384px"
      className="icon-container"
    >
      <path d="M 12 2 C 10.343 2 9 3.343 9 5 C 9 6.657 10.343 8 12 8 C 13.657 8 15 6.657 15 5 C 15 3.343 13.657 2 12 2 z M 9 10 A 1.0001 1.0001 0 1 0 9 12 L 10 12 L 10 20 L 9 20 A 1.0001 1.0001 0 1 0 9 22 L 15 22 A 1.0001 1.0001 0 1 0 15 20 L 14 20 L 14 11 C 14 10.448 13.552 10 13 10 L 11 10 L 9 10 z" />
    </svg>
  );
};

export default AboutIcon;
