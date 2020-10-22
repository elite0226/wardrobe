import React from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';

import Container from '../../components/Container';
import Form from '../../components/Form';
import { CREATE_PANT } from '../../graphql/mutations';

const fields = [
  {
    type: 'text',
    name: 'name',
    label: 'Name',
    defaultValue: '',
  },
  {
    type: 'text',
    name: 'color',
    label: 'Color',
    defaultValue: '',
    validations: [{ rule: 'required' }],
  },
  {
    type: 'number',
    name: 'width',
    label: 'Width',
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
  {
    type: 'number',
    name: 'length',
    label: 'Length',
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

const NewPant: React.FunctionComponent<unknown> = () => {
  const [createPant] = useMutation(CREATE_PANT);
  const router = useRouter();

  const handleSubmit = async (data) => {
    await createPant({
      variables: {
        name: data.name,
        color: data.color,
        width: parseInt(data.width),
        length: parseInt(data.length),
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

export default NewPant;
