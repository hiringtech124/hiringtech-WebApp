
export default function Blog4Layout({ children }) {
    return (
        <>
            <head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-6TKGW738HL" />
                <script dangerouslySetInnerHTML={
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