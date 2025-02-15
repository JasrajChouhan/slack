import CardWrapper from '@/components/organisms/auth/card-wrapper/card-wrapper';
import CardWrapperHeader from '@/components/organisms/auth/card-wrapper/card-wrapper-header';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { SignupSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import CardWrapperFooter from './card-wrapper/card-wrapper-fotter';
import { useNavigate } from 'react-router';
import { useSignup } from '@/hooks/api/auth';
import { BiLoaderCircle } from 'react-icons/bi';
import { useEffect } from 'react';

const Signup = () => {
  const navigate = useNavigate();
  const { mutate, mutateAsync: singup, isSuccess } = useSignup();

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
      alert(error);
      throw new Error('Signup failed');
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/auth/signin');
    }
  }, [isSuccess, navigate]);
  return (
    <div className="flex h-screen items-center justify-center">
      <CardWrapper>
        <CardWrapperHeader
          isHeader
          headerTitle="Sign Up with Slack"
          isLabel
          label="Join with Slack and use latest features"
        />

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-[90%] space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="jhone_doe" {...field} disabled={isSubmitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="jhonedoe12@mail.com" {...field} disabled={isSubmitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="********" type="password" {...field} disabled={isSubmitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant={'outline'} className="w-full">
              {isSubmitting ? <BiLoaderCircle className="mr-2 h-4 w-4 animate-spin" /> : 'Sign Up'}
            </Button>
          </form>
        </Form>
        <Separator className="my-2 border border-gray-200" />
        <CardWrapperFooter
          isFooter
          footerTitle="Aleardy have an account."
          showLink={true}
          linkText="Login"
          onLinkClick={() => navigate('/auth/signin')}
        />
      </CardWrapper>
    </div>
  );
};

export default Signup;
