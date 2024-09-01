import './globals.css';
import { headers } from 'next/headers';
import { SubdomainProvider } from '@/context/SubdomainContext';

export default function RootLayout({ children }) {
    const headersList = headers();
    const host = headersList.get('host');
    const subdomain = host.split('.')[0];

    const themeClass = subdomain === 'subdomain1'
        ? 'theme-subdomain1'
        : subdomain === 'subdomain2'
            ? 'theme-subdomain2'
            : 'theme-default';

    const data = subdomain === 'subdomain1'
        ? {data: "test JSON subdomain1"}
        : subdomain === 'subdomain2'
            ? {data: "test JSON subdomain2"}
            : {data: "test JSON DEFAULT subdomain"};


    let title = "Default Title";
    let favicon = "/default-favicon.ico";

    if (subdomain === 'subdomain1') {
        title = "Subdominio 1";
        favicon = "/subdomain1-favicon.ico";
    } else if (subdomain === 'subdomain2') {
        title = "Subdominio 2";
        favicon = "/subdomain2-favicon.ico";
    }
    return (
        <html lang="en">
        <head>
            <title>{title}</title>
            <link rel="icon" href={favicon} type="image/x-icon"/>
        </head>
        <body className={themeClass}>
        <SubdomainProvider subdomain={subdomain} data={data}>
            {children}
        </SubdomainProvider>
        </body>
        </html>
    );
}
