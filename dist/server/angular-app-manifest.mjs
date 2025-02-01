
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
    'app-home-page/index.html': {size: 7375, hash: '83ae94b13e7960aa5728f61161af60f6e17189b1384aa94bbf76b6ef7f4bc4ba', text: () => import('./assets-chunks/app-home-page_index_html.mjs').then(m => m.default)},
    'app-logout/index.html': {size: 1966, hash: '8cf3653e02e61f5b8be9c155a80c39eaa5ad29fc088c9706313ee8daf29ba4f4', text: () => import('./assets-chunks/app-logout_index_html.mjs').then(m => m.default)},
    'app-profile/index.html': {size: 6460, hash: '029a87a053e83948c5840515ebd1505fc5b27bc27ef46c0812f55d51aa71d828', text: () => import('./assets-chunks/app-profile_index_html.mjs').then(m => m.default)},
    'app-add-appointment/index.html': {size: 6724, hash: '29a7ae509e01bd37414d0e80288699a3622b54affaa24e35fcef21c937bdbd3b', text: () => import('./assets-chunks/app-add-appointment_index_html.mjs').then(m => m.default)},
    'app-all-appointment/index.html': {size: 4406, hash: 'a66b8f467f906f8d9b0db8c3415e59403935111c28c968e17b9f6aa37c9ecba5', text: () => import('./assets-chunks/app-all-appointment_index_html.mjs').then(m => m.default)},
    'app-dashboard/index.html': {size: 3465, hash: '8098aa0539d1382f7bfbd74574e604df89dd38739872ddc12e7a5a3abb5edb30', text: () => import('./assets-chunks/app-dashboard_index_html.mjs').then(m => m.default)},
    'app-signin/index.html': {size: 5278, hash: '8302fba4f3f4fabdfd9ca1e67670807c14f9de1ed5c34ce184a6e0855635418f', text: () => import('./assets-chunks/app-signin_index_html.mjs').then(m => m.default)},
    'app-signup/index.html': {size: 6533, hash: 'bc8af1c1177b7508e5dceb8e85bcf618eb4c845dbf1c117529aa6d7440bf0b9e', text: () => import('./assets-chunks/app-signup_index_html.mjs').then(m => m.default)},
    'app-forget-password/index.html': {size: 2729, hash: '3f5a149993e24b366a6efc61ba0b8e94444edf9991d09b1aede7cbd98ecbf10e', text: () => import('./assets-chunks/app-forget-password_index_html.mjs').then(m => m.default)},
    'app-todays-appointments/index.html': {size: 4343, hash: '45355185791f4e03fdf1e036f6dd354d7f7e82c529ba623ad43b554c38232722', text: () => import('./assets-chunks/app-todays-appointments_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
