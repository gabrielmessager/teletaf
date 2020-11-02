import React, { useState } from 'react';
import { Card, Container } from '../Components';
import { articles } from './Articles';

export function Resources() {
  const [openedCards, setOpenedCards] = useState({});
  const toggleCard = (cardId) => {
    // close JobPost if currently opened
    if (openedCards[cardId]) {
      return setOpenedCards({ ...openedCards, [cardId]: false });
    }
    setOpenedCards({ ...openedCards, [cardId]: true });
  };

  return (
    <Container>
      {articles.map((article, i) => {
        const { content, title, subtitle } = article;
        return (
          <Card
            onClick={() => toggleCard(i)}
            isOpen={!!openedCards[i]}
            key={`Card_${i}`}
            title={title}
            subtitle={subtitle}
          >
            {content()}
          </Card>
        );
      })}
    </Container>
  );
}
