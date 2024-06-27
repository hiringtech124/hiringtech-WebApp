
export default function Blog7Layout({ children }) {
    return (
        <>
            <head>
                <title>Unlocking Success: 7 Key Benefits of Partnering with a Recruitment Agency</title>
                <meta name="description" content="Discover the top advantages of using a recruitment agency. From accessing top talent to saving time and resources, learn how partnering with a recruitment agency can propel your hiring efforts forward." />
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