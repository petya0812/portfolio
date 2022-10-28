function container (Component, justify) {

  const newComponent = () => (
    <div
      className='container container-sm'
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: justify || 'flex-start',
        alignItems: 'center',
      }}>
      <Component/>
    </div>
  )
  
  return (
    newComponent
  )
}

export default container