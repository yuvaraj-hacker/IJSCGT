import React from 'react'
import Issues from '../../Shared/Components/Issues/Issues'
import HelmetComponent from '../Helmet/HelmetProvider'

function IssuePage() {
    return (
        <>
            <HelmetComponent title="Issues - International Journal of Sustainable Computing and Green Technologies" />
            <Issues />
        </>
    )
}

export default IssuePage
