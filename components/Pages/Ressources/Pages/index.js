import {
  AVANTAGES_SALARIE_URL,
  AVANTAGES_EMPLOYEUR_URL,
} from '../../../../constants/routes';

export const remoteWorkForEmployer = {
  title: 'Télétravail',
  subtitle: 'Les avantages pour l’employeur 👩‍💼',
  url: AVANTAGES_EMPLOYEUR_URL,
};

export const remoteWorkForEmployees = {
  title: 'Télétravail',
  subtitle: 'Les avantages pour le salarié 👩‍💻',
  url: AVANTAGES_SALARIE_URL,
};

export const pages = [remoteWorkForEmployees, remoteWorkForEmployer];
