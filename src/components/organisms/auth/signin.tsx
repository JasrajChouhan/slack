import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { UseFormReturn } from 'react-hook-form';
import { NavigateFunction } from 'react-router';
import CardWrapper from './card-wrapper/card-wrapper';
import CardWrapperFooter from './card-wrapper/card-wrapper-fotter';
import CardWrapperHeader from './card-wrapper/card-wrapper-header';
import { useEffect } from 'react';

export interface SigninProps {
  form: UseFormReturn<
    {
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
const Signin = ({ onSubmit, isSubmitting, navigate, isSuccess, form }: SigninProps) => {
  useEffect(() => {
    if (isSuccess) {
      navigate('/home'); // build in future
    }
  }, [isSuccess, navigate]);
  return (
    <div className="flex h-screen items-center justify-center">
      <CardWrapper>
        <CardWrapperHeader
          isHeader
          headerTitle="Sign In with Slack"
          isLabel
          label="Join with Slack and use latest features"
        />

        <Form {...form}>
          <form onSubmit={onSubmit} className="mx-auto w-[90%] space-y-4">
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
              {isSubmitting ? 'Loading...' : 'Sign In'}
            </Button>
          </form>
        </Form>
        <Separator className="my-2 border border-gray-200" />
        <CardWrapperFooter
          isFooter
          footerTitle="I don't have an account."
          showLink={true}
          linkText="Sign Up"
          onLinkClick={() => navigate('/auth/signup')}
        />
      </CardWrapper>
    </div>
  );
};

export default Signin;
