import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useQuery, useMutation } from '@apollo/client';

import Container from '../components/Container';
import Collection from '../components/Collection';
import CollectionTitle from '../components/CollectionTitle';
import ErrorMessage from '../components/ErrorMessage';
import { initializeApollo } from '../graphql/apolloClient';
import { ALL_DATA } from '../graphql/queries';
import { DELETE_SHIRT, DELETE_PANT } from '../graphql/mutations';

const Home: React.FunctionComponent<unknown> = () => {
  const { loading, error, data } = useQuery(ALL_DATA);
  const [deleteShirt] = useMutation(DELETE_SHIRT, {
    refetchQueries: [
      {
        query: ALL_DATA,
      },
    ],
  });
  const [deletePant] = useMutation(DELETE_PANT, {
    refetchQueries: [
      {
        query: ALL_DATA,
      },
    ],
  });

  const getShirtSize = (item) => item.size;

  const getPantSize = (item) => `${item.width}/${item.length} (W/L)`;

  const handleDeleteShirt = (id) => () => {
    deleteShirt({
      variables: {
        id,
      },
    });
  };

  const handleDeletePant = (id) => () => {
    deletePant({
      variables: {
        id,
      },
    });
  };

  if (error) {
    return <ErrorMessage message="Error loading data" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <CollectionTitle>
        Shirts
        <Link href="/new/shirt">+</Link>
      </CollectionTitle>
      <Collection
        items={data.allShirts}
        getSize={getShirtSize}
        onDelete={handleDeleteShirt}
      />
      <CollectionTitle>
        Pants
        <Link href="/new/pant">+</Link>
      </CollectionTitle>
      <Collection
        items={data.allPants}
        getSize={getPantSize}
        onDelete={handleDeletePant}
      />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_DATA,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export default Home;
