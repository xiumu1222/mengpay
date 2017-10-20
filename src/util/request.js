import Vue from 'vue';
import qs from 'qs';
import url from '../config/bathUrl';
var bathUrl = url.bathUrl;
var vm = new Vue();
function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    // ant.call('toast', {content: '网络繁忙，请稍后再试', type: 'fail'});
    const error = new Error(response.statusText);
    error.response = response;
    console.log(error);
    throw error;
  }
}

/**
 * Requests a URL, returning a promise.
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, param, method) {

  const options = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    credentials: true
  };

  return vm.$http.post(bathUrl + url, qs.stringify(qs.parse(param), {arrayFormat: 'brackets'}), options)
    .then(checkStatus)
    .then(parseJSON)
    .then(function (data) {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}
