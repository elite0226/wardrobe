import React from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';

import Container from '../../components/Container';
import Form from '../../components/Form';
import { CREATE_SHIRT } from '../../graphql/createShirt';

const fields = [
  {
    type: 'text',
    name: 'name',
    label: 'Name',
    defaultValue: '',
  },
  {
    type: 'select',
    name: 'color',
    label: 'Color',
    defaultValue: '',
    options: [
      { label: '', value: '' },
      { label: 'White', value: 'white' },
      { label: 'Grey', value: 'grey' },
      { label: 'Blue', value: 'blue' },
    ],
    validations: [{ rule: 'required' }],
  },
  {
    type: 'number',
    name: 'size',
    label: 'Size',
    defaultValue: 0,
    min: '0',
    validationType: 'number',
    validations: [
      { rule: 'required' },
      {
        rule: 'min',
        params: [1],
      },
    ],
  },
];

const NewShirt: React.FunctionComponent<unknown> = () => {
  const [createShirt] = useMutation(CREATE_SHIRT);
  const router = useRouter();

  const handleSubmit = async (data) => {
    await createShirt({
      variables: {
        name: data.name,
        color: data.color,
        size: parseInt(data.size),
      },
    });

    router.push('/');
  };

  return (
    <Container>
      <Form fields={fields} onSubmit={handleSubmit} />
    </Container>
  );
};

export default NewShirt;
