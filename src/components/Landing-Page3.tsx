import { useGSAP } from "@gsap/react"
import emptyangel from "../assets/image/empty_angel.jpeg"
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import somethingImg from "../assets/image/soemthing.jpeg"
import angelprepaired from "../assets/image/AngelPrepaired.jpeg"

gsap.registerPlugin(ScrollTrigger, SplitText);

// grid used to "shatter" image2 into tiles
const SHATTER_ROWS = 4;
const SHATTER_COLS = 4;
const SHATTER_TILE_COUNT = SHATTER_ROWS * SHATTER_COLS;

const LandingPage3 = () => {
  const imageCon = useRef<HTMLDivElement>(null);
  const angelImg = useRef<HTMLImageElement>(null);
  const image1 = useRef<HTMLImageElement>(null);
  const image2Con = useRef<HTMLDivElement>(null);
  const imagesCon = useRef<HTMLDivElement>(null);
  const image1Con = useRef<HTMLDivElement>(null);
  const paragraph1 = useRef<HTMLParagraphElement>(null);
  const paragraph2 = useRef<HTMLParagraphElement>(null);
  const paragraph3 = useRef<HTMLParagraphElement>(null);
  const shatterTiles = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {

    const angelConTL = gsap.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: imageCon.current,
        start: "top top",
        end: "+=5000",
        pin: true,
        scrub: true,
        invalidateOnRefresh:true
      }
    })
    angelConTL.fromTo(angelImg.current, {
      width: "30dvw",
      duration: 1
    },{
      width: "50dvw",
    }, "0")
      .to(image1Con.current, {
        opacity: 1,
        duration: .2
      }, "0")
      .to(paragraph1.current, {
        opacity: 1,
        duration: .2
      }, "0")
      .to(image1Con.current, {
        opacity: 0,
        x: -100,
        duration: .2
      }, ".3")
      .to(paragraph1.current, {
        opacity: 0,
        x: 100,
        duration: .2
      }, ".3")
      .fromTo(image2Con.current, {
        opacity: 0,
        y: -200,
        scale: .5
      }, {
        scale: 1,
        rotateZ: 3,
        y: 0,
        opacity: 1,
        duration: .2
      }, ".5")
      .to(paragraph2.current, {
        opacity: 1,
        x: 100,
        duration: .2
      }, ".5")
      .to(paragraph2.current, {
        opacity: 0,
        y: -200,
        duration: .3
      }, ".7")
      // shatter: every tile flies apart in a random direction/rotation, staggered
      .to(shatterTiles.current, {
        x: () => gsap.utils.random(-400, 400),
        y: () => gsap.utils.random(-350, 350),
        rotateZ: () => gsap.utils.random(-180, 180),
        scale: () => gsap.utils.random(0.2, 0.6),
        opacity: 0,
        duration: .3,
        stagger: {
          each: 0.01,
          from: "random",
        }
      }, ".7")
      .fromTo(paragraph3.current,{
        opacity:0,
        y:0
      },{
        y:200,
        opacity:1,
        duration:1
      },".7")
  })

  return (
    <div className='min-h-dvh relative z-20'>
      <p className="text-6xl font-xanh-mono pl-27 py-27 ">Consuming Time <br /> To unleash</p>
      <div ref={imageCon} className="relative flex justify-center h-dvh w-full">
        <img ref={angelImg} src={emptyangel} alt="" className="object-cover" />
        <div ref={imagesCon} className="absolute top-0 w-full h-full flex justify-evenly items-center ">
          <div ref={image1Con} className="opacity-0">
            <img ref={image1} src={somethingImg} alt="" className="object-cover h-[50dvh] w-[30dvw]" />
          </div>
          <p ref={paragraph1} className="text-6xl font-xanh-mono absolute right-0 mr-[6vw] opacity-0 text-[gray]">Something The World <br /> Has no ever idea</p>
          <p ref={paragraph2} className="absolute left-23 text-6xl font-xanh-mono text-[gray] opacity-0">GOD'S From Within</p>

          {/* image2 replaced with a grid of tiles that reassemble the picture, then shatter apart */}
          <div ref={image2Con} className="opacity-0 relative h-[70dvh] w-[30dvw]">
            {Array.from({ length: SHATTER_TILE_COUNT }).map((_, i) => {
              const row = Math.floor(i / SHATTER_COLS);
              const col = i % SHATTER_COLS;
              return (
                <div
                  key={i}
                  ref={(el) => { shatterTiles.current[i] = el }}
                  className="absolute"
                  style={{
                    width: `${100 / SHATTER_COLS}%`,
                    height: `${100 / SHATTER_ROWS}%`,
                    top: `${(row * 100) / SHATTER_ROWS}%`,
                    left: `${(col * 100) / SHATTER_COLS}%`,
                    backgroundImage: `url(${angelprepaired})`,
                    backgroundSize: `${SHATTER_COLS * 100}% ${SHATTER_ROWS * 100}%`,
                    backgroundPosition: `${(col * 100) / (SHATTER_COLS - 1)}% ${(row * 100) / (SHATTER_ROWS - 1)}%`,
                    backgroundRepeat: "no-repeat",
                  }}
                />
              );
            })}
          </div>
          <p ref={paragraph3} className="absolute text-white text-8xl font-monoton">
            FORBIDDEN
          </p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage3