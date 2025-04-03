import React from 'react'
import { BsDot } from 'react-icons/bs'

function Copyrights() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
                <div className="  relative">

                    <section className="flex flex-col md:gap-10 gap-5">
                        <section className='grid   grid-cols-1   gap-2'>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-[ #002c2a] font-bold merry md:text-lg underline underline-offset-2'>Copyright Transfer:</h2>
                                <div className='flex   gap-3'>
                                     <p className="text-justify  md:text-base text-sm">By signing this form, the author(s) transfer the copyright of the article to IJSCGT, effective if and when the article is accepted for publication. The copyright transfer covers the exclusive right to reproduce and distribute the article, including reprints, translations, photographic reproductions, microform, electronic form, or any other reproductions of similar nature.</p>
                                </div>
                            </div>
                            <p className="">The author(s) retain:</p>
                            <ol className="list-disc  pl-5  space-y-2  ">
                                <li className="  ">
                                    I/We shall not publish the aforementioned contribution elsewhere without prior written consent from the publisher, unless it has undergone significant modifications.
                                </li>
                                <li className="  ">
                                    I/We confirm that the submission is original, except for any excerpts from copyrighted works included with proper permissions. It contains no libelous statements and does not infringe upon any copyright, trademark, patent, statutory right, or proprietary rights of others. The corresponding author accepts responsibility on behalf of all co-authors.                                        </li>
                                <li className="  ">
                                    I/We affirm that we have the authority to enter into this agreement. The article contains no unlawful or harmful content, does not violate any copyright or trademark laws, and does not infringe on the rights or privacy of others. Any factual statements presented are either true or based on reasonable research.
                                </li>
                                <li className="">
                                    I/We agree to indemnify the editors of ijscgt against any claims or expenses arising from a breach of this declaration.
                                </li>
                            </ol>
                        </section>
                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className="text-[#002C2A] text-center merry   font-semibold  lg:text-2xl   text-lg ">
                                    Declaration
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                I/We ____________________________, the author(s) of the research paper/article entitled ______________________, hereby grant permission for the publication of the above-mentioned paper/article in International Journal of Sustainable Computing and Green Technologies.
                            </p>
                            <p className="text-justify md:text-base text-sm">
                                <p className=""> It is agreed that :</p>
                                <ol className="list-decimal list-inside space-y-2">
                                    <li className="  ">
                                        I/We shall not publish the aforementioned contribution elsewhere without prior written consent from the publisher, unless it has undergone significant modifications.
                                    </li>
                                    <li className="  ">
                                        I/We confirm that the submission is original, except for any excerpts from copyrighted works included with proper permissions. It contains no libelous statements and does not infringe upon any copyright, trademark, patent, statutory right, or proprietary rights of others. The corresponding author accepts responsibility on behalf of all co-authors.                                        </li>
                                    <li className="  ">
                                        I/We affirm that we have the authority to enter into this agreement. The article contains no unlawful or harmful content, does not violate any copyright or trademark laws, and does not infringe on the rights or privacy of others. Any factual statements presented are either true or based on reasonable research.
                                    </li>
                                    <li className="">
                                        I/We agree to indemnify the editors of ijscgt against any claims or expenses arising from a breach of this declaration.
                                    </li>
                                </ol>
                            </p>
                            <div className='flex justify-between'>
                                <div>
                                    <p className="">Date : </p>
                                    <p className="">Mobile : </p>
                                </div>
                                <div className='text-center'>
                                    <p className="">Author's Signature : </p>
                                    <p className="">Author Name(s) : </p>
                                    <p className="">Address : </p>
                                </div>
                            </div>
                        </section>

                    </section>
                </div>
            </section>
        </>
    )
}

export default Copyrights
