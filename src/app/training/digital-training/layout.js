import Script from "next/script";

export default function DgLayout({ children }) {
    return (
        <>
            <head>
                <title>Digital Marketing Training Course | Boost Your Career with Free Demo Class</title>
                <meta name="description" content="Join our expert-led Digital Marketing training course and enhance your marketing skills. Start with a free demo class and learn SEO, social media, PPC, and more. Gain hands-on experience and certification. Enroll now!" />
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