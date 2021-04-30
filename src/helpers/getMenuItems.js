export default function getMenuItems(vueInstance) {
  return [
    {
      header: true,
      title: vueInstance.$t('menu.title')
    },    
    ...getStudentItems(vueInstance), 
    ...getTestItems(vueInstance),            
  ]
}

function getStudentItems(vueInstance) {
  return [        
      {
        icon: 'pe-7s-users',
        title: vueInstance.$t('menu.students'),
        child: [
          {
            title: vueInstance.$t('menu.students'),
            href: vueInstance.localePath({name: 'student'}),
          },          
        ]
      },
  ];
}

function getTestItems(vueInstance) {
  return [        
      {
        icon: 'pe-7s-check',
        title: vueInstance.$t('menu.test'),
        child: [
          {
            title: vueInstance.$t('menu.weatherForecast'),
            href: vueInstance.localePath({name: 'weatherForecast'}),
          },          
        ]
      },
  ];
}


