import React from 'react';
import SolutionCompany from "../components/PagesSection/SolutionsCompanySection";
import TrustCompanySection from "../components/PagesSection/TrustCompanySection";
import NeedsServices from "../components/PagesSection/NeedsServices";
import SpeakClientComponent from "../components/PagesSection/SpeakClientComponent";

const FirstPage = () => {
    return (
        <>
            <SolutionCompany/>
            <NeedsServices/>
            <TrustCompanySection/>
            <SpeakClientComponent/>
        </>
    );
};

export default FirstPage;
 