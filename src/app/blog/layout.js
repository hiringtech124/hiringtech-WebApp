
export default function InsightLayout({ children }) {
    return (
        <>
            <head>
                <title>Latest IT Insights & Trends - Hiring Tech Blog </title>
                <meta name="description" content="Stay updated with Hiring Tech's blog for the latest IT insights, industry trends, and expert opinions. Explore articles on digital marketing, blockchain, quantum computing, and more. Join our community of tech enthusiasts and keep your knowledge current." />
            </head>
            <div>{children}</div>
        </>
    );
}