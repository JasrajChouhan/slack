import { useSignin } from '@/hooks/api/auth';
import { SigninSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import Signin from './signin';

const SigninContainer = () => {
  const navigate = useNavigate();
  const { mutateAsync: signin, isSuccess } = useSignin();

  const form = useForm<z.infer<typeof SigninSchema>>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: z.infer<typeof SigninSchema>) => {
    console.log(data);
    try {
      const response = await signin(data);
      console.log(response);
    } catch (error) {
      throw new Error('Signup failed');
    }
  };

  return (
    <Signin
      form={form}
      onSubmit={handleSubmit(onSubmit)}
      isSubmitting={isSubmitting}
      navigate={navigate}
      isSuccess={isSuccess}
    />
  );
};

export default SigninContainer;
