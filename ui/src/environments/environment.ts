// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  socketUrl: 'ws://192.168.2.84:8080',
  apiBaseUrl: 'http://192.168.2.84:8080',
  wifiUrl:'http://192.168.42.1:8880',
  apiHttpOptions: {
    withCredentials: true
  }
};
