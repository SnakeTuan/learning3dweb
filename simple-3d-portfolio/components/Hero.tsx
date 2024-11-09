'use client'
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { HackerRoom } from "./3d/HackerRoom";

export function Hero() {
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3 c-space">
                <p className="text-white text-2xl text-center font-generalsans sm:text-3xl">
                    Hello, I'm <span className="text-blue-500">Tuan</span>
                    <span className="waving-hand">👋🏼</span>
                </p>
                <p className="hero_tag text-gray_gradient">
                    Creative Developer
                </p>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                    <HackerRoom />
                </Canvas>
            </div>
        </section>
    );
}
