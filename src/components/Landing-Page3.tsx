import { useGSAP } from "@gsap/react"
import emptyangel from "../assets/image/empty_angel.jpeg"
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import somethingImg from "../assets/image/soemthing.jpeg"
import angelprepaired from "../assets/image/AngelPrepaired.jpeg"

gsap.registerPlugin(ScrollTrigger,SplitText);

const LandingPage3 = () => {
  const imageCon = useRef<HTMLDivElement>(null);
  const angelImg = useRef<HTMLImageElement>(null);
  const image1 = useRef<HTMLImageElement>(null);
  const image2 = useRef<HTMLImageElement>(null);
  const imagesCon = useRef<HTMLDivElement>(null)
  const image1Con = useRef<HTMLDivElement>(null)

  useGSAP(()=>{

    const angelConTL = gsap.timeline({
      defaults:{
        ease:"none"
      },
      scrollTrigger:{
        trigger:imageCon.current,
        start:"top top",
        end:"+=5000",
        pin:true,
        scrub:true
      }
    })
    angelConTL.to(angelImg.current,{
      width:"50dvw",
    })
    
    

  })

  return (
    <div className='min-h-dvh relative z-20'>
        <p  className="text-6xl font-xanh-mono pl-27 py-27 ">Consuming Time <br /> To unleash</p>
        <div ref={imageCon} className="relative flex justify-center h-dvh w-full">
          <img ref={angelImg} src={emptyangel} alt="" className="object-cover" />
          <div ref={imagesCon} className="absolute top-0 w-full h-full flex justify-evenly items-center ">
              <div ref={image1Con}>
                <img ref={image1} src={somethingImg} alt="" className="object-cover h-[50dvh] w-[30dvw]" />
              </div>
              <img ref={image2} src={angelprepaired} alt="" className="object-cover h-[70dvh] w-[30dvw]" />
          </div>
        </div>
        <section className="h-[200dvh]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vero dolores. Quod modi repellendus vel perferendis autem iusto, accusamus consequatur nobis vero facere ut voluptas accusantium possimus at! Cumque, minus.
        </section>
    </div>
  )
}

export default LandingPage3
