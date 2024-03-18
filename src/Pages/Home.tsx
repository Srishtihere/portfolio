import { About } from "../Components/Home/About";
import Language from "../Components/Home/Language";
import Eduaction from "../Components/Home/Eduaction";
import Interests from "../Components/Home/Interests";
import Contact from "../Components/Home/Contact";
import ExpUpdate from "../Components/Home/ExpUpdate";
import ComUpdate from "../Components/Home/ComUpdate";
import BlogUpdate from "../Components/Home/BlogUpdate";
import ProjUpdate from "../Components/Home/ProjUpdate";
import Skills from "../Components/Home/Skills";
import Platforms from "../Components/Home/Platforms";
const Home = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
      <About />
      <Language />
      <Eduaction />
      <Interests />
      <Contact />
      <Skills />
      <ExpUpdate />
      <ComUpdate />
      <BlogUpdate />
      <Platforms />
      <ProjUpdate />
    </div>
  );
};

export default Home;
