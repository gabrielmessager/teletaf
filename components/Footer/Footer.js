import React, { useEffect, useState } from 'react';
import Media from 'react-media';
import Link from 'next/link';
import {
  Container,
  ListElement,
  UnorderedList,
  Wrapper,
  ImageContainer,
  MobileWrapper,
  NavContainer,
  MobileNav,
  Bullet,
  BulletContainer,
  StyledImage,
} from './Footer.styles';
import Logo from '../../public/logo.png';
import { Button } from '../../components/Button';
import { LARGE, LARGE_MIN } from '../../theme/theme';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import {
  HOME_URL,
  ABOUT_URL,
  RESOURCES_URL,
  NEW_JOBPOST_URL,
} from '../../constants/routes';

const MENU = {
  ABOUT: 'Pourquoi choisir Télétaf?',
  HOME: 'Annonces',
  RESOURCES: 'Ressources',
};

export function Footer() {
  return <div>Footer</div>;
}
