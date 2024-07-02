import Script from "next/script";
export default function InsightLayout({ children }) {
    return (
        <>
            <head>
                <title>Latest IT Insights & Trends - Hiring Tech Blog </title>
                <meta name="description" content="Stay updated with Hiring Tech's blog for the latest IT insights, industry trends, and expert opinions. Explore articles on digital marketing, blockchain, quantum computing, and more. Join our community of tech enthusiasts and keep your knowledge current." />
                <Script id="inline-script" async src="https://www.googletagmanager.com/gtag/js?id=G-6TKGW738HL" />
                <Script id="inline-script" dangerouslySetInnerHTML={
                    {
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6TKGW738HL');
          `}
                }

                />
            </head>
            <div>{children}</div>
        </>
    );
}