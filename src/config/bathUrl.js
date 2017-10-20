import getQueryString from '../util/getQueryString';
const protocol = window.location.protocol;
const host = window.location.host;
const pathname = window.location.pathname;

const locationUrl = `${protocol}//${host}${pathname}`;

export default {
  bathUrl: '/',
  locationUrl: locationUrl
}
