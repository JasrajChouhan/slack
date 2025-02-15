import CardWrapper from '@/components/organisms/auth/card-wrapper/card-wrapper';
import CardWrapperHeader from '@/components/organisms/auth/card-wrapper/card-wrapper-header';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { BiLoaderCircle } from 'react-icons/bi';
import { NavigateFunction } from 'react-router';
import CardWrapperFooter from './card-wrapper/card-wrapper-fotter';

export interface SignupProps {
  form: UseFormReturn<
    {
      username: string;
      email: string;
      password: string;
    },
    any,
    undefined
  >;
  onSubmit: any;
  isSubmitting: boolean;
  navigate: NavigateFunction;
  isSuccess: boolean;
}
const Signup = ({ form, onSubmit, isSubmitting, navigate, isSuccess }: SignupProps) => {
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
          <form onSubmit={onSubmit} className="mx-auto w-[90%] space-y-4">
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
                    <Input placeholder="userUSER12@" type="password" {...field} disabled={isSubmitting} />
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
