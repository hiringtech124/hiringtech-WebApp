import Script from "next/script";

export default function ReactjsLayout({ children }) {
    return (
        <>
            <head>
                <title>ReactJS Training Course | Learn React Online with Free Demo Class</title>
                <meta name="description" content="Join our comprehensive ReactJS training course and master React development. Get started with a free demo class! Learn from expert instructors and boost your career in web development. Enroll now!" />
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