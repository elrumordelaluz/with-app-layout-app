import styles from './styles'

export default () => {
  return (
    <div className="colored">
      No context always colored
      <style jsx>{styles}</style>
    </div>
  )
}
