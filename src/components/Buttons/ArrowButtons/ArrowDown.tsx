import globalStyle from "@/GlobalClasses.module.scss";

const ArrowDown: React.FC = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='15'
      height='9'
      viewBox='0 0 15 9'
      fill='none'
      className={globalStyle.arrow}
    >
      <path d='M0.426453 1L7.31983 8L14.2132 1' stroke='black' strokeWidth='0.5' />
    </svg>
  );
};

export default ArrowDown;
