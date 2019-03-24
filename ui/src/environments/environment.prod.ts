export const environment = {
  production: true,
  socketUrl: `${(window.location.protocol) === 'http:' ? 'ws://' : 'wss://'}${window.location.host}`,
  apiBaseUrl: '',
  wifiUrl:'http://192.168.42.1:8880',
  apiHttpOptions: {}
};
