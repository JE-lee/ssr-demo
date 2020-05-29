// react-router-config
// 参见 https://github.com/reacttraining/react-router/tree/master/packages/react-router-config
import Now from '../pages/now/now'
import About from '../pages/about'

const routes = [
  {
    component: Now,
    path: '/now',
    extract: true,
    routes: [
      // {
      //   path: '',
      //   component: '',
      //   extract: 
      // }
    ]
  },
  {
    component: About,
    path: '/about'
  },
  {
    component: About,
    path: '/'
  }
]
export default routes