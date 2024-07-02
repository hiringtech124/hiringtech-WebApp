import Script from "next/script";
export default function AboutLayout({ children }) {
    return (
        <>
            <head>
                <title> About Hiring Tech - Leading IT Consultancy & Training Experts</title>
                <meta name="description" content="Learn about Hiring Tech, the premier provider of IT consulting, recruitment, and training services. Meet our team of experts dedicated to delivering tailored solutions and exceptional support. Discover how we drive success for businesses and individuals." />
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