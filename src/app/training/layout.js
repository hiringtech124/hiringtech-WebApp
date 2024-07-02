import Script from "next/script";

export default function TrainingLayout({ children }) {
    return (
        <>
            <head>
                <title>IT Training & Certification - Guaranteed Placement | Hiring Tech</title>
                <meta name="description" content="Join Hiring Tech’s IT training courses and get certified with a 100% placement guarantee. Our programs cover essential tech skills, communication workshops, and resume services. Learn remotely and advance your career with us." />
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