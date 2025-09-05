import Alumni from '@/components/Alumni'
import ChooseHowYouLearn from '@/components/ChooseHowYouLearn'
import Courses from '@/components/Courses'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import NewsAndBlog from '@/components/NewsAndBlog'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <Courses />
      <ChooseHowYouLearn />
      <Alumni />
      <NewsAndBlog />
      <Footer />
    </>
  )
}

export default page