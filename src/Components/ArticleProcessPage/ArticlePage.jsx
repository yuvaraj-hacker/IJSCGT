import React from 'react'
import ArticleProcess from '../../Shared/Components/ArticleProcessing/ArticleProcess'
import HelmetComponent from '../Helmet/HelmetProvider'

function ArticlePage() {
    return (
        <>
            <HelmetComponent title="Article Processing - International Journal of Sustainable Computing and Green Technologies" />
            <ArticleProcess />
        </>

    )
}

export default ArticlePage
