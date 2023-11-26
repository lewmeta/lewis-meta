import React from "react"

const Layout:React.FC<LayoutProps> = ({ className, children}) => {

  return (
    <div className={`ml-auto mr-auto w-full px-5 sm:max-w-[520px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-[1280px] 2xl:max-w-[1320px] h-full ${className}`}>
        {children}
    </div>
  )
}

export default Layout