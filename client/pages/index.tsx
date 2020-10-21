import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useQuery } from '@apollo/client';

import Container from '../components/Container';
import Collection from '../components/Collection';
import CollectionTitle from '../components/CollectionTitle';
import ErrorMessage from '../components/ErrorMessage';
import { initializeApollo } from '../lib/apolloClient';
import { ALL_DATA } from '../graphql/allData';

const Home: React.FunctionComponent<unknown> = () => {
  const { loading, error, data } = useQuery(ALL_DATA);

  const getShirtSize = (item) => item.size;

  const getPantSize = (item) => `${item.width}/${item.length} (W/L)`;

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
      <Collection items={data.allShirts} getSize={getShirtSize} />
      <CollectionTitle>
        Pants
        <Link href="/new/pant">+</Link>
      </CollectionTitle>
      <Collection items={data.allPants} getSize={getPantSize} />
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
