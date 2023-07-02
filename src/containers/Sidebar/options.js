const options = [
  {
    key: '',
    label: 'sidebar.dashboard',
    leftIcon: 'ion-bag',
  },
  {
    key: "master",
    label: "sidebar.master",
    leftIcon: "ion-bag",
    children: [
      {
        key: "country",
        label: "sidebar.country",
      },
      {
        key: "state",
        label: "sidebar.state",
      },
      {
        key: "city",
        label: "sidebar.city",
      },
      {
        key: "product",
        label: "sidebar.product",
      },
      {
        key: "currency",
        label: "sidebar.currency",
      },
      {
        key: "designation",
        label: "sidebar.designation",
      },
      {
        key: "duration Type",
        label: "sidebar.durationType",
      },
      {
        key: "relation",
        label: "sidebar.relation",
      },
      {
        key: "location",
        label: "sidebar.location",
      }      
    ]
  },
  {
    key: 'client',
    label: 'sidebar.client',
    leftIcon: 'ion-bag',
    children:[
      {
        key: "client",
        label: "sidebar.client",
      },
      {
        key: "alerts",
        label: "sidebar.alerts",
      },
      {
        key: "notes",
        label: "sidebar.notes",
      }
    ]
  },
  {
    key: 'Instructors',
    label: 'sidebar.instructors',
    leftIcon: 'ion-bag',
  },
  // {
  //   key: "table",
  //   label: "sidebar.tables",
  //   leftIcon: "ion-android-menu",
  //   children: [
  //     {
  //       key: "table_ant",
  //       label: "sidebar.antTables",
  //     },
  //     {
  //       key: "quiz",
  //       label: "quiz",
  //     },
  //   ],
  // },
  // {
  //   key: "pages",
  //   label: "sidebar.pages",
  //   leftIcon: "ion-document-text",
  //   children: [
  //     {
  //       key: "404",
  //       label: "sidebar.404",
  //       withoutDashboard: true,
  //     },
  //     {
  //       key: "500",
  //       label: "sidebar.500",
  //       withoutDashboard: true,
  //     },
  //     {
  //       key: "signin",
  //       label: "sidebar.signIn",
  //       withoutDashboard: true,
  //     },
  //     {
  //       key: "signup",
  //       label: "sidebar.signUp",
  //       withoutDashboard: true,
  //     },
  //     {
  //       key: "forgotpassword",
  //       label: "sidebar.forgotPw",
  //       withoutDashboard: true,
  //     },
  //     {
  //       key: "resetpassword",
  //       label: "sidebar.resetPw",
  //       withoutDashboard: true,
  //     },

  //     // {
  //     //   key: 'comingSoon',
  //     //   label: 'sidebar.comingSoon',
  //     //    withoutDashboard: true
  //     // }
  //   ],
  // },
];
export default options;
