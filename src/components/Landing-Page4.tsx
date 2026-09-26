import { useGSAP } from "@gsap/react"
import stares from  "../assets/image/stares.jpeg"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import img1 from "../assets/image/cutter.jpeg"
import img2 from "../assets/image/cutter1.jpeg"
import img3 from "../assets/image/cutter2.jpeg"
gsap.registerPlugin(ScrollTrigger);

const LandingPage4 = () => {
    const stareCon = useRef<HTMLDivElement>(null);
    const parentCon12 = useRef<HTMLDivElement>(null);
    const paragraph1 = useRef<HTMLParagraphElement>(null);
    const img1con = useRef<HTMLDivElement>(null)
    const imgCon = useRef(null)

    useGSAP(()=>{
        const TL = gsap.timeline({
            defaults:{
                ease:"none"
            },
            scrollTrigger:{
                trigger:parentCon12.current,
                start:"top top",
                end:"+=3000",
                scrub:true,
                pin:true
            }
        })
        TL.fromTo(imgCon.current,{
            left:"100dvw",
            rotateY:90,
        },{
            rotateY:0,
            left:0,
         
        },"0")
    },[])

  return (
    <div ref={parentCon12} className='min-h-dvh w-full bg-black relative overflow-hidden'>
        <div ref={stareCon} className='relative w-full h-dvh flex justify-center  '>
            <img src={stares} alt="" className='object-cover scale-[1.2] -mb-52'/>
        </div>
        <p ref={paragraph1} className="text-white text-5xl absolute top-[20dvh] left-20 w-[30dvw]">Time leaves nothing untouched, not even those carved to <i className="font-bold font-azaret-mono">endure</i>.
        </p>
        <p className="text-[teal] text-[7rem] absolute bottom-[20dvh] left-20 w-[30dvw] font-iosevka-mono font-bold">HE WAS HERE</p>
        <section ref={imgCon} className="absolute top-0 w-full h-dvh flex items-center justify-evenly ">
            <div className="h-[80%] w-[30dvw]">
                <img src={img1} alt="" className="object-cover h-full" />
            </div>
            <div className="h-[80%] w-[30dvw]">
                <img src={img2} alt="" className="object-cover h-full" />
            </div>
            <div className="h-[80%] w-[30dvw]">
                <img src={img3} alt="" className="object-cover h-full" />
            </div>
        </section>
    </div>
  )
}

export default LandingPage4
