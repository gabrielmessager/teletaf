import {
  AVANTAGES_SALARIE_URL,
  AVANTAGES_EMPLOYEUR_URL,
  HOME_URL,
  ABOUT_URL,
  RESSOURCES_URL,
  NEW_JOBPOST_URL,
} from './routes';

const SEOTags = {
  [`${ABOUT_URL}`]: {
    title: 'Télétaf | La plateforme pour trouver des CDIs en télétravail',
    description:
      'Des offres d’emplois en CDI et en télétravail pour francophones. Partout dans le monde.',
  },
  [`${AVANTAGES_SALARIE_URL}`]: {
    title: 'Télétaf | Télétravail: les avantages pour le salarié',
    description:
      'Retrouvez tous nos conseils pour bien travailler depuis la maison. Devenir un pro du télétravail.',
  },
  [`${AVANTAGES_EMPLOYEUR_URL}`]: {
    title: 'Télétaf | Télétravail: les avantages pour l’employeur',
    description:
      'Retrouvez tous nos conseils pour réussir mettre en place le télétravail en entreprise.',
  },
  [`${HOME_URL}`]: {
    title: 'Télétaf | Offres de CDIs en télétravail pour francophones',
    description:
      'Trouvez votre prochain CDI en télétravail en France ou dans des pays francophones. Consultez nos offres d’emplois et n’attendez plus pour trouver votre prochaine opportunité.',
  },
  [`${NEW_JOBPOST_URL}`]: {
    title: 'Télétaf | Accédez à des milliers de postulants francophones',
    description:
      'Partagez vos offres en CDI avec notre communauté et trouvez votre futur employé en télétravail.',
  },
  [`${RESSOURCES_URL}`]: {
    title:
      'Télétaf | Toutes les ressources pour réussir à travailler à distance',
    description:
      'Retrouvez tous nos conseils pour bien travailler depuis la maison. Accompagnez vos salariés pour être productifs en télétravail.',
  },
};

export function getSEOTags(router) {
  const { pathname } = router;
  return SEOTags[pathname];
}
