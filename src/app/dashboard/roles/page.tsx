import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Dashboard: Roles',
};

export default function Page() {
  return redirect('/');
}
