import { Formik, Form, Field, ErrorMessage, withFormik } from 'formik';
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Input } from '../../../Input';
import { FormSection, FormSubSectionContainer } from '../../../FormSection';
import { Label } from '../../../Label';
import { Description, InputContainer } from './JobPostTitle.styles';

function InnerForm({
  handleChange,
  handleBlur,
  isValid,
  touched,
  errors,
  values,
  setJobPostTitle,
}) {
  useEffect(() => {
    setJobPostTitle({ title: values.title, companyName: values.companyName });
  }, [setJobPostTitle, values]);
  return (
    <FormSection title="Titre de votre annonce">
      <form>
        <FormSubSectionContainer>
          <Label>Titre du poste</Label>
          <InputContainer>
            <Input
              fontSize={14}
              placeholder=""
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.title}
              errors={touched.title && errors.title}
            />
          </InputContainer>
          <Description>
            Veillez à indiquer le titre du poste ("Assistante de direction")
            sans utiliser de longues phrases comme "Recherche Assistante de
            direction". Chaque annonce est limitée à un role bien precis. Si
            vous souhaitez poster plusieurs roles, vous devrez créer plusieurs
            announces.{' '}
          </Description>
        </FormSubSectionContainer>
        <FormSubSectionContainer>
          <Label>Nom de votre société</Label>
          <InputContainer>
            <Input
              fontSize={14}
              placeholder=""
              name="companyName"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.companyName}
              errors={touched.companyName && errors.companyName}
            />
          </InputContainer>
          <Description>
            Le nom de votre société sans son statut (S.A., E.U.R.L, etc..)
          </Description>
        </FormSubSectionContainer>
      </form>
    </FormSection>
  );
}

const formikOptions = {
  validateOnChange: true,
  validationSchema: Yup.object().shape({
    title: Yup.string().required('Veuillez entrer le titre de votre annonce'),

    companyName: Yup.string()
      .required('Veuillez indiquer le nom de votre société')
      .min(8, 'Password is too short - should be 8 chars minimum.'),
  }),
};

export const JobPostTitle = withFormik(formikOptions)(InnerForm);
