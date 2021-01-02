import { Router, useRouter } from 'next/router';
import React from 'react';
import { Card, Container, H1 } from '../Components';
import { pages } from './Pages';

export function Ressources() {
  const router = useRouter();

  return (
    <Container>
      <H1 style={{ marginBottom: '32px' }}>
        Toutes les ressources pour réussir à télétravailler
      </H1>
      {pages.map((article, i) => {
        const { title, subtitle, url } = article;
        return (
          <Card
            onClick={() => router.push(url)}
            key={`Card_${i}`}
            title={title}
            subtitle={subtitle}
          />
        );
      })}
    </Container>
  );
}
