import React from 'react'
import Guideline from '../../Shared/Components/AuthorGuideline/Guideline'
import HelmetComponent from '../Helmet/HelmetProvider'

function GuidelinePage() {
    return (
        <>
            <HelmetComponent title="Author Guidelines - International Journal of Sustainable Computing and Green Technologies" />
            <Guideline />
        </>
    )
}

export default GuidelinePage
