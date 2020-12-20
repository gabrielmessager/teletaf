import React from 'react';
import { NewJobPost as NewJobPostPage } from '../components/Pages/NewJobPost';
import { Layout } from '../components/Layout/Layout';

export default function NewJobPost() {
  return (
    <>
      <Layout />
      <NewJobPostPage />
    </>
  );
}
