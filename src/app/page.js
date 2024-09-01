"use client";

import { useSubdomain } from '../context/SubdomainContext';

export default function HomePage() {
    const { subdomain, data } = useSubdomain();

    return (
        <div>
            <h1 className="text-3xl font-bold">
                Bienvenido al subdominio: {subdomain}
            </h1>
            <p>Soy un JSON de configuración: {JSON.stringify(data)}</p>
        </div>
    );
}
