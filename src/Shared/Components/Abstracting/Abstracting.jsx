import React from 'react'
import { BsDot } from 'react-icons/bs'

function Abstracting() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col gap-5">
                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className="text-[#002c2a] text-center merry   font-semibold  lg:text-2xl   text-lg ">
                                    Abstracting and Indexing
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                            The International Journal of Sustainable Computing and Green Technologies (IJSCGT) is committed to ensuring the visibility and accessibility of published research. Our journal is indexed in various reputed databases to enhance the reach and impact of our articles.                            </p>
                        </section>

                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#002c2a]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Indexing Databases
                            </h1>

                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />
                                    <p className=""> Google Scholar</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />
                                    <p className="">Scopus (under evaluation)</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />
                                    <p className="">DOAJ (Directory of Open Access Journals)</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />
                                    <p className="">CrossRef (DOI Assignment for published articles)</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />
                                    <p className="">ResearchGate</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />
                                    <p className="">Semantic Scholar</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />
                                    <p className="">BASE (Bielefeld Academic Search Engine)</p>
                                </div>



                            </div>
                        </section>
                        <section className="flex flex-col gap-2  md:text-base text-sm">
                            <h1 className="    merry   font-semibold text-[#002c2a]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Benefits of Indexing
                            </h1>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />
                                    <p className="">Increased discoverability and citation potential.   </p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />
                                    <p className="">Global accessibility to researchers, scholars, and industry professionals.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center bg-[#AECC53] rounded-full  text-[#AECC53] text-xs" />
                                    <p className="">Enhanced credibility and recognition within the academic community.</p>
                                </div>



                            </div>
                            <p className="text-justify md:text-base text-sm">
                                We continuously strive to expand our indexing coverage to maximize the dissemination of published research.
                            </p>
                        </section>




                    </section>
                </div>
            </section>
        </>
    )
}

export default Abstracting

