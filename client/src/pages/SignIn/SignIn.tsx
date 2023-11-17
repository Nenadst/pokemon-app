import { FC } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import theme from 'src/theme';
import { Cache } from 'src/config/cache';
import { useQueryClient } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { loginValidationSchema } from 'src/utils/formValidation';
import { useLoginUser } from '../Register/hooks/useLoginUser';
import { StyledLink } from './SignIn.styles';

const SignIn: FC = () => {
  const queryClient = useQueryClient();
  const { mutate } = useLoginUser();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      mutate({ email: values.email, password: values.password });
      queryClient.invalidateQueries([Cache.POKEMONS]);
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
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
          <FormControlLabel
            control={
              <Checkbox
                value={formik.values.rememberMe}
                onChange={formik.handleChange}
                name="rememberMe"
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <StyledLink to={'/'}>Forgot password?</StyledLink>
            </Grid>
            <Grid item>
              <StyledLink to={'/register'}>{"Don't have an account? Sign Up"}</StyledLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
