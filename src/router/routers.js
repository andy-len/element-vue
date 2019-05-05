// import app from "./../App.vue";
import index from "./../view/layouts/index.vue"

export default [
  {
    path: '/',
    redirect: '/systemTool/dictionaryManage'
  },
  {
    path: "/systemTool",
    component: index,
    children: [
      {
        path: "dictionaryManage",
        name: "dictionaryManage",
        component: () => import("./../view/pages/systemTool/dictionaryManage.vue")
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
