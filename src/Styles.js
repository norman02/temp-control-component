const appStyles = {
    alignItems: 'center',
    backgroundColor: 'beige',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    width: '100vw'
  }
  
  const temperatureComponentStyles = {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 48,
    width: 320,
  }
  
  const temperatureDisplayStyles = {
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'aliceblue',
    borderRadius: '50%',
    height: 200,
    fontSize: 56,
    width: 200,
    margin: 'auto',
  }
  
  const temperatureControlsStyle = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: 48,
  }
  
  const buttonStyles = {
    backgroundColor: 'darkcyan',
    border: 'none',
    borderRadius: '50',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 48,
    height: 72,
    outline: 'none',
    width: 72,
    textAlign: 'center',
    color: 'white',
  }

 export const Styles = {
    app: appStyles,
    temperatureComponent: temperatureComponentStyles,
    temperatureDisplay: temperatureDisplayStyles,
    temperatureControls: temperatureControlsStyle,
    button: buttonStyles,
  }
  