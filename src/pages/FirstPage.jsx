import React from 'react';
import SolutionCompany from "../components/PagesSection/SolutionsCompanySection";
import TrustCompanySection from "../components/PagesSection/TrustCompanySection";
import NeedsServices from "../components/PagesSection/NeedsServices";
import SpeakClientComponent from "../components/PagesSection/SpeakClientComponent";
import SecondSection from "../components/PagesSection/SecondSection";

const FirstPage = () => {
    return (
        <>
            <SolutionCompany/>
            <SecondSection/>
            <NeedsServices/>
            <TrustCompanySection/>
            <SpeakClientComponent/>
        </>
    );
};

export default FirstPage;
 