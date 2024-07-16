import Script from "next/script";

export default function ReactLayout({ children }) {
    return (
        <>
            <head>
                <title>Is ReactJS Worth Learning? Top 10 Reasons to Learn ReactJS Today</title>
                <meta name="description" content="Discover why ReactJS is a must-learn for developers. Explore the top 10 reasons to learn ReactJS, from career growth to its powerful features. Start mastering ReactJS now!" />
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