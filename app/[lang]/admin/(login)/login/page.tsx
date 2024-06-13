import Route from '@/modules/admin/login/route';

export default function LoginPage(props: { params: { lang: string } }) {
  return <Route params={props.params} />;
}
