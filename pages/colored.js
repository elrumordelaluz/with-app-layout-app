import { ColoredCtx } from './_app'
import styles from './styles'

export default () => {
  return (
    <ColoredCtx.Consumer>
      {isColored => (
        <div className={isColored && 'colored'}>
          Colored
          <style jsx>{styles}</style>
        </div>
      )}
    </ColoredCtx.Consumer>
  )
}
