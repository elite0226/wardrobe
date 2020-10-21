import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import Button from '../Button';
import InputField from '../InputField';
import { generateValidation } from '../../utils';

type FormProps = {
  fields: Array<any>;
  onSubmit: (data: any) => void;
};

const Form: React.FunctionComponent<FormProps> = ({ fields, onSubmit }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  const router = useRouter();

  useEffect(() => {
    setData(
      fields.reduce((acc, field) => {
        return {
          ...acc,
          [field.name]: field.defaultValue,
        };
      }, {}),
    );
  }, [fields]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError({});

    const validation = generateValidation(fields);
    Yup.object()
      .shape(validation)
      .validate(data, { abortEarly: false })
      .then(() => {
        onSubmit(data);
      })
      .catch((err) => {
        setError(
          err.inner.reduce((acc, cur) => {
            return {
              ...acc,
              [cur.path]: cur.message,
            };
          }, {}),
        );
      });
  };

  const handleCancel = () => {
    router.push('/');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {fields.map(({ type, name, label, defaultValue, ...rest }) => (
        <div key={name} className="form-group">
          <label className="form-label">{label}</label>
          <InputField
            type={type}
            name={name}
            className="form-input"
            value={data[name] || defaultValue}
            error={error}
            onChange={handleChange}
            {...rest}
          />
        </div>
      ))}
      <div className="form-actions">
        <Button onClick={handleCancel}>Cancel</Button>
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </div>
    </form>
  );
};

export default Form;
