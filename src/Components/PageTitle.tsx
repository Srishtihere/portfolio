const PageTitle: React.FC<{ name: string }> = ({ name }) => {
  return (
    <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      {name}
    </h1>
  );
};

export default PageTitle;
