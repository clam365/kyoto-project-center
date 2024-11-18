import Hero from "@/components/landing-page/hero";
import Mission from "@/components/landing-page/mission";
import Projects from "@/components/landing-page/projects"
import Contact from "@/components/landing-page/contact"
export default function Home() {
  return (
    <div>
        <Hero/>
        <Mission/>
        <Projects/>
        <Contact/>
    </div>
  );
}
