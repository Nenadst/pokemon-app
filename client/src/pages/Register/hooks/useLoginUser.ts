import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import routes from 'src/utils/routes';
import { loginUser } from 'src/api/user/userApi';
import { useNavigate } from 'react-router-dom';
import { SUCCESFULLY_LOGIN_USER } from '../../../utils/constants';
import { Cache } from '../../../config/cache';

const useLoginUser = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(loginUser, {
    onSuccess: () => {
      queryClient.invalidateQueries([Cache.USER]);
      toast.success(SUCCESFULLY_LOGIN_USER);
      navigate(routes.ROOT);
    },
    onError: (err: Error) => {
      toast.error(err.message);
    }
  });

  return { mutate };
};

export { useLoginUser };
