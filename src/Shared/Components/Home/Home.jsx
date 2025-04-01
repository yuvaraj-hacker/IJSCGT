import React from "react";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
function Home() {
  return (
    <>
      <section className="flex flex-col md:gap-10 gap-5  max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
        <div className="relative">
          <section className="flex flex-col md:gap-10 gap-5">
            <section className="flex justify-between flex-wrap lg:flex-nowrap gap-5">
              <img className="mx-auto   border-[#002c2a]  " src="/assets/Images/greene.png" alt="" />
              <div className="flex flex-col justify-evenly md:gap-0 gap-3">
                <p className="text-justify md:text-base text-sm">
                  <strong className="text-[#002c2a]">
                    The International Journal of Sustainable Computing and Green Technologies (IJSCGT)
                  </strong>{" "}
                  is a scholarly, peer-reviewed journal dedicated to research in sustainable computing, energy-efficient technologies, and environmentally friendly innovations in the field of computer science and engineering. It aims to promote advancements in green computing, renewable energy applications in IT, eco-friendly hardware and software development, and sustainable digital infrastructures. The journal welcomes original research articles, reviews, and case studies that contribute to reducing the environmental impact of technology while enhancing computational efficiency and sustainability.
                </p>
                <Link to='/about' className="w-fit">
                  <button className="md:p-3 p-2  rounded-full bg-[#AECC53] text-[#002c2a]  font-semibold   shadow-md  duration-300 cursor-pointer w-[170px]">
                    Read More
                  </button>
                </Link>
              </div>
            </section>

            <section className="flex flex-col gap-4  ">
              <div className=' '>
                <h1 className="text-[#002C2A] text-center merry   font-semibold  lg:text-2xl   text-lg ">
                  Journal  overview
                </h1>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-5 gap-3 grid-cols-1  h-full  ">
                <div className="flex flex-col justify-between   ">
                  <div className="  flex flex-col gap-2 h-full  ">
                    <div className="flex  gap-3 items-center " >
                      <h2 className="text-[ #002c2a] font-bold merry md:text-lg underline underline-offset-2  ">Open Access</h2>
                      <img src="/assets/Images/Checkmark.png" className="w-5" alt="" />
                    </div>
                    <div className="flex gap-4">
                      <p className="border-l-4 border-l-[#AECC53]"></p>
                      <p className=" md:text-base text-sm text-justify">IJSCGT follows a fully open-access publishing model, ensuring that all published articles are freely accessible to a global audience without any subscription or paywall restrictions. This allows for the broad dissemination of knowledge and maximizes research impact.</p>
                    </div>
                  </div>
                </div>
                <div className="  flex flex-col justify-between ">
                  <div className="  flex flex-col gap-2 h-full">
                    <div className="flex  gap-3 items-center">
                      <h2 className="text-[ #002c2a] font-bold merry md:text-lg underline underline-offset-2">Peer Review</h2>
                      <img src="/assets/Images/Checkmark.png" className="w-5" alt="" />
                    </div>
                    <div className="flex gap-4 h-full">
                       <p className="border-l-4 border-l-[#AECC53]"></p>
                      <p className=" md:text-base text-sm text-justify">IJSCGT upholds the highest standards of academic integrity through a rigorous blind peer-review process. Each submitted manuscript undergoes evaluation by expert reviewers to ensure originality, scientific quality, and relevance to the field.</p>
                    </div>
                  </div>
                </div>
                <div className="  flex flex-col justify-between ">
                  <div className="   flex flex-col gap-2">
                    <div className="flex  gap-3 items-center">
                      <h2 className="text-[ #002c2a] font-bold merry md:text-lg underline underline-offset-2">Indexing</h2>
                      <img src="/assets/Images/Checkmark.png" className="w-5" alt="" />
                    </div>
                    <div className="flex gap-4">
                      <p className="border-l-4 border-l-[#AECC53]"></p>
                      <p className=" md:text-base text-sm text-justify">To enhance the visibility and impact of published research, all articles in IJSCGT adhere to advanced SEO standards and are optimized for maximum discoverability on search engines. The journal is committed to continuous efforts for indexing in leading academic databases and repositories.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-4">
              <div className=' '>
                <h1 className="text-[#002C2A] text-center merry   font-semibold  lg:text-2xl   text-lg ">
                  The Journal covers following areas
                </h1>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-3">
                {["Energy-efficient computing", "Green software engineering", "AI for sustainability", "Blockchain for green computing", "Quantum computing & sustainability", "Eco-friendly algorithms", "Sustainable cybersecurity", "Edge & fog computing", "Smart grids & renewable energy", "IoT for sustainability", "Sustainable big data analytics", "Ethical AI & governance", "Low-power hardware design", "AI-driven energy management", "Smart metering & analytics", "Digital twins for energy efficiency", "Energy harvesting in computing", "Power-efficient networking", "Green battery technologies", "Smart grid security", "IoT-based waste management", "Smart home energy management", "Green supply chain & logistics", "Wearable tech for sustainability", "Sustainable transportation systems", "AI for water conservation", "Eco-friendly data structures", "AI bias mitigation for sustainability", "Sustainable quantum cryptography", "Low-energy security protocols", "Energy-aware cloud computing", "Green AI model training", "Carbon footprint reduction", "Sustainable data centers", "E-waste management", "Circular economy in computing", "AI for climate change", "Green blockchain applications", "AI for waste management", "Sustainable semiconductor production", "Biodegradable electronics", "Reverse logistics in IT", "Refurbished IT hardware", "AI for precision farming", "Machine learning for sustainability", "AI-powered environmental monitoring", "Green cyber-physical systems", "AI for natural disaster management", "Sustainable cloud storage", "Edge AI for energy savings", "Carbon-neutral computing", "Greener IoT architectures", "Sustainable coding practices", "AI for eco-friendly agriculture"
                ].map((topics, index) => (
                  <div key={index} className="flex items-center gap-2 mb-1">
                    <BsDot className=" flex items-center bg-[#AECC53] text-xs rounded-full  text-[#AECC53]" />
                    <h1 className="md:text-base text-sm">{topics}</h1>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </div>
        <section className="bg-[#002C2A] rounded-2xl">
          <div className="text-center flex flex-col gap-2 mx-auto max-w-[50rem] md:py-5 py-3 px-4 text-white ">
            <p className="  md:text-base text-sm text-justify md:text-center">
              We publish original research articles, review articles and technical notes. The journal reviews papers within two weeks of submission and publishes accepted articles on the internet immediately upon receiving the final versions.
              <span className="text-[ #002c2a] font-bold">   Our fast reviewing process is our strength. </span>
            </p>
            <div className="flex items-center md:gap-4 ">
              <i className="fi fi-tr-calendar text-white "></i>
              <h1 className="bg-[#AECC53] text-[#002C2A] py-2 font-semibold md:text-base text-sm  w-full  text-center mx-auto p-3">
                Launch of Next Issue: 28
                <sup>th</sup> Oct 2025
              </h1>
            </div>
            <h1 className="  ">With Warm Regards,</h1>
            <h1 className="  font-semibold  md:text-base text-sm">
              Editor-in-chief
            </h1>
            <h1 className="  font-semibold md:text-base text-sm uppercase">ijscgt</h1>
          </div>
        </section>
      </section>
    </>
  );
}
export default Home;
