import Script from "next/script";

export default function ReactNativeLayout({ children }) {
    return (
        <>
            <head>
                <title>React Native Training Course | Master Mobile Development with Free Demo Class</title>
                <meta name="description" content="Join our React Native training course to master mobile app development. Start with a free demo class and learn from expert instructors. Boost your career with hands-on training and real-world projects. Enroll now!" />
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