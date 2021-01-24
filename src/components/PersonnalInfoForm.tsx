import React from "react";
import { Field, Form, Formik } from "formik";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import * as Yup from "yup";

interface PersonnalInfo {
  firstName: string;
  lastName: string;
  age: number | null;
  city: string;
}

interface Props {
  submit: (step: number) => void;
  formValues: any;
  setFormValues: (formValues: any) => void;
}

const PersonnalInfoForm: React.FC<Props> = ({
  submit,
  formValues,
  setFormValues,
}) => {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    age: Yup.number()
      .min(10, "Age must be greater than 10")
      .max(60, "Age must be less than 60")
      .required("Required"),
    city: Yup.string().required("Required"),
  });
  const handleSubmit = (values: PersonnalInfo) => {
    console.log(values);
    submit(1);
    setFormValues((prevValues: any) => {
      return {
        ...prevValues,
        ...values,
      };
    });
  };
  return (
    <>
      <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          console.log(formik);
          return (
            <Form autoComplete="off">
              <Container>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="firstName"
                      required
                      as={TextField}
                      variant="outlined"
                      label="First Name"
                      error={
                        formik.touched.firstName && formik.errors.firstName
                          ? formik.errors.firstName
                          : null
                      }
                      helperText={
                        formik.touched.firstName && formik.errors.firstName
                          ? formik.errors.firstName
                          : null
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="lastName"
                      required
                      as={TextField}
                      variant="outlined"
                      label="Last Name"
                      error={
                        formik.touched.lastName && formik.errors.lastName
                          ? formik.errors.lastName
                          : null
                      }
                      helperText={
                        formik.touched.lastName && formik.errors.lastName
                          ? formik.errors.lastName
                          : null
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="age"
                      required
                      as={TextField}
                      type="number"
                      variant="outlined"
                      label="Age"
                      error={
                        formik.touched.age && formik.errors.age
                          ? formik.errors.age
                          : null
                      }
                      helperText={
                        formik.touched.age && formik.errors.age
                          ? formik.errors.age
                          : null
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="city"
                      required
                      as={TextField}
                      variant="outlined"
                      label="City"
                      error={
                        formik.touched.city && formik.errors.city
                          ? formik.errors.city
                          : null
                      }
                      helperText={
                        formik.touched.city && formik.errors.city
                          ? formik.errors.city
                          : null
                      }
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container justify="space-between">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ margin: "20px 0px" }}
                      onClick={() => submit(0)}
                      disabled
                    >
                      Back
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ margin: "20px 0px" }}
                      type="submit"
                    >
                      Next
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default PersonnalInfoForm;
