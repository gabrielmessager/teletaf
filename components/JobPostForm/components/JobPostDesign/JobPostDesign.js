import { Formik, Form, Field, ErrorMessage, withFormik } from 'formik';
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { FormSection, FormSubSectionContainer } from '../../../FormSection';
import { Checkbox } from '../../../Checkbox';
import { ColorPicker } from '../../../ColorPicker';

import {
  Container,
  CheckboxContainer,
  Description,
  InputContainer,
} from './JobPostDesign.styles';

const DEFAULT_COLOR = {
  rgb: {
    a: 1,
    b: 13,
    g: 13,
    r: 214,
  },
};

export function JobPostDesign({ setJobPostDesign }) {
  const [showLogo, setShowLogo] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);
  const [shouldHiglight, setShouldHiglight] = useState(false);
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setJobPostDesign({ showLogo, isRecurring, shouldHiglight, color });
  }, [showLogo, isRecurring, shouldHiglight, color]);

  return (
    <FormSection title="Personnalisez votre annonce">
      <FormSubSectionContainer>
        <Checkbox
          width={24}
          height={24}
          label="show my company logo"
          checked={showLogo}
          setChecked={setShowLogo}
        />
        <Description>
          If you choose this option, your job post will be automatically bumped
          back to the top of the site after 30 days for increased visibility.
          Your card on file will be charged $249 in 30 days on 2020-08-24, and
          from then on every 30 days until you archive your job, which you can
          do at any time with the EDIT link sent after you post this job.
        </Description>
      </FormSubSectionContainer>
      <FormSubSectionContainer>
        <Container>
          <Checkbox
            width={24}
            height={24}
            label="recurring job post"
            checked={isRecurring}
            setChecked={setIsRecurring}
          />
          <ColorPicker
            // isOpen={isOpen}
            // setIsOpen={setIsOpen}
            color={color}
            setColor={setColor}
          />
        </Container>
        <Description>
          If you choose this option, your job post will be automatically bumped
          back to the top of the site after 30 days for increased visibility.
          Your card on file will be charged $249 in 30 days on 2020-08-24, and
          from then on every 30 days until you archive your job, which you can
          do at any time with the EDIT link sent after you post this job.
        </Description>
      </FormSubSectionContainer>
      <FormSubSectionContainer>
        <Checkbox
          width={24}
          height={24}
          label="highlight post"
          checked={shouldHiglight}
          setChecked={setShouldHiglight}
        />
        <Description>
          If you choose this option, your job post will be automatically bumped
          back to the top of the site after 30 days for increased visibility.
          Your card on file will be charged $249 in 30 days on 2020-08-24, and
          from then on every 30 days until you archive your job, which you can
          do at any time with the EDIT link sent after you post this job.
        </Description>
      </FormSubSectionContainer>
    </FormSection>
  );
}

// const formikOptions = {
//   validateOnChange: true,
//   validationSchema: Yup.object().shape({
//     title: Yup.string().required("test").required("Email should not be blank"),

//     companyName: Yup.string()
//       .required("No password provided.")
//       .min(8, "Password is too short - should be 8 chars minimum."),
//   }),
// }

// export const JobPostDesign = withFormik(formikOptions)(InnerForm)
