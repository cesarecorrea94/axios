import axios from './lib/axios.js';

// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const {
  Axios,
  AxiosError,
  CanceledError,
  isCancel,
  CancelToken,
  VERSION,
  all,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig
} = axios;

export {
  Axios,
  AxiosError, AxiosHeaders, Cancel, CancelToken, CanceledError, HttpStatusCode, VERSION,
  all, axios as default, formToJSON,
  getAdapter, isAxiosError, isCancel, mergeConfig, spread,
  toFormData
};


//   import http from 'http';
//   import dns from 'node:dns';
//   import { inspect } from 'util';
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// const networkLatency = 9;
// const processingDuration = 100
// const server = http.createServer(function (req, res) {
//   // res.write('data');
//   setTimeout(async () => {
//     res.write('data');
//     for (let packets = 1; packets < 10; ++packets) {
//       await sleep(networkLatency);
//       res.write('data');
//     }
//     res.end();
//   }, processingDuration);
// }).listen(4444, function () {
//   // var success = false, failure = false;
//   // var error;

//   axios.get('http://localhost:4444/', {
//     myNewTimeout: [{ event: 'timeout', timeout: networkLatency, trigger: 'response' }],  
//     // myNewTimeout: [{ event: 'connect', timeout: 50 }],
//     lookup: (...args) =>  {
//       setTimeout(() => dns.lookup(...args), networkLatency); // simulating connect time
//     }
//   }).then(function (res) {
//     console.log(inspect({ data: res.data }, { maxStringLength: 1e2 }))
//     // success = true;
//   }).catch(function (err) {
//     console.log({ err })
//     // error = err;
//     // failure = true;
//   }).then(() => {
//     server.close();
//   });

//   // setTimeout(function () {
//   //   assert.equal(success, false, 'request should not succeed');
//   //   assert.equal(failure, true, 'request should fail');
//   //   assert.equal(error.code, 'ETIMEDOUT');
//   //   assert.equal(error.message, `timeout of 50ms exceeded`);
//   //   done();
//   // }, 500);
// });

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// // const yieldLoop = () => new Promise((resolve) => process.nextTick(resolve));
// (async () => {
//   for(let x = 0; x < 10; x++) {
//     console.log(new Date().toISOString());
//     const zzz = sleep(1-2).then(() => console.log(''));
//     // const tick = yieldLoop().then(() => console.log(''));
//     await zzz;
//     // console.log('');
//     // await tick;
//   }
// })()
