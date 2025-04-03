import React from 'react'
import { BsDot } from 'react-icons/bs'

function About() {
  return (
    <>
      <section className="flex flex-col gap-5 max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
        <div className="  relative">
          <section className="flex flex-col md:gap-10 gap-5">
            <section className="flex flex-col gap-4">
              <h1 className="  text-[#002C2A] text-center merry font-semibold  lg:text-2xl   text-lg ">
                About Us
              </h1>
              <p className="text-justify md:text-base text-sm">
                The International Journal of Sustainable Computing and Green Technologies is a pioneering peer-reviewed, open-access publication that bridges the critical gap between technological innovation and environmental sustainability. Dedicated to advancing research in sustainable computing, the journal focuses on developing energy-efficient technologies, reducing carbon footprints, and creating environmentally friendly IT solutions. Its comprehensive scope encompasses research areas such as green data centers, low-power computing systems, renewable energy integration, and strategies for minimizing the environmental impact of digital technologies. By providing a global platform for researchers, engineers, and policymakers, IJSCGT aims to accelerate technological solutions that address pressing global challenges like climate change, electronic waste reduction, and sustainable digital infrastructure.
              </p>
            </section>
            <section className="flex flex-col gap-4">
              <div className=' '>
                <h1 className="  text-[#002C2A] text-center merry font-semibold  lg:text-2xl   text-lg ">
                  Scope
                </h1>
              </div>
              <p className="text-justify md:text-base text-sm">
                The International Journal of Sustainable Computing and Green Technologies is dedicated to publishing innovative research that integrates computing with sustainability and green technologies. The journal covers a wide range of topics, including but not limited to:              </p>
              <div className='flex flex-col gap-2 md:text-base text-sm'>
                <div className='flex items-center gap-2'>
                  <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />
                  <p className="">Sustainable Computing & Green IT  </p>
                </div>
                <div className='flex items-center gap-2 '>
                  <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />
                  <p className="">Renewable Energy & Smart Systems </p>
                </div>
                <div className='flex items-center gap-2'>
                  <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />
                  <p className="">Cloud Computing & Data Center Optimization </p>
                </div>
                <div className='flex items-center gap-2'>
                  <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />
                  <p className="">Artificial Intelligence for Sustainability </p>
                </div>
                <div className='flex items-center gap-2'>
                  <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />
                  <p className="">E-Waste Management & Circular Economy </p>
                </div>

              </div>
            </section>
            <section className="flex flex-col gap-4">
              <div className=' '>
                <h1 className=" text-[#002C2A] text-center merry  font-semibold  lg:text-2xl   text-lg ">
                  Mission
                </h1>
              </div>
              <p className="text-justify md:text-base text-sm">
                The mission of IJSCGT is to:
              </p>
              <div className='flex flex-col gap-2  md:text-base text-sm'>
                <div className='flex items-center gap-2'>
                  <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />
                  <p className=""><span className='text-[ #002c2a] font-semibold'>Promote Sustainable Innovations </span> –   Encourage research that advances energy-efficient computing and environmentally friendly technologies.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />
                  <p className=""><span className='text-[ #002c2a] font-semibold'>Bridge Academia and Industry</span> – Provide a platform for researchers, engineers, and professionals to collaborate on real-world sustainability challenges.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />
                  <p className=""><span className='text-[ #002c2a] font-semibold'>Support Open Knowledge Sharing</span> –  Publish high-quality, open-access research that is freely available to the global scientific community.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />
                  <p className=""><span className='text-[ #002c2a] font-semibold'>Drive Global Impact</span> – Inspire advancements in sustainable computing that contribute to climate action, resource conservation, and a greener digital future.</p>
                </div>
              </div>
            </section>
            <section>
              <h1 className="bg-[ #002c2a] h-[1px] w-full  "></h1>
            </section>
            <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  md:gap-10 gap-5 h-full'>
              <div className='flex flex-col gap-2 h-full border rounded-lg p-2 border-[#002c2a]'>
                <h2 className='text-[#002c2a] font-bold merry md:text-lg underline underline-offset-2'>Editorial Excellence</h2>
                <div className='flex gap-3 h-full'>
                  <p className="border-l-4 border-l-[#AECC53]"></p>
                  <p className="text-justify  md:text-base text-sm">Our distinguished editorial board comprises leading experts from prestigious research institutions and industrial organizations worldwide. This diverse team ensures rigorous peer review processes and maintains the highest standards of scientific integrity and publication quality.</p>
                </div>
              </div>
              <div className='flex flex-col gap-2 h-full border rounded-lg p-2 border-[#002c2a]'>
                <h2 className='text-[#002c2a] font-bold merry md:text-lg  underline underline-offset-2'>Global Reach and Impact</h2>
                <div className='flex   gap-3'>
                  <p className="border-l-4 border-l-[#AECC53]"></p>
                  <p className="text-justify  md:text-base text-sm">ijscgt has built a strong international readership spanning six continents. Our articles are indexed in major academic databases, ensuring maximum visibility and impact for our authors. We pride ourselves on facilitating meaningful collaborations across geographical boundaries and disciplinary divides.</p>
                </div>
              </div>
              <div className='flex flex-col gap-2 h-full border rounded-lg p-2 border-[#002c2a]'>
                <h2 className='text-[#002c2a] font-bold merry md:text-lg  underline underline-offset-2' >Publication Ethics</h2>
                <div className='flex   gap-3 h-full'>
                  <p className="border-l-4 border-l-[#AECC53]"></p>
                  <p className="text-justify  md:text-base text-sm">We adhere to strict ethical guidelines in scientific publishing. ijscgt maintains transparency in the peer review process, enforces rigorous plagiarism checks, and ensures fair treatment of all submissions regardless of authors' backgrounds or affiliations.</p>
                </div>
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  )
}

export default About
