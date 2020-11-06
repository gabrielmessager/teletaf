import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { JobPost } from '../JobPost';
import {
  Container,
  EmptyContainer,
  FilterContainer,
  Filter,
  FilterWrapper,
  Text,
} from './JobPostsList.styles';

const FILTERS = {
  ARTS: {
    label: 'arts',
    emoji: <span>🎨</span>,
  },
  GESTION: {
    label: 'gestion',
    emoji: <span>🗄</span>,
  },
  TOURISME: {
    label: 'tourisme',
    emoji: <span>✈️</span>,
  },
  LOGISTIQUE: {
    label: 'logistique',
    emoji: <span>🏗</span>,
  },
  NATURE: {
    label: 'nature',
    emoji: <span>🌲</span>,
  },
  MARKETING: {
    label: 'marketing',
    emoji: <span>📈</span>,
  },
  INDUSTRIE: {
    label: 'industrie',
    emoji: <span>🏭</span>,
  },
  BANQUE: {
    label: 'banque',
    emoji: <span>🏦</span>,
  },
  IT: {
    label: 'it',
    emoji: <span>💻</span>,
  },
  SANTE: {
    label: 'santé',
    emoji: <span>🚑</span>,
  },
};

export const JobPostsList = ({ jobposts }) => {
  const [openedJobPosts, setOpenedJobPosts] = useState({});
  const [selectedFilter, setSelectedFilter] = useState(null);
  const router = useRouter();

  const toggleJobPost = (jobPostId) => {
    // close JobPost if currently opened
    if (openedJobPosts[jobPostId]) {
      return setOpenedJobPosts({ ...openedJobPosts, [jobPostId]: false });
    }
    setOpenedJobPosts({ ...openedJobPosts, [jobPostId]: true });
  };

  const onFilterClick = (e) => {
    const filter = e.target.getAttribute('data-filter');
    // reset filter if already selected
    if (selectedFilter === filter) {
      setSelectedFilter(null);
      router.push('/');
      return;
    }
    setSelectedFilter(filter);
    router.push(`/?filter=${filter}`);
  };

  return (
    <Container>
      <FilterWrapper>
        <FilterContainer>
          {Object.keys(FILTERS).map((key) => {
            const { emoji, label } = FILTERS[key];
            return (
              <Filter
                isSelected={selectedFilter === label}
                onClick={onFilterClick}
                data-filter={label}
              >
                {emoji}
                <span>{label}</span>
              </Filter>
            );
          })}
        </FilterContainer>
      </FilterWrapper>

      {jobposts.length > 0 ? (
        <>
          {jobposts.map((jobpost) => (
            <JobPost
              onClick={() => {
                toggleJobPost(jobpost._id);
              }}
              isOpen={!!openedJobPosts[jobpost._id]}
              jobpost={jobpost}
              key={jobpost._id}
            />
          ))}
        </>
      ) : (
        <EmptyContainer>
          <Text>
            Nous continuons de chercher des offres d'emploi pour cette
            catégorie. 🙂
          </Text>
        </EmptyContainer>
      )}
    </Container>
  );
};
