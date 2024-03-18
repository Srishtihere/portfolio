const SkillCard: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="relative text-center mt-10 block max-w-sm rounded-lg border border-gray-200 bg-white  shadow ">
      <div className="absolute flex justify-center w-full align-middle top-[-20px]">
        <h5 className="text-xs  w-fit  m-auto mb-2 rounded-3xl bg-black p-2 font-bold tracking-tight text-gray-100 dark:text-white">
          {title}
        </h5>
      </div>

      <div className="p-3 grid grid-cols-3 gap-1 w-full">{children}</div>
    </div>
  );
};

export default SkillCard;
