import { FC } from 'react';
import { Avatar, Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import theme from 'src/theme';
import { useFormik } from 'formik';
import { registerValidationSchema } from 'src/utils/formValidation';
import { StyledLink } from './Register.styles';
import { useCreationUser } from './hooks/useRegisterUser';

const Register: FC = () => {
  const { mutate } = useCreationUser();

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      userInfo: ''
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      mutate(values);
    }
  });

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{ bgcolor: theme.palette.custom.white, borderRadius: 3 }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 8
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: theme.palette.custom.success }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create new account
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            name="name"
            label="First Name"
            autoComplete="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            autoComplete="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            margin="normal"
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            autoComplete="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
          <TextField
            margin="normal"
            fullWidth
            id="userInfo"
            name="userInfo"
            label="User Info"
            autoComplete="userInfo"
            value={formik.values.userInfo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.userInfo && Boolean(formik.errors.userInfo)}
            helperText={formik.touched.userInfo && formik.errors.userInfo}
            multiline
            rows={4}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Register
          </Button>
          <Grid container>
            <Grid item>
              <StyledLink to={'/login'}>{'Already have an account? Login'}</StyledLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
