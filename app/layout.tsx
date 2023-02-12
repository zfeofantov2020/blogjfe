import Link from "next/link"
import fs from "fs";
import matter from "gray-matter";
import "/Users/zenafeofantov/todayblog/src/app/globals.css"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div className="text-center bg-white p-8 mt-6 mb-6" >
        <Link href="/">
          <h1 className="text-3xl text-black font-bold " >TwoinTheCity</h1>
          </Link>
        <p className="text-slate-400"> Welcome to our blog!</p>
      </div>
    </header>

  );


  const footer = (
    <footer>
      <div className="border-t border-slate-700 mt-6 py-6 text-center">
        <h3>Developed by Eugene</h3>
      </div>
    </footer>
  );





  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-2x1 px-3 text-center">
      {header}
      <div>{children}</div>
      {footer}
      </div>
      </body>
    </html>
  )
}
