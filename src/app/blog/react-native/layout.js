import Script from "next/script";

export default function NativeLayout({ children }) {
    return (
        <>
            <head>
                <title>Kickstart Your Mobile App Development: A Beginner's Guide to React Native</title>
                <meta name="description" content="Discover how to start your mobile app development journey with React Native. This beginner's guide covers the essentials, providing you with the knowledge to build your first mobile app. Learn the basics, key features, and step-by-step instructions to get you started with React Native today." />
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