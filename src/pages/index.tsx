import SearchableLayout from "@/componenets/searchable-layout";
import style from "./index.module.css"
import { ReactNode } from "react";
import books from '@/mock/books.json'
import BookItem from "@/componenets/book-item";
import { InferGetServerSidePropsType } from "next";

 export const getServerSideProps = () => {
  // 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터 불러오는 함수

  const data ="hello";
  return {
    props:{
      data,
    },
  };
 };

export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data);
  return <div className={style.container}>
    <section>
      <h3>지금 추천하는 도서</h3>
      {books.map((book) =>(
        <BookItem key={books.id}{...book}/>
          ))}
    </section>
    <section>
      <h3>등록된 모든 도서</h3>
    </section>
  </div>;
}


Home.getLayout= (page : ReactNode)=>{
  return <SearchableLayout>{page}</SearchableLayout>
}