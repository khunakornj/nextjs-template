import { redirect } from 'next/navigation';

export default function RootPage() {
  // You can logic-check cookies or headers here
  redirect('/en');
}
