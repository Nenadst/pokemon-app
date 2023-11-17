import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import routes from 'src/utils/routes';
import { createUser } from 'src/api/user/userApi';
import { useNavigate } from 'react-router-dom';
import { SUCCESFULLY_CREATED_USER } from '../../../utils/constants';
import { Cache } from '../../../config/cache';

const useCreationUser = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(createUser, {
    onSuccess: () => {
      navigate(routes.LOGIN_PAGE);
      queryClient.invalidateQueries([Cache.USER]);
      toast.success(SUCCESFULLY_CREATED_USER);
    },
    onError: (err: Error) => {
      toast.error(err.message);
    }
  });

  return { mutate };
};

export { useCreationUser };
