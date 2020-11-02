import React, { useState } from 'react';
import { Container, Paragraph } from '../Components';
import { WorkRemoteForEmployees } from './Articles/WorkRemoteForEmployees';
import { WorkRemoteForEmployer } from './Articles/WorkRemoteForEmployer';

export function Resources() {
  return (
    <Container>
      <Paragraph>Resources</Paragraph>
      <WorkRemoteForEmployees />
      <WorkRemoteForEmployer />
    </Container>
  );
}
