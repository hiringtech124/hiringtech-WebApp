import Script from "next/script";
import Header from '@/components/Header/Header';
import Footer from '@/components/placementPage/footer/Footer';

export default function ServicesLayout({ children }) {
    return (
        <>
            <head>
                <title>Comprehensive IT Services - Hiring Tech | Training & Solutions </title>
                <meta name="description" content="Explore Hiring Tech's wide range of IT services, including expert training, innovative tech solutions, and comprehensive support for businesses. Our tailored programs and industry expertise help you achieve success in the evolving tech landscape." />
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
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </>
    );
}
