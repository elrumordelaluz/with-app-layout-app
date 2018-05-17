import withContext from '../context/withContext'
import Context from '../context'
import styles from './styles'

export default withContext(() => {
  return (
    <Context.Consumer>
      {isColored => (
        <div className={isColored && 'colored'}>
          No colored
          <style jsx>{styles}</style>
        </div>
      )}
    </Context.Consumer>
  )
})
