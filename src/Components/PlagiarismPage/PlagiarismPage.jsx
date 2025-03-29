import React from 'react'
import Plagiarism from '../../Shared/Components/Plagiarism/Plagiarism'
import HelmetComponent from '../Helmet/HelmetProvider'

function PlagiarismPage() {
    return (
        <>
            <HelmetComponent title="Plagiarism - International Journal of Sustainable Computing and Green Technologies" />
            <Plagiarism />
        </>
    )
}

export default PlagiarismPage
