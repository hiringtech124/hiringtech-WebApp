import Script from "next/script";

export default function ContactLayout({ children }) {
    return (
        <>
            <head>
                <title>Connect with Hiring Tech - IT Consulting & Training Services</title>
                <meta name="description" content="Need IT consulting or training? Contact Hiring Tech for professional support and services. Our team is available to answer your inquiries and provide the assistance you need. Visit our contact page for more information on how to reach us." />
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