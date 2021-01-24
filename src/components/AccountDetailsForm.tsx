import React from "react";
import {
  Grid,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

interface Props {
  submit: (step: number) => void;
  formValues: any;
  setFormValues: (formValues: any) => void;
}

interface AccountDetails {
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
}

const AccountDetailsForm: React.FC<Props> = ({
  submit,
  formValues,
  setFormValues,
}) => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Must be an email").required("Required"),
    userName: Yup.string()
      .max(20, "Username must be smaller than 20")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password must be greater than 8")
      .required("Required"),
    confirmPassword: Yup.string()
      .equals([Yup.ref("password")], "Must be the same password")
      .required("Required"),
  });
  const handleSubmit = (values: AccountDetails) => {
    submit(2);
    setFormValues((prevValues: any) => {
      return {
        ...prevValues,
        ...values,
      };
    });
  };
  return (
    <div>
      <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form autoComplete='off'>
            <Container>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Field
                    name="email"
                    as={TextField}
                    required
                    variant="outlined"
                    label="Email"
                    error={
                      formik.touched.email && formik.errors.email
                        ? formik.errors.email
                        : null
                    }
                    helperText={
                      <ErrorMessage
                        name="email"
                        component={() => (
                          <Typography variant="caption" color="error">
                            {formik.errors.email}
                          </Typography>
                        )}
                      />
                    }
                    s
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="userName"
                    as={TextField}
                    required
                    variant="outlined"
                    label="User Name"
                    error={
                      formik.touched.userName && formik.errors.userName
                        ? formik.errors.userName
                        : null
                    }
                    helperText={
                      <ErrorMessage
                        name="userName"
                        component={() => (
                          <Typography variant="caption" color="error">
                            {formik.errors.userName}
                          </Typography>
                        )}
                      />
                    }
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="password"
                    as={TextField}
                    required
                    variant="outlined"
                    label="Password"
                    type="password"
                    error={
                      formik.touched.password && formik.errors.password
                        ? formik.errors.password
                        : null
                    }
                    helperText={
                      <ErrorMessage
                        name="password"
                        component={() => (
                          <Typography variant="caption" color="error">
                            {formik.errors.password}
                          </Typography>
                        )}
                      />
                    }
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="confirmPassword"
                    as={TextField}
                    required
                    variant="outlined"
                    label="Confirm Password"
                    type="password"
                    error={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                        ? formik.errors.confirmPassword
                        : null
                    }
                    helperText={
                      <ErrorMessage
                        name="confirmPassword"
                        component={() => (
                          <Typography variant="caption" color="error">
                            {formik.errors.confirmPassword}
                          </Typography>
                        )}
                      />
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
        )}
      </Formik>
    </div>
  );
};

export default AccountDetailsForm;
