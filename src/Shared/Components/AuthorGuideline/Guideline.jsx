import React from 'react'
import { BsDot } from 'react-icons/bs'

function Guideline() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col md:gap-10 gap-5">
                        <section className="flex flex-col gap-4">
                            <div className=''>
                                <h1 className="text-[#002c2a] text-center merry  font-semibold  lg:text-2xl   text-lg ">
                                    Author Guidelines
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                International Journal of Sustainable Computing and Green Technologies (IJSCGT) welcomes high-quality, original research contributions in the fields of robotics, automation, artificial intelligence, and related disciplines. Authors must adhere to the following guidelines when preparing and submitting their manuscripts.
                            </p>
                        </section>

                        <section className="flex flex-col gap-4">
                            <div className=''>
                                <h1 className="text-[#002c2a] text-center merry  font-semibold  lg:text-2xl   text-lg ">
                                    Publishing Requirements
                                </h1>
                            </div>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />

                                    <p className="">  Manuscripts must strictly follow the IJSCGT template and adhere to proper formatting guidelines</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />

                                    <p className=""> Abstracts should be between 200–1000 characters, structured clearly with concise objectives, methodology, and findings.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />

                                    <p className=""> Include 3 to 8 keywords to enhance indexing and searchability.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />

                                    <p className=""> References must comply with the IEEE/APA citation style, ensuring consistency and accuracy.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />

                                    <p className="">  Maintain proper grammar, spelling, and formal academic English throughout the manuscript.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />

                                    <p className=""> All figures and tables must have descriptive captions and be appropriately referenced in the text.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />

                                    <p className=""> Ethical approval statements must be provided where applicable, particularly for studies involving human or animal subjects.</p>
                                </div>

                            </div>
                        </section>
                        <section className="flex flex-col gap-4  md:text-base text-sm">
                            <div className=''>
                                <h1 className="text-[#002c2a] text-center merry  font-semibold  lg:text-2xl   text-lg ">
                                    Submission Process
                                </h1>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />

                                    <p className=""><span className='text-[ #002c2a] font-semibold'>Initial Manuscript Screening  </span> – The editorial team evaluates submissions for scope, quality, and adherence to guidelines.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />

                                    <p className=""><span className='text-[ #002c2a] font-semibold'>Double-Blind Peer Review </span> – Manuscripts are reviewed by at least two independent experts to ensure scholarly integrity.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />

                                    <p className=""><span className='text-[ #002c2a] font-semibold'>Author Revision Period</span> – Authors receive reviewer feedback and are provided with clear deadlines for revisions.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />

                                    <p className=""><span className='text-[ #002c2a] font-semibold'>Final Editorial Decision</span> –  The editorial board makes the final decision based on reviewer recommendations.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />

                                    <p className=""><span className='text-[ #002c2a] font-semibold'>Publication & Licensing </span> – Articles are published under a Creative Commons license for maximum visibility.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />

                                    <p className=""><span className='text-[ #002c2a] font-semibold'>DOI Assignment  </span> –  Each article is assigned a unique DOI for permanent identification and citation.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />

                                    <p className=""><span className='text-[ #002c2a] font-semibold'>Digital Archiving  </span> – Published research is digitally archived to ensure long-term availability and accessibility.</p>
                                </div>
                            </div>
                        </section>

                    </section>
                </div>
            </section>
        </>
    )
}

export default Guideline
