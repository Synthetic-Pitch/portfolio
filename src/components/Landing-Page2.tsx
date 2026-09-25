import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import { useRef } from "react";
import castle1 from "../assets/image/castle1.jpeg"
import castle2 from "../assets/image/castle2.jpeg"
import castle3 from "../assets/image/castle3.jpeg"

gsap.registerPlugin(ScrollTrigger,SplitText);

const LandingPage2 = () => {
    const headerRef = useRef<HTMLElement>(null);
    const splitText1 = useRef<HTMLDivElement>(null);
    const splitText2 = useRef<HTMLDivElement>(null);
    const castle_img1 = useRef<HTMLDivElement>(null)
    const castle_img2 = useRef<HTMLDivElement>(null);
    const castle_img3 = useRef<HTMLDivElement>(null);

    useGSAP(()=>{

        gsap.to(headerRef.current,{
            y:100,
            scrollTrigger:{
                trigger:headerRef.current,
                start:"top 70%",
                end:"+=400",
                scrub:2
            }
        });

        const split1 = new SplitText([splitText1.current,splitText2.current],{
            type:"chars",
        })
        
        const tl = gsap.timeline({
            defaults:{ease:"power1.inOut"},
            scrollTrigger:{
                trigger:headerRef.current,
                start:"top 90%",
                end:"+=300",
                scrub:2
            }
        })
        tl.fromTo(split1.chars,{
            yPercent:100,
        },{
            yPercent:0,
            duration:.5,
            delay:.8,
            stagger:{
                each:.02
            }
        })

        // castle
        const castleTL = gsap.timeline({
        defaults: {
            ease: "none"
        },
        scrollTrigger: {
            trigger: castle_img1.current,
            start: "top bottom",
            end: "+=1200",
            scrub: 2,
            invalidateOnRefresh: true,
        }
        });

        castleTL
        .fromTo(
            [castle_img2.current, castle_img3.current, castle_img1.current],
            {
            y: 400
            },
            {
            y: 0
            }
        )
        .fromTo(
            castle_img1.current,
            {
            width: "30%",
            height: "90dvh"
            },
            {
            width: "38%",
            height: "100dvh"
            },
            "<"
        )
        .to(
            [castle_img2.current, castle_img3.current, castle_img1.current],
            {
            y: 60
            }
        )
        .to(
            castle_img1.current,
            {
            width: "44%"
            }
        );
       
    },[])

    return (
        <div className='relative min-h-dvh bg-[#ffffff] z-20'>
            <header ref={headerRef} className="flex flex-col justify-center items-center py-[2rem] text-sm font-mono mb-14">
                <p>Collection Of</p>
                <p>Random Assets</p>
                <div className="py-12 text-5xl font-xanh-mono">
                    <div className="overflow-y-hidden py-6">
                        <p ref={splitText1}>Fragments of Unseen </p>
                    </div>
                    <div className="overflow-y-hidden">
                        <p ref={splitText2}>Didn't hear it?</p>
                    </div>
                </div>
            </header>
            <section className="min-h-dvh relative flex justify-between">
                <div ref={castle_img3} className="relative h-[90dvh] w-[30%] flex bg-[pink]">
                    <img src={castle3} alt="" className="object-cover w-full" />
                </div>
                <div ref={castle_img1} className="relative h-[90dvh] w-[30%] flex bg-[pink]">
                    <img src={castle1} alt="" className="object-cover w-full" />
                </div>
                <div ref={castle_img2} className="relative h-[90dvh] w-[30%] flex bg-[pink]">
                    <img src={castle2} alt="" className="object-cover w-full" />
                </div>
                
            </section>
        </div>
  )
}

export default LandingPage2
