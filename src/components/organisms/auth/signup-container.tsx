import { useSignup } from '@/hooks/api/auth';
import { SignupSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import Signup from './signup';

const SignupContainer = () => {
  const navigate = useNavigate();
  const { mutateAsync: singup, isSuccess } = useSignup();

  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: z.infer<typeof SignupSchema>) => {
    console.log(data);
    try {
      const response = await singup(data);
      console.log(response);
    } catch (error) {
      throw new Error('Signup failed');
    }
  };

  return (
    <Signup
      form={form}
      onSubmit={handleSubmit(onSubmit)}
      isSubmitting={isSubmitting}
      navigate={navigate}
      isSuccess={isSuccess}
    />
  );
};

export default SignupContainer;
