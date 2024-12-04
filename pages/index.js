import { Inter } from "next/font/google";
import Accordian from "./Components/Accordian";
import Text from "./Components/Text";
import Counter from "./Components/Counter";
import Searchbar from "./Components/Searchbar";
import Search from "./Components/Search";
import First from "./Components/First";
import Second from "./Components/Second";
import Clock from "./Components/Clock";
import Toggle from "./Components/Toggle";
import Clear from "./Components/Clear";
import Crendering from "./Components/Crendering";
import UseEffect from "./Components/UseEffect";
import Searchbox from "./Components/Searchbox";
import Filter from "./Components/Filter";
import Form from "./Components/Form";
import Forms from "./Components/Forms";
import Slider from "./Components/Slider";
import Passwordviewer from "./Components/Passwordviewer";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Accordian/>
    <Text/>
    <Counter/>
    <Searchbar/>
    <Search/>
    <First />
    <Second/>
    <Clock />
    <Toggle />
    <Clear />
    <Crendering />
    <UseEffect />
    <Searchbox />
    <Filter />
    <Form />
    <Forms />
    <Slider />
    <Passwordviewer/>
    </>
  );
}


