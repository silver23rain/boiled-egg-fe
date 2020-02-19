import React from "react";
import Header from "../Common/header";

const DefaultTemplate = main => {
    return (
        <>
            <Header />
            {main}
        </>
    );
};

export default DefaultTemplate;
