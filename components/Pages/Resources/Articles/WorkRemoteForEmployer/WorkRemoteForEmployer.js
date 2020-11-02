import React, { useState } from 'react';
import { Card, Container, H3, Paragraph } from '../../../Components';

export function WorkRemoteForEmployer() {
  const [openedCards, setOpenedCards] = useState({});

  const toggleJobPost = (cardId) => {
    // close JobPost if currently opened
    if (openedCards[cardId]) {
      return setOpenedCards({ ...openedCards, [cardId]: false });
    }
    setOpenedCards({ ...openedCards, [cardId]: true });
  };
  return (
    <Container>
      <Card onClick={() => toggleJobPost(1)} isOpen={!!openedCards[1]} />
      <H3>
        Voici quelques uns des avantages lorsque vous proposez le travail à
        distance:
      </H3>
      <Paragraph>
        1. Embauchez des gens qualifiés sans réfléchir à savoir où ils habitent.
      </Paragraph>
      <Paragraph>
        2. Vos employés sont plus productifs par le simple fait qu'il ya moins
        de distractions autour d'eux. Ceci suppose que vous les assistiez avec
        les outils, la structure et la culture pour leur permettre d'exceller.
      </Paragraph>
      <Paragraph>
        3. Vous réduisez vos coûts fixes liés à vos locaux et à la rémunération
        (vous pouvez embaucher des gens qui vivent dans des zones où le coût de
        la vie est moins élevé)
      </Paragraph>
      <Paragraph>
        4. Lorsque vous proposez le travail à distance, vous attirez de fait des
        gens qui savent se motiver d'eux-mêmes.
      </Paragraph>
      <Paragraph>
        5. C'est plus facile de faire grandir votre entreprise
      </Paragraph>
      <Paragraph>
        6. Les employés de demain s'attendent à avoir plus de possibilités de
        travailler à distance.
      </Paragraph>
      <Paragraph>
        7. Vous avez moins de réunions et elles sont plus efficaces
      </Paragraph>
      <Paragraph>
        8. Vous n'avez pas besoin de couvrir les frais de déménagement lorsqu'un
        nouvel employé rejoint votre équipe
      </Paragraph>
      <Paragraph>
        9. Vous offrez plus de flexibilité à votre entreprise en cas
        d'événements majeurs (manifestations, grèves, catastrophes naturelles)
      </Paragraph>

      <Paragraph>
        10. Avec plus de flexibilité, vous attirez plus de diversité au sein de
        votre organisation
      </Paragraph>
    </Container>
  );
}
