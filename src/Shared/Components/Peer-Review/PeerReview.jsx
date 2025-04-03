import React from 'react'
import { BsDot } from 'react-icons/bs'

function PeerReview() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col gap-5">
                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className="text-[#002C2A] text-center merry   font-semibold  lg:text-2xl   text-lg ">
                                    Peer Review Process
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The International Journal of Sustainable Computing and Green Technologies follows a rigorous double-blind peer review process to ensure the publication of high-quality and impactful research.
                            </p>
                        </section>

                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#002C2A]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Initial Screening
                            </h1>

                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className=""> Scope & Relevance – Ensures the manuscript aligns with IJSCGT’s focus areas.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">Plagiarism & Ethics – Runs plagiarism checks and verifies adherence to ethical guidelines.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">Formatting & Structure – Reviews compliance with journal formatting and citation standards.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">Language & Clarity – Assesses readability and academic writing quality.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">Editorial Decision – Papers meeting criteria proceed to peer review; others may be returned for revision or rejected.</p>
                                </div>



                            </div>
                        </section>
                        <section className="flex flex-col gap-2 ">
                            <h1 className="    merry   font-semibold text-[#002C2A]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Double-Blind Peer Review
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">Manuscripts passing the initial screening are sent to at least two independent reviewers for evaluation.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">The identities of both the authors and reviewers remain anonymous to ensure unbiased assessments.</p>
                                </div>



                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#002C2A]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Author Revisions
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">Based on reviewer feedback, authors may be requested to revise their manuscript.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">A revised version must be submitted within the specified deadline, with a detailed response addressing the reviewers' comments.</p>
                                </div>

                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#002C2A]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Editorial Decision
                            </h1>
                            <p className="text-justify md:text-base text-sm">
                                After revisions, the editorial board makes the final decision:
                            </p>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">Accepted: The manuscript is approved for publication.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">Minor/Major Revisions: The author must make necessary changes before acceptance.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">Rejected: The manuscript does not meet the journal's standards.</p>
                                </div>


                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The decision is communicated to the author via email.
                            </p>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#002C2A]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Final Proof & Publication
                            </h1>

                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">Once accepted, authors receive a final proof for approval before publication.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">The article is published in the upcoming issue and indexed accordingly.</p>
                                </div>
                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <p className="bg-[#AECC53] rounded-lg  p-4">Note to Authors : Carefully review your manuscript against IJSCGT submission guidelines. Ensure that all sections are well-structured, thoroughly developed, and supported by empirical evidence and relevant research in sustainable computing and green technologies.</p>
                        </section>
                    </section>
                </div>
            </section>
        </>
    )
}

export default PeerReview

