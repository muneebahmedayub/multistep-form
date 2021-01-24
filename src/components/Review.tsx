import React from "react";
import {
  Grid,
  Button,
  Container,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  makeStyles,
} from "@material-ui/core";

interface Props {
  submit: (step: number) => void;
  formValues: any;
}

const useStyles = makeStyles({
  table: {
    minHeight: 650
  }
})

const Review: React.FC<Props> = ({ submit, formValues }) => {
  const classes = useStyles()
  const {
    firstName,
    lastName,
    age,
    city,
    email,
    userName,
    password,
  } = formValues;
  const createData = (field: string, value: string | number) => {
    return { field, value };
  };
  const rows = [
    createData("First Name", firstName),
    createData('Last Name', lastName),
    createData('Age', age),
    createData('City', city),
    createData('Email', email),
    createData('User Name', userName),
    createData('Password', password)
  ];
  return (
    <div>
      <Container>
        <Grid container item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Fields</TableCell>
                  <TableCell align="right">Values</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row: any) => {
                  return (
                    <TableRow>
                      <TableCell>{row.field}</TableCell>
                      <TableCell align="right">{row.value}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid container justify="space-between">
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              style={{ margin: "20px 0px" }}
              onClick={() => submit(1)}
            >
              Back
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "20px 0px" }}
              onClick={() => submit(3)}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Review;
