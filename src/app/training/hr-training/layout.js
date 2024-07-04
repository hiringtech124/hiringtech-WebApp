import Script from "next/script";

export default function HrLayout({ children }) {
    return (
        <>
            <head>
                <title>HR Training Program | Advance Your HR Career with Free Demo Class</title>
                <meta name="description" content="Join our comprehensive HR training program to enhance your human resources skills. Start with a free demo class and learn from industry experts. Boost your career with practical knowledge and certifications. Enroll now!" />
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