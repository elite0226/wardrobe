import React from 'react';

type InputFieldProps = {
  type?: string;
  name?: string;
  value?: string;
  className?: string;
  error?: any;
  onChange?: (
    event?: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
};

const InputField: React.FunctionComponent<InputFieldProps> = ({
  type = 'text',
  name = '',
  value,
  className = '',
  error = {},
  onChange,
  ...rest
}) => {
  const InputComponent = type === 'select' ? 'select' : 'input';
  const { validationType, validations, options = [], ...inputProps } = rest;

  return (
    <>
      <InputComponent
        type={type}
        name={name}
        value={value}
        className={className}
        onChange={onChange}
        {...inputProps}
      >
        {type === 'select'
          ? options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))
          : null}
      </InputComponent>
      {error && error[name] && (
        <span className="form-error">{error[name]}</span>
      )}
    </>
  );
};

export default InputField;
