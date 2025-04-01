import React from 'react'
import { BsDot } from 'react-icons/bs'

function Plagiarism() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col gap-5">
                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className="text-[#002c2a] text-center merry  font-semibold  lg:text-2xl   text-lg ">
                                    Plagiarism Policy
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                International Journal of Sustainable Computing and Green Technologies (IJSCGT) maintains a strict zero-tolerance policy against plagiarism. All submitted manuscripts undergo rigorous plagiarism screening to ensure academic integrity.                            </p>                        </section>

                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#002c2a]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Plagiarism Detection
                            </h1>

                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />

                                    <p className=""> All submissions are checked using plagiarism detection software.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />

                                    <p className="">Manuscripts with more than 10% similarity (excluding references) may be returned for revision or rejected.</p>
                                </div>
                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#002c2a]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Types of Plagiarism
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                      <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />

                                    <p  ><span className='text-[ #002c2a] font-semibold'>Direct Plagiarism:</span> Copying text verbatim without proper citation.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />

                                    <p  ><span className='text-[ #002c2a] font-semibold'>Self-Plagiarism:</span> Reusing one’s own previously published work without disclosure.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />

                                    <p  ><span className='text-[ #002c2a] font-semibold'>Mosaic Plagiarism:</span> Mixing copied phrases with original text without proper acknowledgment.  </p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />

                                    <p  ><span className='text-[ #002c2a] font-semibold'>Improper Paraphrasing:</span> Rewording another author’s work without appropriate citation.</p>
                                </div>


                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#002c2a]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Consequences of Plagiarism
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />

                                    <p className="">Manuscripts with minor plagiarism are sent back for immediate correction.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />

                                    <p className="">Papers with significant plagiarism are outright rejected.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />

                                    <p className="">Authors found guilty of plagiarism may be blacklisted from future submissions.</p>
                                </div>

                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#002c2a]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Best Practices to Avoid Plagiarism
                            </h1>

                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />

                                    <p className="">Rephrase concepts in your own words while maintaining original meaning.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />

                                    <p className="">Properly cite all sources and use quotation marks when necessary.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />

                                    <p className="">Utilize plagiarism detection tools before submission.</p>
                                </div>

                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#002c2a]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Post-Publication
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />

                                    <p className="">The article is indexed in relevant academic databases.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />

                                    <p className="">Authors receive a notification regarding citation tracking and dissemination.</p>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Plagiarism

