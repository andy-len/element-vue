import app from "./../App.vue";

export default [
  {
    path: "/",
    redirect: "/hello",
    component: app,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: "/hello",
        name: "hello",
        component: () => import("./../view/test/helloWorld.vue"),
        meta: {
          hideInMenu: true,
          notCache: true
        }
      }
    ]
  }
  // {
  //   path: "/hello",
  //   redirect: "/hello",
  //   component: app,
  //   meta: {
  //     hideInMenu: true,
  //     notCache: true
  //   }
  // }
];
