import Head from 'next/head'
import { END } from "redux-saga";
import HomePage from '../components/Client/Home/Home'
import { getCategories } from "../store/action/categories_action";
import { wrapper } from '../store/store';
export default function Home() {

  return (
    <HomePage />
  )
}
export const getStaticProps = wrapper.getStaticProps(async({store}) => {
  store.dispatch(getCategories());
  store.dispatch(END);
  await store.sagaTask.toPromise();
})