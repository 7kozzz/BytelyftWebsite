
import Card from '../components/Card';
import { useRef } from "react";
import JoinBlindTrust from '../components/JoinBlindTrust';
import PlayBlindTrust from '../components/PlayBlindTrust';
import { ColourfulText } from '../components/ColorfulText';

const BlindTrustGame = () => {
    const grid4Container = useRef();
  return (
       <section
    className="c-space section-spacing" id="games"
    >   
        
        <h2 className="text-heading"><ColourfulText
        text={"Blind Trust"}
        /></h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
           {/* Grid 1 */}
            <div className="grid-default-color grid-1 p-0 overflow-hidden relative">
            <div className="absolute inset-0 z-10 p-1 sm:p-4 bg-black/40 backdrop-blur-sm flex flex-col justify-center overflow-y-auto">
                <div className="space-y-1 sm:space-y-3 text-white max-h-full">
                {/* Opening Quote */}
                <blockquote className="text-xs sm:text-sm italic text-cyan-300 font-light border-l-2 sm:border-l-3 border-cyan-400 pl-2 sm:pl-3 mb-1 sm:mb-4">
                    "Trust isn't just a choice — it's your only way forward."
                </blockquote>
                
                {/* Game Title & Main Description */}
                <div className="space-y-0.5 sm:space-y-2">
                    <h2 className="text-base sm:text-xl font-bold text-white">
                    <span className="text-cyan-400">Blind Trust</span>
                    </h2>
                    
                    <p className="text-xs sm:text-sm text-gray-200 leading-tight sm:leading-relaxed">
                    is a unique two-player co-op platformer built entirely around communication, timing, and trust.
                    </p>
                    
                    <p className="text-xs sm:text-sm text-gray-200 leading-tight sm:leading-relaxed hidden sm:block">
                    One player is completely blind, unable to see anything around them. The other must guide them through a world full of traps, jumps, and puzzles using only voice or visual cues.
                    </p>
                    
                    <p className="text-xs sm:text-sm text-orange-300 font-medium">
                    But there's a twist — when one player falls, the roles instantly reverse.
                    </p>
                </div>
                
                {/* Features List - Shortened for mobile */}
                <ul className="space-y-0.5 sm:space-y-1.5 text-xs sm:text-sm">
                    <li className="flex items-start space-x-1 sm:space-x-2">
                    <span className="text-cyan-400">•</span>
                    <span className="text-gray-200">High-stakes co-op experience</span>
                    </li>
                    <li className="flex items-start space-x-1 sm:space-x-2">
                    <span className="text-cyan-400">•</span>
                    <span className="text-gray-200">Dynamic role-swapping gameplay</span>
                    </li>
                    <li className="flex items-start space-x-1 sm:space-x-2 hidden sm:flex">
                    <span className="text-cyan-400">•</span>
                    <span className="text-gray-200">Clever level design that tests coordination and patience</span>
                    </li>
                    <li className="flex items-start space-x-1 sm:space-x-2">
                    <span className="text-cyan-400">•</span>
                    <span className="text-gray-200">Built for couples and friends</span>
                    </li>
                </ul>
                
                {/* Closing Text */}
                <div className="space-y-0.5 sm:space-y-2 pt-1 sm:pt-3">
                    <p className="text-xs sm:text-sm text-gray-200 leading-tight sm:leading-relaxed hidden sm:block">
                    Whether you're shouting directions or placing your faith in silence, <span className="text-cyan-400 font-semibold">Blind Trust</span> delivers a chaotic, emotional, and unforgettable multiplayer journey.
                    </p>
                    
                    <p className="text-sm sm:text-base font-bold text-orange-300 text-center">
                    Will your bond survive?
                    </p>
                </div>
                </div>
            </div>
            </div>
                
            {/* Grid 2 */}
            <div className="grid-default-color grid-2 relative overflow-hidden" style={{ padding: 0, margin: 0 }}>
                <video
                    className="absolute inset-0 w-full h-full object-cover hover:opacity-90 transition-opacity"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    controlsList="nodownload" // Optional: removes download button
                >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* Grid 3 */}
             <div 
            className="grid-default-color grid-3"
                    style={{
                    backgroundImage: "url('/src/assets/blindtrustjail.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding: 0,
                    margin: 0
                }}
            >
        </div>
            {/* Grid 4 */}
            <div className="grid-special-color grid-4">
                <div 
                 ref={grid4Container}
                className="flex items-center justify-center w-full h-full">
                    <p className="flex items-end text-5xl text-gray-500">
                        Genre
                    </p>
                    <Card 
                    containerRef={grid4Container}
                    style={{rotate:"40deg", top:"10%",left:"0%"}}
                    text="Co-op"/>
                    <Card 
                     containerRef={grid4Container}
                      style={{rotate:"-30deg", top:"60%",left:"45%"}}
                    text="Multiplayer"/>
                    <Card 
                     containerRef={grid4Container}
                      style={{rotate:"90deg", bottom:"30%",left:"70%"}}
                    text="Indie"/>
                    <Card 
                     containerRef={grid4Container}
                      style={{rotate:"-45deg", top:"75%",left:"0%"}}
                    text="Platformer"/>
                    <Card 
                     containerRef={grid4Container}
                      style={{rotate:"20deg", top:"10%",left:"68%"}}
                    text="Casual"/>
                     <Card 
                      containerRef={grid4Container}
                      style={{rotate:"-70deg", top:"10%",left:"38%"}}
                   image="/src/assets/steam.png"/>
                     <Card 
                      containerRef={grid4Container}
                      style={{rotate:"0deg", top:"80%",right:"38%"}}
                   image="/src/assets/multiplayer.png"/>
                </div>
            </div>
             {/* Grid 5 */}
           <div className="grid-default-color grid-5 flex flex-col items-center justify-center space-y-6">
                <JoinBlindTrust/>
                <PlayBlindTrust/>
            </div>
            
        </div>
    </section>
  )
}

export default BlindTrustGame