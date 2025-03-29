import React from 'react'
import PublicRights from '../../Shared/Components/PublicationRights/PublicRights'
import HelmetComponent from '../Helmet/HelmetProvider'

function PublicRightsPage() {
    return (
        <>
            <HelmetComponent title="Publication Rights - International Journal of Sustainable Computing and Green Technologies" />
            <PublicRights />
        </>
    )
}

export default PublicRightsPage
