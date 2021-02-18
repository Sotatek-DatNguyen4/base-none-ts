import _ from 'lodash';

export const renderFieldError = (errors, fieldName) => {
  return _.get(errors, `[${fieldName}.message]`, '');
};