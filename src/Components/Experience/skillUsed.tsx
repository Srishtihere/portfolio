const SkillUsed: React.FC<{ skills: string[] }> = ({ skills }) => {
  return (
    <div className="h-auto w-full flex flex-wrap justify-start">
      {skills.map((i) => (
        <span className="bg-green-100 text-green-800 text-xs font-medium m-1 p-2 rounded-full dark:bg-gray-700 dark:text-green-400 border border-green-400 flex justify-center align-middle">
          {i}
        </span>
      ))}
    </div>
  );
};

export default SkillUsed;
