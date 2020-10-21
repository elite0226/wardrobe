import * as Yup from 'yup';

export const classnames = (classes: Array<string> | string): string => {
  const result = [];
  if (Array.isArray(classes)) {
    for (let i = 0; i < classes.length; i += 1) {
      if (classes[i]) {
        result.push(classes[i]);
      }
    }
  }
  return result.join(' ');
};

export const generateValidation = (fields: Array<any>): any => {
  const validation = {};
  fields.forEach((field) => {
    const {
      name,
      label = null,
      validations = [],
      validationType = 'string',
    } = field;

    if (validations.length) {
      validation[name] = Yup[validationType]();
      if (label) {
        validation[name] = validation[name].label(label);
      }
      for (let i = 0; i < validations.length; i += 1) {
        const { rule, params = [] } = validations[i];
        if (validation[name][rule]) {
          validation[name] = validation[name][rule](...params);
        }
      }
    }
  });

  return validation;
};
