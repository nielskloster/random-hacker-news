import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <div>
    <Head>
      <title>Random Hacker News</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <h1 className='flex justify-center p-4'>Random Hacker News</h1>
    </header>
    <div className='flex justify-center p-4'>
      {children}
    </div>
    <footer>
    </footer>
  </div>
)

export default Layout
