import { getServerSideProps } from "next/dist/build/templates/pages";

const getData = (props) => {
  console.log(props, "skjdfhjsdfjsdfgj");

  return (
    <>
      <h2>user data</h2>
      {props.users.map((item) => {
        <li key={item.id}>{item.username}</li>;
      })}
    </>
  );
};

export const getServerSideProps = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();
  return {
    props: {
      data,
    },
  };
};

export default getData;

// import React from 'react'
// import Link from "next/link";
// import {useSWR} from "swr";

// const fetcher = (...arg) => fetch(...arg).then((res) => res.json());

// const getUsers = () => {
//   const { data, error } = useSWR("https://fakestoreapi.com/users", fetcher);

//   console.log(data, "----------data-----------");
//   console.log(error, "----------data-----------");
//   return (
//     <>
//       <h2> details of Users</h2>
//       {data && data.map((item) => (
//         <Link href={`/getdata/${item.id}`} key={item.id}>
//           <div>{item.username}</div>
//         </Link>
//       ))}
//     </>
//   );
// };

// export default getUsers;
