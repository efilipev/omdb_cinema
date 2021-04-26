import * as Yup from 'yup';

export const MovieAddValidationSchema = Yup.object().shape({
  Title: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  Year: Yup.number().min(4).required('Required'),
  Runtime: Yup.string().required('Required'),
  Genre: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  Director: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
});
