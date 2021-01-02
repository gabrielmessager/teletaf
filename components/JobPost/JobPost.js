import React, { useRef } from 'react';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import { fr } from 'date-fns/locale';
import {
  ButtonContainer,
  Container,
  CompanyName,
  Description,
  DescriptionContainer,
  JobContainer,
  JobTitle,
  TagsContainer,
  ThumbContainer,
  TimeAndButtonContainer,
  StyledButton,
  StyledImage,
} from './JobPost.styles';
import Caret from '../../public/caret.svg';
import { Thumb } from '../Thumb';
import { Tag } from '../Tag';
import { Time } from '../Time';
import { Button } from '../Button';
import { useRefHeight } from '../../hooks/useRefHeight';

// helper to get `created_at` from mongodb
const dateFromObjectId = (objectId) => {
  return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
};

export const JobPost = ({
  onClick,
  jobpost,
  isOpen = false,
  onTagClick,
  className,
}) => {
  const date = dateFromObjectId(jobpost?._id);
  const formattedDate = date.toISOString();
  const postedAt = formatDistanceToNowStrict(date, { locale: fr });
  const ref = useRef(null);
  const refHeight = useRefHeight(ref);

  // update # of applicants for jobpost
  async function onSubmit() {
    console.log('submitting');
    // if (!email) {
    //   setMessage('⚠️ Veuillez indiquer votre email 📮');
    //   hideMessage();
    //   return;
    // }
    try {
      // setMessage('');
      // setIsSubmitting(true);
      const contentType = 'application/json';
      console.log('in try');

      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify({ id: jobpost?._id }),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      // setMessage('🙏 Merci! Votre email a bien été enregistré! ✅');
      // setValue('');
      // hideMessage();
    } catch (error) {
      console.log('error', error);
      // setMessage(
      //   'Hmm...🤔 Nous n’avons pas pu vous enregistrer. Contactez-nous à teletafofficiel@gmail.com'
      // );
      // hideMessage();
    }
    // setIsSubmitting(false);
  }

  return (
    <div style={{ width: '100%' }}>
      <Container onClick={onClick} isOpen={isOpen} className={className}>
        <ThumbContainer>
          <Thumb
            alt={`${jobpost?.company_name} logo`}
            src={jobpost?.company_logo}
            width="48"
            height="48"
          />
        </ThumbContainer>
        <JobContainer>
          <CompanyName>
            <span>{jobpost?.company_name}</span>
            {/* {jobpost?.is_recruiting_agency && <>🕵️‍♀️</>} */}
          </CompanyName>
          <JobTitle>{jobpost?.title}</JobTitle>
          <div>
            <Tag backgroundColor="lightgrey">{jobpost?.contract_type}</Tag>
            <Tag backgroundColor="lightgrey">{jobpost?.contract_duration}</Tag>
            <Tag backgroundColor="lightgrey">{jobpost?.location}</Tag>
          </div>
          <TagsContainer className="JobPost__TagsContainer__Mobile">
            {jobpost?.tags.length > 0 &&
              jobpost?.tags.map((tag) => (
                <Tag
                  key={tag}
                  onClick={(e) => {
                    onTagClick(e, tag);
                  }}
                >
                  {tag}
                </Tag>
              ))}
          </TagsContainer>
        </JobContainer>
        <TagsContainer className="JobPost__TagsContainer__Desktop">
          {jobpost?.tags.length > 0 &&
            jobpost?.tags.map((tag) => (
              <Tag
                key={tag}
                onClick={(e) => {
                  onTagClick(e, tag);
                }}
              >
                {tag}
              </Tag>
            ))}
        </TagsContainer>
        <TimeAndButtonContainer>
          <Time datetime={formattedDate}>{postedAt}</Time>
          <Button
            className="JobPost__ApplyButton__Desktop"
            href={jobpost?.url}
            rel="noreferrer noopener"
            // prevent job post from opening
            onClick={(e) => {
              e.stopPropagation();
              onSubmit();
            }}
          >
            Postuler
          </Button>
          <StyledImage alt="caret" src={Caret} width="27" height="15" />
        </TimeAndButtonContainer>
      </Container>
      <DescriptionContainer height={refHeight} isOpen={!isOpen}>
        <Description ref={ref}>
          {jobpost?.description && (
            <>
              <h3>
                Description du poste{' '}
                <span role="img" aria-label="description">
                  👩‍💻
                </span>
              </h3>
              {jobpost?.description}
            </>
          )}
          {jobpost?.responsabilities?.length > 0 && (
            <>
              <h3>
                Vos responsabilités{' '}
                <span role="img" aria-label="responsabilités">
                  💼
                </span>
              </h3>
              <ul>
                {jobpost?.responsabilities?.map((responsability, i) => (
                  <li key={i}>{responsability}</li>
                ))}
              </ul>
            </>
          )}
          {jobpost?.requirements?.length > 0 && (
            <>
              <h3>
                Votre expérience{' '}
                <span role="img" aria-label="expérience">
                  🏆
                </span>
              </h3>
              <ul>
                {jobpost?.requirements?.map((requirement, i) => (
                  <li key={i}>{requirement}</li>
                ))}
              </ul>
            </>
          )}
          {jobpost?.benefits?.length > 0 && (
            <>
              <h3>
                Les avantages{' '}
                <span role="img" aria-label="avantages">
                  👌
                </span>
              </h3>
              <ul>
                {jobpost?.benefits?.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </>
          )}
          {jobpost?.salary?.length > 0 && (
            <>
              <h3>
                Rémunération{' '}
                <span role="img" aria-label="rémunération">
                  💰
                </span>
              </h3>
              <ul>
                <li>{jobpost?.salary}</li>
              </ul>
            </>
          )}
          {jobpost?.company_description && (
            <>
              <h3>
                Qui sommes nous?{' '}
                <span role="img" aria-label="présentation compagnie">
                  👋
                </span>
              </h3>
              {jobpost?.company_description}
            </>
          )}
          <ButtonContainer>
            <StyledButton
              href={jobpost?.url}
              rel="noreferrer noopener"
              // prevent job post from opening
              onClick={(e) => {
                e.stopPropagation();
                onSubmit();
              }}
            >
              Postuler
            </StyledButton>
          </ButtonContainer>
          <h5>
            N'hésitez pas à mentionner que Télétaf vous a aidé à trouver cette
            opportunité lorsque vous postulez{' '}
            <span role="img" aria-label="mention télétaf">
              🙏
            </span>
          </h5>
        </Description>
      </DescriptionContainer>
    </div>
  );
};
