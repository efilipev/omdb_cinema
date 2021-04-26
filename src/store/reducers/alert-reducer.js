import { alertTypes } from '../types';

const initialState = {
  color: 'success',
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case alertTypes.ALERT_SUCCESS:
      return {
        color: 'success',
        message: action.message,
      };
    case alertTypes.ALERT_ERROR:
      return {
        color: 'danger',
        message: action.message,
      };
    case alertTypes.ALERT_INFO: {
      return {
        color: 'info',
        message: action.message,
      };
    }
    case alertTypes.ALERT_WARNING: {
      return {
        color: 'warning',
        message: action.message,
      };
    }
    case alertTypes.ALERT_CLEAR:
      return {};
    default:
      return state;
  }
};
