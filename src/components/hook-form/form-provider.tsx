import { FormProvider as Form, UseFormReturn } from 'react-hook-form';
import { CircularLoading } from '../loading';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
  id?: string;
  showBackdrop?: boolean;
};

export default function FormProvider({ id, children, onSubmit, methods, showBackdrop }: Props) {
  return (
    <>
      <Form {...methods}>
        <form
          id={id}
          onSubmit={(e) => {
            e.preventDefault();

            if (onSubmit) onSubmit();

            e.stopPropagation();
          }}
        >
          {children}
        </form>
      </Form>
      {showBackdrop && <CircularLoading open={methods.formState.isSubmitting} />}
    </>
  );
}
