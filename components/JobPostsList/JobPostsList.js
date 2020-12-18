import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { JobPost } from '../JobPost';
import {
  Container,
  EmptyContainer,
  FilterContainer,
  Filter,
  FilterInnerContainer,
  FilterWrapper,
  TagsContainer,
  Text,
  SpinnerContainer,
  Spinner,
  ArrowWrapper,
  ArrowContainer,
  ArrowInnerContainer,
} from './JobPostsList.styles';
import { Tag } from '../Tag';
import DoubleArrow from '../../public/double_arrow.svg';
import { LARGE_MIN } from '../../theme/theme';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';

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
  const [selectedTags, setSelectedTags] = useState([]);
  const [listEl, setListEl] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const { windowWidth } = useWindowWidth();
  const router = useRouter();
  const timeout = useRef();
  const filters = Object.keys(FILTERS);
  const {
    query: { filter, tags, jobId },
  } = router;

  function getQueryParams() {
    if (filter) {
      return `filter=${filter}`;
    }
    if (tags) {
      return `tags=${tags}`;
    }
    return '';
  }

  const showSpinner = () => {
    timeout.current = setTimeout(() => setLoading(true), 600);
  };

  useIsomorphicLayoutEffect(() => {
    setTimeout(() => {
      const list = document.getElementsByClassName(`${jobId}`);
      setListEl(list);
      setOpenedJobPosts({ ...openedJobPosts, [jobId]: true });
    }, 400);

    setTimeout(() => {
      const top = listEl[0] && listEl[0].getBoundingClientRect().top;
      window.scrollTo({
        top: top - 8,
        left: 0,
        behavior: 'smooth',
      });
    }, 400);
  }, [listEl]);

  useEffect(() => {
    if (windowWidth > LARGE_MIN) {
      setIsLarge(true);
    } else {
      setIsLarge(false);
    }
  }, [isLarge, setIsLarge, windowWidth]);

  useEffect(() => {
    if (filter) setSelectedFilter(filter);
    if (tags) {
      const tagsToRender = tags.split(',');
      setSelectedTags(tagsToRender);
    }
    setLoading(false);
    return () => clearTimeout(timeout.current);
  }, [router, filter, tags]);

  const toggleJobPost = (jobPostId) => {
    const queryParams = getQueryParams();

    // close JobPost if currently opened
    if (openedJobPosts[jobPostId]) {
      setOpenedJobPosts({ ...openedJobPosts, [jobPostId]: false });
      return router.push(`/`);
    }
    setOpenedJobPosts({ ...openedJobPosts, [jobPostId]: true });
    return queryParams
      ? router.push(`/?${queryParams}&jobId=${jobPostId}`)
      : router.push(`/?jobId=${jobPostId}`);
  };

  const onFilterClick = (e) => {
    showSpinner();
    setSelectedTags([]);
    const newFilter = e.target.getAttribute('data-filter');
    // reset filter if already selected
    if (selectedFilter === newFilter) {
      setSelectedFilter(null);
      return jobId ? router.push(`/?jobId=${jobId}`) : router.push('/');
    }
    setSelectedFilter(newFilter);
    setOpenedJobPosts({});
    return router.push(`/?filter=${newFilter}`);
  };

  const onTagClick = (e, tag) => {
    e.stopPropagation();
    const tagExist = selectedTags.indexOf(tag) > -1;
    if (tagExist) return selectedTags;
    showSpinner();
    if (selectedFilter) {
      setSelectedFilter(null);
    }
    const newSelectedTags = [...selectedTags];
    newSelectedTags.push(tag);
    const queryParams = newSelectedTags.join(',').toLowerCase();
    setSelectedTags(newSelectedTags);
    setOpenedJobPosts({});
    return router.push(`/?tags=${queryParams}`);
  };

  const onTagRemove = (tag) => {
    const indexOfTag = selectedTags.indexOf(tag);
    const tagExist = indexOfTag > -1;
    if (!tagExist) return selectedTags;
    showSpinner();
    const newSelectedTags = selectedTags.filter(
      (selectedTag) => selectedTag !== tag
    );
    const tagsQueryParams = newSelectedTags.join(',').toLowerCase();
    setSelectedTags(newSelectedTags);

    // has tags and jobId
    if (newSelectedTags.length > 0 && jobId) {
      return router.push(`/?tags=${tagsQueryParams}&jobId=${jobId}`);
    }

    // has tags and NO jobId
    if (newSelectedTags.length > 0 && !jobId) {
      return router.push(`/?tags=${tagsQueryParams}`);
    }

    // has NO tags and jobId
    if (!newSelectedTags.length > 0 && jobId) {
      return router.push(`/?jobId=${jobId}`);
    }
    return router.push(`/`);
  };

  return (
    <Container>
      <FilterWrapper>
        <FilterInnerContainer>
          <FilterContainer>
            {filters.map((key, i) => {
              const { emoji, label } = FILTERS[key];
              return (
                <Filter
                  isSelected={selectedFilter === label}
                  onClick={onFilterClick}
                  data-filter={label}
                  last={i === filters.length - 1}
                >
                  {emoji}
                  <span>{label}</span>
                </Filter>
              );
            })}
          </FilterContainer>
        </FilterInnerContainer>
        {!isLarge && (
          <ArrowWrapper>
            <ArrowInnerContainer>
              <ArrowContainer>
                <img src={DoubleArrow} width="16" height="16" />
              </ArrowContainer>
            </ArrowInnerContainer>
          </ArrowWrapper>
        )}
      </FilterWrapper>

      <TagsContainer>
        {selectedTags.length > 0 &&
          selectedTags.map((tag) => (
            <Tag
              key={tag}
              backgroundColor="#000"
              color="#fff"
              onRemove={() => onTagRemove(tag)}
              withCloseButton
            >
              {tag}
            </Tag>
          ))}
      </TagsContainer>

      {loading && (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
      {!loading &&
        (jobposts.length > 0 ? (
          <>
            {jobposts.map((jobpost, index) => (
              <JobPost
                onClick={() => {
                  toggleJobPost(jobpost._id, index);
                }}
                isOpen={!!openedJobPosts[jobpost._id]}
                jobpost={jobpost}
                key={jobpost._id}
                onTagClick={onTagClick}
                className={`${jobpost._id}`}
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
        ))}
    </Container>
  );
};
