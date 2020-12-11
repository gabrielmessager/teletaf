import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { JobPost } from '../JobPost';
import {
  Container,
  EmptyContainer,
  FilterContainer,
  Filter,
  FilterWrapper,
  TagsContainer,
  Text,
} from './JobPostsList.styles';
import { Tag } from '../Tag';

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

  const router = useRouter();

  useEffect(() => {
    const {
      query: { filter, tags },
    } = router;
    if (filter) setSelectedFilter(filter);
    if (tags) {
      const tagsToRender = tags.split(',');
      setSelectedTags(tagsToRender);
    }
  }, [router]);

  const toggleJobPost = (jobPostId) => {
    // close JobPost if currently opened
    if (openedJobPosts[jobPostId]) {
      return setOpenedJobPosts({ ...openedJobPosts, [jobPostId]: false });
    }
    setOpenedJobPosts({ ...openedJobPosts, [jobPostId]: true });
  };

  const onFilterClick = (e) => {
    setSelectedTags([]);
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

  const onTagClick = (e, tag) => {
    e.stopPropagation();
    const tagExist = selectedTags.indexOf(tag) > -1;
    if (tagExist) return selectedTags;

    setSelectedFilter(null);
    const newSelectedTags = [...selectedTags];
    newSelectedTags.push(tag);
    const queryParams = newSelectedTags.join(',').toLowerCase();
    setSelectedTags(newSelectedTags);
    return router.push(`/?tags=${queryParams}`);
  };

  const onTagRemove = (tag) => {
    const indexOfTag = selectedTags.indexOf(tag);
    const tagExist = indexOfTag > -1;
    if (!tagExist) return selectedTags;

    const newSelectedTags = selectedTags.filter(
      (selectedTag) => selectedTag !== tag
    );
    const queryParams = newSelectedTags.join(',').toLowerCase();
    setSelectedTags(newSelectedTags);
    return newSelectedTags.length > 0
      ? router.push(`/?tags=${queryParams}`)
      : router.push(`/`);
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

      {jobposts.length > 0 ? (
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
