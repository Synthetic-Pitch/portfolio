import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
import LandingPage1 from "../components/Landing-Page1";
import { RiMenu2Fill } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger)

// Landing.tsx
import { useRef, useState } from "react";
import LandingPage2 from "../components/Landing-Page2";
import LandingPage3 from "../components/Landing-Page3";
import LandingPage4 from "../components/Landing-Page4";
import LandingPage5 from "../components/Landing-Page5";

const Landing = () => {
    const [parent, setParent] = useState<HTMLDivElement | null>(null);
    const headermenu= useRef<HTMLElement>(null);


    useGSAP(()=>{
        const lenis = new Lenis({
            lerp: 0.05,
            smoothWheel: true,
        });
        lenis.on("scroll", ScrollTrigger.update);
        const ticker = (time: number) => {
            lenis.raf(time * 1000);
        };
        gsap.ticker.add(ticker);

        gsap.fromTo(headermenu.current,{
            y:-200
        },{
            y:0,
            duration:1,
            delay:1
        })

        return () => {
            gsap.ticker.remove(ticker);
            lenis.destroy();
        };
        
    },[])

  return (
    <div ref={setParent} className="min-h-dvh relative">
        <header ref={headermenu} className="fixed top-0 z-100 text-white flex justify-between w-full py-6">
            <div className="flex items-center gap-4 px-7 cursor-pointer">
                <RiMenu2Fill size={34}/>
                <span className="text-white ">menu</span>
            </div>
            <div className="text-center">
                <h2 className="text-md">20s</h2>
                <h1 className="text-2xl font-roboto-mono">DEQUITO</h1>
            </div>
            <p className="px-6 text-xl font-azaret-mono">virgo</p>
        </header>
        <LandingPage1 parentCon={parent}/>
        <LandingPage2/>
        <LandingPage3/>
        <LandingPage4/>
        <LandingPage5/>
    </div>
  );
};

export default Landing