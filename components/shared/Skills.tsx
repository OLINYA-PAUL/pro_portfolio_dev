import { stackIcons } from "@/constants/stackIcons";
import SlideIn from "./SlideIn";

function Skills() {
  return (
    <div
      className="skills-container px-4 lg:px-8 my-20 overflow-hidden relative"
      id="about"
    >
      {/* Gradient background with blur */}
      <div className="absolute inset-0 -z-10">
        <div className="animate-pulse absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="animate-pulse absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="animate-pulse absolute top-40 right-40 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <section className="md:max-w-4xl mx-auto lg:max-w-6xl relative">
        <SlideIn direction="left" duration={0.7}>
          <div className="text-left mb-12">
            <h1 className="animate-pulse text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 mb-4">
              No dark patterns, just clean code
            </h1>
            <h2 className="text-2xl font-medium text-white/90">
              debugging in the light, where transparency shines.
            </h2>
          </div>
        </SlideIn>

        {/* GRID SECTION */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Section - True Glassmorphism */}
          <div className="col-span-12 lg:col-span-4">
            <SlideIn direction="bottom" duration={0.7}>
              <div className="p-8 rounded-2xl bg-white/15 backdrop-filter backdrop-blur-lg border border-white/20 shadow-lg text-white">
                <div className="grid grid-cols-2 gap-6">
                  {stackIcons.map((icon, index) => (
                    <div
                      key={index}
                      className="flex items-center py-2 px-3 text-sm font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                      <img
                        className={`w-8 h-8 ${icon.style || ""}`}
                        src={icon.src}
                        alt={icon.name}
                      />
                      <span className="pl-3">{icon.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SlideIn>
          </div>

          {/* Right Section - True Glassmorphism */}
          <div className="col-span-12 lg:col-span-8 font-light text-left tracking-wide text-white/90">
            <SlideIn direction="right" duration={0.7}>
              <div className="rounded-2xl bg-white/15 backdrop-filter backdrop-blur-lg border border-white/20 shadow-lg p-10">
                <p>
                  Before diving into{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 font-medium">
                    software engineering
                  </span>
                  , I started my career in computer hardware repair and{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 font-medium">
                    graphic visual design
                  </span>
                  . This foundation in both technology and creativity sparked my
                  interest in coding, where I could combine{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-medium">
                    problem-solving
                  </span>{" "}
                  with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500 font-medium">
                    artistic expression
                  </span>
                  .
                </p>

                <p className="mt-4">
                  Over time, I specialized in both{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 font-medium">
                    frontend
                  </span>{" "}
                  and
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 font-medium">
                    {" "}
                    backend development
                  </span>
                  , focusing on creating digital solutions that are both
                  functional and visually engaging. With a passion for teaching,
                  I share my knowledge of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500 font-medium">
                    FlutterFlow
                  </span>
                  , helping others build responsive applications.
                </p>

                <p className="mt-4">
                  My approach to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-medium">
                    UI/UX design
                  </span>{" "}
                  is shaped by my background in graphic design and video
                  editing, always keeping aesthetics and user experience at the
                  forefront. For me,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 font-medium">
                    coding
                  </span>{" "}
                  is more than just a job—it's an opportunity to innovate and
                  express creativity, leaving a lasting impact on both the tech
                  world and the people I mentor.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;

// "use client";

// import { stackIcons } from "@/constants/stackIcons";
// import { useEffect, useRef } from "react";

// // Custom hook for reveal animations
// const useReveal = () => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("reveal");
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);

//   return ref;
// };

// function Skills() {
//   return (
//     <section className="relative py-24 overflow-hidden">
//       {/* Pure gradient background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-black"></div>
//         <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 filter blur-[80px]"></div>
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 filter blur-[80px]"></div>
//         <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-purple-500/10 filter blur-[80px]"></div>
//       </div>

//       {/* Content container */}
//       <div className="container mx-auto px-4 md:px-6 relative">
//         {/* Section header */}
//         <header className="mb-20 text-center" ref={useReveal()}>
//           <div className="inline-block mb-3 px-3 py-1 rounded-full backdrop-blur-md bg-white/5 border border-white/10">
//             <span className="text-xs font-medium tracking-wider text-blue-300 uppercase">
//               Technical Proficiency
//             </span>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Skills & Expertise
//           </h2>
//           <p className="max-w-2xl mx-auto text-slate-300 text-lg">
//             Mastering the art of clean code and innovative solutions
//           </p>
//         </header>

//         {/* Main content area */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
//           {/* Left side - Expertise narrative */}
//           <div
//             ref={useReveal()}
//             className="opacity-0 transition-all duration-1000 delay-100"
//           >
//             <div className="h-full p-8 md:p-10 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl relative overflow-hidden">
//               {/* Subtle glass shine effect */}
//               <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>

//               <h3 className="text-2xl font-medium text-white mb-6 relative">
//                 Professional Journey
//               </h3>

//               <div className="space-y-6 text-slate-200 relative z-10">
//                 <p className="leading-relaxed">
//                   My journey began in
//                   <span className="text-blue-300 font-medium">
//                     {" "}
//                     hardware engineering
//                   </span>{" "}
//                   and
//                   <span className="text-teal-300 font-medium">
//                     {" "}
//                     visual design
//                   </span>
//                   , providing me with a unique perspective where technical
//                   precision meets creative expression.
//                 </p>

//                 <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

//                 <p className="leading-relaxed">
//                   Today, I bridge the gap between
//                   <span className="text-cyan-300 font-medium">
//                     {" "}
//                     frontend elegance
//                   </span>{" "}
//                   and
//                   <span className="text-purple-300 font-medium">
//                     {" "}
//                     backend robustness
//                   </span>
//                   , developing solutions that are both functionally powerful and
//                   visually compelling.
//                 </p>

//                 <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

//                 <p className="leading-relaxed">
//                   My approach to
//                   <span className="text-amber-300 font-medium">
//                     {" "}
//                     UI/UX design
//                   </span>{" "}
//                   is deeply influenced by my background, ensuring that
//                   technological innovation never compromises human experience
//                   and accessibility.
//                 </p>

//                 <div className="relative mt-8 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10">
//                   <blockquote className="text-sm italic text-slate-300">
//                     "Code is poetry written for both machines and humans to
//                     understand."
//                   </blockquote>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right side - Skills showcase */}
//           <div
//             ref={useReveal()}
//             className="opacity-0 transition-all duration-1000 delay-300"
//           >
//             <div className="h-full p-8 md:p-10 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl relative overflow-hidden">
//               {/* Subtle glass shine effect */}
//               <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>

//               <h3 className="text-2xl font-medium text-white mb-6 relative">
//                 Technical Stack
//               </h3>

//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
//                 {stackIcons.map((icon, index) => (
//                   <div key={index} className="group relative">
//                     <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
//                     <div className="relative p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-300">
//                       <div className="flex flex-col items-center text-center space-y-3">
//                         <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-slate-900/80 to-black/80 rounded-lg p-2.5 shadow-lg">
//                           <img
//                             className={`w-full h-full object-contain ${
//                               icon.style || ""
//                             }`}
//                             src={icon.src}
//                             alt={icon.name}
//                           />
//                         </div>
//                         <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors duration-300">
//                           {icon.name}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Additional context */}
//               <div className="mt-8 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10">
//                 <p className="text-sm text-slate-300">
//                   Continuously expanding my skill set with emerging technologies
//                   and best practices in software development.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom feature - Mentorship & approach */}
//         <div
//           ref={useReveal()}
//           className="opacity-0 transition-all duration-1000 delay-500 mt-8"
//         >
//           <div className="p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

//             <div className="flex flex-col md:flex-row gap-8 items-center">
//               <div className="w-full md:w-1/3">
//                 <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-white/10 flex items-center justify-center p-8">
//                   <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-10 w-10 text-blue-300"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={1.5}
//                         d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>

//               <div className="w-full md:w-2/3">
//                 <h3 className="text-xl font-medium text-white mb-4">
//                   Philosophy & Mentorship
//                 </h3>
//                 <p className="text-slate-300 leading-relaxed">
//                   I believe in sharing knowledge and fostering growth within the
//                   development community. Through mentorship and teaching,
//                   particularly with{" "}
//                   <span className="text-teal-300 font-medium">FlutterFlow</span>{" "}
//                   and modern web technologies, I help others transform their
//                   ideas into reality while maintaining a strong commitment to
//                   clean, maintainable code and ethical development practices.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for animations */}
//       <style jsx>{`
//         .reveal {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Skills;
