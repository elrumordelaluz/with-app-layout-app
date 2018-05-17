import React, { createContext } from 'react'
import Link from 'next/link'

class Layout extends React.Component {
  render() {
    const { children } = this.props

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
        </Link>{' '}
        <Link href="/nocontext">
          <a>No Context (colored)</a>
        </Link>{' '}
        <Link href="/nocontext2">
          <a>No Context (no colored)</a>
        </Link>
        {children}
      </div>
    )
  }
}

export default Layout
