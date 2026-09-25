import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import { useRef } from "react";
import icon1 from "../assets/icon/r_icon.png"
// import kingspade  from "../assets/image/King_Spades.jpeg"
// Landing-Page1.tsx
type LandingPage1Props = {
  parentCon: HTMLDivElement | null;
};


gsap.registerPlugin(ScrollTrigger,SplitText);

const LandingPage1 = ({ parentCon }: LandingPage1Props) => {
  const textRef = useRef<HTMLElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);
  const section2nd = useRef<HTMLElement>(null);
  const section3nd = useRef<HTMLElement>(null);
  const text1 = useRef<HTMLParagraphElement>(null);
  const text2 = useRef<HTMLParagraphElement>(null);
  useGSAP(() => {
    const text = textRef.current;
    const icon = iconRef.current;

    if (!parentCon || !text || !icon || !text1.current) return;
    
    gsap.to(icon, {
      "--reveal-angle": "359.9deg",
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });
    
    gsap.to([icon,section2nd.current,section3nd.current], {
      y: 900,
      ease: "none",
      scrollTrigger: {
        trigger: text,
        start: "top top",
        end: "+=1000",
        scrub: true,
      },
    });
    gsap.to(text,{
      opacity:0,
      delay:.9,
      duration:.9
    })
    // Splitting Text Animation
    const spitText1 = new SplitText(text1.current,{
      type:"chars"
    })
    const spitText2 = new SplitText(text2.current,{
      type:"words"
    })
    
    const textTimeLine = gsap.timeline()
    
    textTimeLine.fromTo(spitText1.chars,{
      opacity:0
    },{
      opacity:1,
      delay:1.5,
      stagger:{
        each:.08
      }
    })

    textTimeLine.fromTo(text1.current,{
      scale:1.3,
      y:-10
    },{
      y:0,
      scale:1
    },"<")

    textTimeLine.fromTo(spitText2.words,{
      x:200,
      y:100,
      opacity:0,
      rotateY:-90
    },{
      x:0,
      y:0,
      opacity:1,
      rotateY:0,
      stagger:{
        each:.1
      }
    },"<")
    
    gsap.fromTo(section3nd.current,{
      opacity:0
    },{
      opacity:1,
      duration:.4,
      delay:1.5
    })
    return () => {
      spitText1.revert();
    };
  }, { dependencies: [parentCon] });
  
  return(
    <div className="relative">
      <section ref={textRef} className="relative min-h-dvh bg-[#9c9c9c] flex justify-center items-center z-10">
        <img
          ref={iconRef}
          src={icon1}
          className="icon-cone-reveal h-40"
          alt=""
        />
      </section>
      <section ref={section2nd} className="absolute top-0 z-5 h-dvh w-full bg-[#000000] text-white flex items-center justify-center">
        <div>
          <p ref={text1} className="font-iosevka-mono text-[6rem]"><i>The Art</i></p>
          <p ref={text2} className="py-9 text-center font-playwrite-vn text-[2rem]"><i>Of Precision</i></p>
        </div>
      </section>
      <section ref={section3nd} className="absolute top-0 h-dvh w-full flex justify-end items-end z-10">
        <div className="absolute bottom-0 h-89 w-[16rem] flex items-center justify-center bg-[red] m-4">
          
        </div>
      </section>
    </div>
  )
  
};

export default LandingPage1
