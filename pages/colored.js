import withContext from '../context/withContext'
import Context from '../context'
import styles from './styles'

export default withContext(props => {
  return (
    <Context.Consumer>
      {isColored => (
        <div className={isColored && 'colored'}>
          Colored
          <style jsx>{styles}</style>
        </div>
      )}
    </Context.Consumer>
  )
})
