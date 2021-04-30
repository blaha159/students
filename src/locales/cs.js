export default (context) => {
  return new Promise(function (resolve) {
    resolve({
      common: {
        students: 'Studenti',        
      },
      auth: {
        loginFailure: 'Těmito údaji se nepodařilo přihlásit',
        loginSuccess: 'Přihlášení proběhlo bez problémů',
        login: 'Přihlásit',
        logout: 'Odhlásit',
        logoutSuccess: 'Odhlášení se zdařilo',
        password: 'Password',
        username: 'Username'
      },          
      errors: {
        max10chars: 'Maximálně 10 znaků',
        timeFormat: 'Správný formát je HH:MM',
      },
      menu: {
        goBack: 'Zpět',
        home: 'Domů',
        title: 'Hlavní menu', 
        test: 'Test',
        weatherForecast: 'Předpověď počasí', 
        students: 'Studenti',    
      },   
      weatherForecastList: {
        date: "Datum",
        temperatureC: "Teplota Celsius",
        temperatureF: "Teplota Fahrenheit",
        summary: "Shrnutí",
        subtitle: 'Předpověď na 5 dnů',
      },   
    })
  });
}
