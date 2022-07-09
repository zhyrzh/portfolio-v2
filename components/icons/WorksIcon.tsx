interface navIcon {
  isActive: boolean;
}

const WorksIcon = ({ isActive }: navIcon) => {
  return (
    <svg
      fill={isActive ? "#D9D9D9" : "#000000"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="480px"
      height="480px"
      className="icon-container"
    >
      <path d="M 14 3 C 12.895 3 12 3.895 12 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 16 C 2 17.105 2.895 18 4 18 L 26 18 C 27.105 18 28 17.105 28 16 L 28 7 C 28 5.895 27.105 5 26 5 L 18 5 C 18 3.895 17.105 3 16 3 L 14 3 z M 15 14 C 15.552 14 16 14.448 16 15 C 16 15.552 15.552 16 15 16 C 14.448 16 14 15.552 14 15 C 14 14.448 14.448 14 15 14 z M 2 19.443359 L 2 23 C 2 24.105 2.895 25 4 25 L 26 25 C 27.105 25 28 24.105 28 23 L 28 19.443359 C 27.409 19.787359 26.732 20 26 20 L 4 20 C 3.268 20 2.591 19.787359 2 19.443359 z" />
    </svg>
  );
};

export default WorksIcon;
