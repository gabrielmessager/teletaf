import { HOME_URL, ABOUT_URL, RESOURCES_URL, NEW_JOBPOST_URL } from './routes';

const SEOTags = {
  ABOUT_URL: {
    title: '',
    description: '',
  },
  HOME_URL: {
    title:
      'Télétaf | Offres d’emploi en CDI et en télétravail pour francophones',
    description:
      'Trouvez votre prochain CDI en télétravail en France ou dans des pays francophones. Consultez nos offres d’emplois et n’attendez plus pour trouver votre prochaine opportunité.',
  },
  NEW_JOBPOST_URL: {
    title: '',
    description: '',
  },
  RESOURCES_URL: {
    title: '',
    description: '',
  },
};

export function getSEOTags(router) {
  const { pathname } = router;
  return SEOTags[pathname];
}
