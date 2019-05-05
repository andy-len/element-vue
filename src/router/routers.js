// import app from "./../App.vue";
import index from "./../view/layouts/index.vue"

export default [
  {
    path: '/',
    redirect: '/systemTool'
  },
  {
    path: "/",
    redirect: "/index",
    component: index,
    children: [
      {
        path: "/systemTool",
        name: "systemTool",
        component: () => import("./../view/pages/systemTool/dictionaryManage.vue")
      }
    ]
  }
];
