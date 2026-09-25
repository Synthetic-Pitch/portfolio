import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)
const AboutUs = () => {
  
  useGSAP(() => {
  

}, []);

  return (
    <div className="h-[300dvh]">
      <div id="parentcon" className="bg-[gray] flex justify-center items-center relative min-h-dvh">
        
      </div>
    </div>
  )
}

export default AboutUs
