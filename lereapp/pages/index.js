import Head from 'next/head'
import styled from "styled-components";
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'
import HomePage from '../components/Client/Home/Home'
import { getCategories } from '../store/action/categories_action';
import { wrapper } from '../store/store';
export default function Home() {
  const dispatch = useDispatch()
//   const placeholderData = useSelector((state) => state.categories)
// console.log(placeholderData)
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  return (
    <HomePage />
  )
}
export const getStaticProps = wrapper.getStaticProps(async({store}) => {
  store.dispatch(getCategories())
  
})