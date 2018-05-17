import React, { createContext } from 'react'
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

export default Layout
