import React from 'react'
import App, { Container } from 'next/app'
import Layout from '../components/layout'

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
