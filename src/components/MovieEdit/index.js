import React from 'react';
import Modal from '../Modal';
import Input from '../Input';
import Select from '../Select';
import FormComponent from '../Form';
import { Field, Form } from 'formik';
import ButtonComponent from '../Button';
import { genres, years } from '../../utils';
import { FormContent } from '../Form/styles';
import { MovieEditValidationSchema } from './validation';

const MovieEditComponent = (props) => {
  const { isOpen, initialValues, submitForm, handleModalClose } = props;
  return (
    <Modal
      isOpen={isOpen}
      closeButton={true}
      handleModalClose={handleModalClose}
    >
      <FormComponent
        initialValues={initialValues}
        validationSchema={MovieEditValidationSchema}
        submit={submitForm}
      >
        {({ errors, touched }) => (
          <Form>
            <FormContent>
              <Field
                name="Title"
                label="Title"
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
                component={Input}
                errors={errors}
                touched={touched}
              />
              <ButtonComponent type="submit" primary title="Submit" />
            </FormContent>
          </Form>
        )}
      </FormComponent>
    </Modal>
  );
};

export default MovieEditComponent;
