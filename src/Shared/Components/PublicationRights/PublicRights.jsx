import React from 'react'
import { BsDot } from 'react-icons/bs'

function PublicRights() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col gap-5">
                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className="  text-[#002c2a] text-center merry  font-semibold  lg:text-2xl   text-lg ">
                                    Publication Rights Policy
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                International Journal advanced trends in Robotics and Automation implements a balanced publication rights policy that protects both author interests and journal integrity. Our approach focuses on exclusive licensing rather than copyright transfer, ensuring maximum distribution while maintaining authors' intellectual property rights.
                            </p>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#002c2a]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Copyright Policy
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">We maintain a sole and exclusive licence policy for published content rather than copyright transfer</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">Authors retain ownership of their copyright while granting exclusive publishing rights</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">This policy balances author interests with journal sustainability and reputation</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">Some specific cases may require different arrangements - refer to Author Instructions for details</p>
                                </div>
                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className=" merry font-semibold text-[#002c2a]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Key Benefits
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p  >Authors are recognized as the copyright owners, demonstrating our value of author relationships</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p  >Centralized management of permissions and licensing ensures maximum content dissemination</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p  >Protection against infringement, inappropriate use, libel, and plagiarism</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p  >Ability to maintain and monitor the integrity of published content across all media</p>
                                </div>
                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#002c2a]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Rights Management
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">Exclusive rights enable efficient management of content distribution through intermediaries</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">The journal can take protective measures on behalf of authors when necessary</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">Maintaining exclusive rights helps uphold the integrity of peer-reviewed and accepted articles</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">Comprehensive management of content across all media platforms</p>
                                </div>
                            </div>
                        </section>

                    </section>
                </div>
            </section>
        </>
    )
}

export default PublicRights

