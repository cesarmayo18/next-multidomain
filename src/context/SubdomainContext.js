"use client";

import { createContext, useContext } from 'react';

const SubdomainContext = createContext();

export function useSubdomain() {
    return useContext(SubdomainContext);
}

export function SubdomainProvider({ children, subdomain, data }) {
    return (
        <SubdomainContext.Provider value={{ subdomain, data }}>
            {children}
        </SubdomainContext.Provider>
    );
}
