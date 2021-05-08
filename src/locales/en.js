export default (context) => {
  return new Promise(function (resolve) {
    resolve({
      common: {
        students: 'Students',        
      },
      auth: {
        loginFailure: 'Cannot login with these credentials',
        loginSuccess: 'Successfully logged in',
        login: 'Login',
        logout: 'Logout',
        logoutSuccess: 'Logged out successfully',
        password: 'Password',
        username: 'Username'
      },      
      errors: {
        max10chars: 'Max 10 characters',
        jobTypeAssigned: 'Cannot delete a type assigned to one or more jobs',
        timeFormat: 'Proper format is HH:MM',
      },
      menu: {
        goBack: 'Go back',
        home: 'Home',
        title: 'Main Menu',  
        test: 'Test',
        weatherForecast: 'Weather Forecast', 
        students: 'Students', 
        subjects: 'Subjects',       
      },   
      weatherForecastList: {
        date: "Date",
        temperatureC: "Temperature Celsius",
        temperatureF: "Temperature Fahrenheit",
        summary: "Summary",
        subtitle: 'Forecast for 5 days',
      },
      subjectList: {
        name: "Name",
        subtitle: 'Subject list',
      },
    })
  });
}
