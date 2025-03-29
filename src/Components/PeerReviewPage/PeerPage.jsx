import React from 'react'
import PeerReview from '../../Shared/Components/Peer-Review/PeerReview'
import HelmetComponent from '../Helmet/HelmetProvider'

function PeerPage() {
    return (
        <>
            <HelmetComponent title="Peer Review Process - International Journal of Sustainable Computing and Green Technologies" />
            <PeerReview />
        </>
    )
}

export default PeerPage
