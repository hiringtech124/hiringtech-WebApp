import Script from "next/script";

export default function RecruitmentLayout({ children }) {
    return (
        <>
            <head>
                <title>Recruitment Solutions - Hiring Tech | Recruitment & Staffing Services</title>
                <meta name="description" content="Discover Hiring Tech's specialized recruitment solutions, offering expert staffing services and comprehensive support for businesses. Our tailored programs and industry expertise help you find the right talent and achieve success in the evolving job market." />
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
