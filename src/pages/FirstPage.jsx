import React from 'react';
import SolutionCompany from "../components/PagesSection/SolutionsCompanySection";
import TrustCompanySection from "../components/PagesSection/TrustCompanySection";
import NeedsServices from "../components/PagesSection/NeedsServices";

const FirstPage = () => {
    return (
        <>
            <SolutionCompany/>
            <NeedsServices/>
            <TrustCompanySection/>
        </>
    );
};

export default FirstPage;
 