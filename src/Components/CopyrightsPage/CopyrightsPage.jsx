import React from 'react'
import Copyrights from '../../Shared/Components/Copyrights/Copyrights'
import HelmetComponent from '../Helmet/HelmetProvider'

function CopyrightsPage() {
    return (
        <>
            <HelmetComponent title="Copyrights - International Journal of Sustainable Computing and Green Technologies" />
            <Copyrights />
        </>
    )
}

export default CopyrightsPage
