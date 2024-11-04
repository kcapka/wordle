import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Cartridge from "./Cartridge";
import { Suspense } from "react";
import StaggerText from "../animations/StaggerText";
import {motion} from 'framer-motion';
import { useWindowWidth } from "~/utils/hooks/useWindowWidth";

export default function HomepageHero() {

  const windowWidth = useWindowWidth();

  return (
    <section className="min-h-[100svh] pt-[100px] md:pt-0 flex items-center bg-center bg-cover" style={{backgroundImage: 'linear-gradient(to bottom, rgb(0,0,0,0.95), rgb(0,0,0,0.6)), url("/images/space-background.jpg")'}}>
      <div className="max-w-[1200px] default-px mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div>
          <h1 className="text-white leading-[1.1] mb-4 text-5xl font-display lg:text-[70px] font-bold"><StaggerText>Welcome to KRC Games</StaggerText></h1>
          <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.5, duration: 0.5}} className="text-xl text-white max-w-[400px]">A place to explore, play games, and experience all the cool stuff your browser can do.</motion.p>
        </div>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}} className="relative hidden lg:block">
            <motion.img src="/images/ellipse-white.svg" className={`absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[500px] opacity-50`} initial={{opacity: 0}} animate={{opacity: [0, 0.5, 0]}} transition={{repeat: Infinity, duration: 2}} />
            <Canvas style={{height: "500px", width: "450px", cursor: 'pointer' }}>
            <OrbitControls
                minAzimuthAngle={-Math.PI / 2}
                maxAzimuthAngle={Math.PI / 4}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI - Math.PI / 6}
                enableZoom={false}
                target={[0, 0, 0]}
            />
            {/* <ambientLight /> */}
            <Suspense fallback={null}>
                <Cartridge position={[0, -2.75, 0]} scale={[.90, .90, .90]} />
            </Suspense>
            <Environment preset="sunset" />
            </Canvas>
        </motion.div>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}} className="relative block lg:hidden">
            <motion.img src="/images/ellipse-white.svg" className={`absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[500px] opacity-50`} initial={{opacity: 0}} animate={{opacity: [0, 0.5, 0]}} transition={{repeat: Infinity, duration: 2}} />
            <Canvas style={{height: "400px", width: "350px", cursor: 'pointer' }}>
            <OrbitControls
                minAzimuthAngle={-Math.PI / 2}
                maxAzimuthAngle={Math.PI / 4}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI - Math.PI / 6}
                enableZoom={false}
                target={[0, 0, 0]}
            />
            {/* <ambientLight /> */}
            <Suspense fallback={null}>
                <Cartridge position={[0, -2.75, 0]} scale={[.90, .90, .90]} />
            </Suspense>
            <Environment preset="sunset" />
            </Canvas>
        </motion.div>
      </div>
    </section>
  );
}
