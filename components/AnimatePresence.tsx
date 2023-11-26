"use client"

import React from 'react'
import { AnimatePresence } from "framer-motion"
import { usePathname } from 'next/navigation'

const AnimatePresenc = ({ children, key }:any) => {
    const currentPath = usePathname();
    return (
        <AnimatePresence key={currentPath} mode='wait'>
            {children}
        </AnimatePresence>
    )
}

export default AnimatePresenc