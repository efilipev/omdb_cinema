import React from 'react';
import Modal from '../Modal';
import Input from '../Input';
import Select from '../Select';
import FormComponent from '../Form';
import { Field, Form } from 'formik';
import ButtonComponent from '../Button';
import FileField from '../Form/FileField';
import { genres, years } from '../../utils';
import { FormContent } from '../Form/styles';
import { MovieAddValidationSchema } from './validation';

const MovieAddComponent = (props) => {
  const { isOpen, modalClose, addPoster, submitForm } = props;
  const initialValues = {
    Title: '',
    Poster: '',
    Year: '',
    Runtime: '',
    Genre: '',
    Director: '',
  };
  return (
    <Modal isOpen={isOpen} closeButton={true} handleModalClose={modalClose}>
      <FormComponent
        initialValues={initialValues}
        validationSchema={MovieAddValidationSchema}
        submit={submitForm}
      >
        {({ values, errors, touched }) => (
          <Form>
            <FormContent>
              <Field
                name="Title"
                label="Title"
                value={values.Title}
                component={Input}
                errors={errors}
                touched={touched}
              />
              <Field
                as="select"
                name="Year"
                label="Year"
                component={Select}
                options={years}
                hiddenTitle="Select a year"
              />
              <Field
                name="Runtime"
                label="Runtime"
                value={values.Runtime}
                component={Input}
                errors={errors}
                touched={touched}
              />
              <Field
                as="select"
                name="Genre"
                label="Genre"
                component={Select}
                options={genres}
                hiddenTitle="Select Genre"
              />
              <Field
                name="Director"
                label="Director"
                value={values.Director}
                component={Input}
                errors={errors}
                touched={touched}
              />
              <FileField
                name="Poster"
                addPoster={addPoster}
                label="Choose a file"
              />
              <ButtonComponent type="submit" primary title="Submit" />
            </FormContent>
          </Form>
        )}
      </FormComponent>
    </Modal>
  );
};

export default MovieAddComponent;
