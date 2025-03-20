import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Dashboard: Users',
};

export default function Page() {
  return redirect('/');
}
