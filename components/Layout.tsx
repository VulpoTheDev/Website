import Head from "next/head";
import React, { ReactElement } from "react";

export default function Layout({ children }): ReactElement {
    return (
        <>
            <Head>
                <title>Vulpo</title>
            </Head>
            <div className={"container"}>{children}</div>
        </>
    );
}
