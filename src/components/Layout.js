import React from "react"
import SEO from "./SEO"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-black">
        <header className="p-4 bg-black text-white font-semibold">
          <h1 className="max-w-4xl mx-auto">Adam Dubicki</h1>
        </header>
        {children}
        <footer className="py-2 text-center text-white text-xs">
          &copy; Adam Dubicki {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

export default Layout
