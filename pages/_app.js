import React, { createContext } from 'react'
import App, { Container } from 'next/app'
import Link from 'next/link'

export const ColoredCtx = createContext(false)

class Layout extends React.Component {
  render() {
    const { children, isColored } = this.props

    return (
      <div className="layout">
        <Link href="/index">
          <a>Index</a>
        </Link>{' '}
        <Link href="/colored">
          <a>Colored</a>
        </Link>{' '}
        <Link href="/nocolored">
          <a>No Colored</a>
        </Link>
        <ColoredCtx.Provider value={isColored}>{children}</ColoredCtx.Provider>
      </div>
    )
  }
}

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    let isColored = ctx.asPath === '/colored' ? true : false

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps, isColored }
  }

  render() {
    const { Component, pageProps, isColored } = this.props
    return (
      <Container>
        <Layout isColored={isColored}>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}
