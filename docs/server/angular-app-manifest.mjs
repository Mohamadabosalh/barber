
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/barber/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/barber/app-dashboard",
    "route": "/barber"
  },
  {
    "renderMode": 2,
    "route": "/barber/app-dashboard"
  },
  {
    "renderMode": 2,
    "route": "/barber/app-about-us"
  },
  {
    "renderMode": 2,
    "route": "/barber/app-add-appointment"
  },
  {
    "renderMode": 2,
    "route": "/barber/app-all-appointment"
  },
  {
    "renderMode": 2,
    "route": "/barber/app-home-page"
  },
  {
    "renderMode": 2,
    "route": "/barber/app-logout"
  },
  {
    "renderMode": 2,
    "route": "/barber/app-profile"
  },
  {
    "renderMode": 2,
    "route": "/barber/app-signin"
  },
  {
    "renderMode": 2,
    "route": "/barber/app-signup"
  },
  {
    "renderMode": 2,
    "route": "/barber/app-todays-appointments"
  },
  {
    "renderMode": 2,
    "route": "/barber/app-forget-password"
  }
],
  assets: {
    'index.csr.html': {size: 510, hash: 'cb5018454cae6d36a503abf77e5b2c9b5e0b1a831028f271151e726981b0a7de', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: '1bf8beea846c19e6e4bab4c11227e58b4cfd113a073d664b3e2b7d03d7b7370f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'app-about-us/index.html': {size: 4385, hash: 'b459bb4e2dc6be1e2e4add498e022a4f4cbc27b1b8ee569d796528ea66890f63', text: () => import('./assets-chunks/app-about-us_index_html.mjs').then(m => m.default)},
    'app-add-appointment/index.html': {size: 6724, hash: '5694610a04e4d048c35c0887d2a161ca26a027d56de00e9c2bac409753e6ebd7', text: () => import('./assets-chunks/app-add-appointment_index_html.mjs').then(m => m.default)},
    'app-home-page/index.html': {size: 7375, hash: '5f634ec711aab675be271448c7774289631245bf8fd037d578bc7096ed989fcf', text: () => import('./assets-chunks/app-home-page_index_html.mjs').then(m => m.default)},
    'app-logout/index.html': {size: 1966, hash: '8cf3653e02e61f5b8be9c155a80c39eaa5ad29fc088c9706313ee8daf29ba4f4', text: () => import('./assets-chunks/app-logout_index_html.mjs').then(m => m.default)},
    'app-profile/index.html': {size: 6460, hash: '029a87a053e83948c5840515ebd1505fc5b27bc27ef46c0812f55d51aa71d828', text: () => import('./assets-chunks/app-profile_index_html.mjs').then(m => m.default)},
    'app-signin/index.html': {size: 5278, hash: '6a6b77e7846a9435e4f068b9a394aa6a9feac1ba87198a7f8edb76cd9eded829', text: () => import('./assets-chunks/app-signin_index_html.mjs').then(m => m.default)},
    'app-all-appointment/index.html': {size: 4406, hash: 'a66b8f467f906f8d9b0db8c3415e59403935111c28c968e17b9f6aa37c9ecba5', text: () => import('./assets-chunks/app-all-appointment_index_html.mjs').then(m => m.default)},
    'app-dashboard/index.html': {size: 3465, hash: '8098aa0539d1382f7bfbd74574e604df89dd38739872ddc12e7a5a3abb5edb30', text: () => import('./assets-chunks/app-dashboard_index_html.mjs').then(m => m.default)},
    'app-todays-appointments/index.html': {size: 4343, hash: '5aa7ee96b954b5a58fc83fc0f6b5732d66cdd5bd046cc36acc6ec85c5d9e6fa7', text: () => import('./assets-chunks/app-todays-appointments_index_html.mjs').then(m => m.default)},
    'app-forget-password/index.html': {size: 2729, hash: '3f5a149993e24b366a6efc61ba0b8e94444edf9991d09b1aede7cbd98ecbf10e', text: () => import('./assets-chunks/app-forget-password_index_html.mjs').then(m => m.default)},
    'app-signup/index.html': {size: 6533, hash: '119cc1288a7ccd8801bc4b75dd96fddc2c97d2fe5cb075d6d99445e5cffe9a1c', text: () => import('./assets-chunks/app-signup_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
