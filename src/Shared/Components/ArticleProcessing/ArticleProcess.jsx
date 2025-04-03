import React from 'react'
import { BsDot } from 'react-icons/bs'

function ArticleProcess() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col gap-5">
                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className="text-[#002c2a] text-center merry   font-semibold  lg:text-2xl   text-lg ">
                                    Article Processing
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The International Journal of Sustainable Computing and Green Technologies follows a structured article processing workflow to ensure timely and high-quality publication of research articles.
                            </p>
                        </section>

                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#002c2a]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Submission
                            </h1>

                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className=""> Authors submit their manuscripts through the journal’s online submission system.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">A confirmation email is sent upon successful submission.</p>
                                </div>
                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#002c2a]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Editorial Screening
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">The editorial team conducts a preliminary check for plagiarism, formatting compliance, and relevance to the journal’s scope.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">Manuscripts not meeting the criteria may be returned for modifications.</p>
                                </div>

                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#002c2a]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Acceptance and Proofreading
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">Manuscripts undergo a double-blind peer review by at least two independent reviewers.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">Authors receive constructive feedback and are required to submit revisions if necessary.</p>
                                </div>

                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#002c2a]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                DOI Assignment & Online Publication
                            </h1>

                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">Each article is assigned a Digital Object Identifier (DOI) for permanent accessibility.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                     <BsDot className=" flex items-center  bg-[#AECC53] md:p-0 p-1.5 rounded-full text-[#AECC53] md:text-xs " />
                                    <p className="">The article is published online and made available for indexing.</p>
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

export default ArticleProcess

