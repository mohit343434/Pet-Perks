import About from "@/Components/abouut/About";
import Herro from "@/Components/Herro/Herro";
import Nevbar from "@/Components/Nevbar";

export default function Home() {
  return (
    <div className="bg-[#F9F4F1]" >
      <div className="w-[95%] mx-auto mb-4 pt-4">
        <Nevbar />
      </div>
      <Herro />
      <About />
    </div>
  );
}
