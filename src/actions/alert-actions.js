import { alertTypes } from '../store/types';

function success(message) {
  return { type: alertTypes.ALERT_SUCCESS, message };
}

function info(message) {
  return { type: alertTypes.ALERT_INFO, message };
}

function warning(message) {
  return { type: alertTypes.ALERT_WARNING, message };
}

function error(message) {
  return { type: alertTypes.ALERT_ERROR, message };
}

function clear() {
  return { type: alertTypes.ALERT_CLEAR };
}
