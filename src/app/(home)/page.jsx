import Catalogue from "./_components/Catalogue";
import Collections from "./_components/Collections";
import Companies from "./_components/Companies";
import CoreValues from "./_components/CoreValues";
import Projects from "./_components/Projects";
import Quote from "./_components/Quote";
import Story from "./_components/Story";
import Videos from "./_components/Videos";


export default function Home() {
  return <div >
    <Quote />
    <Story />
    <Companies />
    <Videos />
    <Collections />
    <Projects />
    <Catalogue />
    <CoreValues />
  </div>;
}
