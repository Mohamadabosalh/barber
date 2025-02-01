
export default {
  basePath: '/barber/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
