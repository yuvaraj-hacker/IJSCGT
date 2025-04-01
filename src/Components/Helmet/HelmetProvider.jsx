import { Helmet } from "react-helmet";

const HelmetComponent = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <title>International Journal of Sustainable Computing and Green Technologies (IJSCGT)</title>
            <meta name="keywords" content="International Journal of Sustainable Computing and Green Technologies, IJSCGT, Sustainable Computing research journals, Green Technologies research journal, Advanced sustainable computing journal, Sustainable computing and green technologies studies" />
            <meta name="description" content="The International Journal of Sustainable Computing and Green Technologies (IJSCGT) publishes high-quality research in sustainable computing, green technologies, AI, and advanced engineering fields." />
            <meta name="author" content="IJSCGT Editorial Team" />
            <meta name="robots" content="index, follow" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Journal of Sustainable Computing and Green Technologies (IJSCGT)" />
            <meta property="og:description" content="The International Journal of Sustainable Computing and Green Technologies (IJSCGT) publishes high-quality research in sustainable computing, green technologies, AI, and advanced engineering fields." />
            <meta property="og:url" content="https://ijscgt.com/" />
            <meta property="og:image" content="https://ijscgt.com/assets/Images/IJSCGT.png" />
            <link rel="canonical" href="https://ijscgt.com/" />
            <link rel="icon" type="image/png" href="https://ijscgt.com/assets/Images/favi.png" />
        </Helmet>
    );
};

export default HelmetComponent;
