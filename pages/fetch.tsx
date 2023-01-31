import React from "react";

export default function FetchData() {
  return (
    <div>
    <h1>fetching data using Staticprops</h1> 
      {/* {data.map((eachUser: any) => (
        <div key={eachUser.id}>
          <li>{eachUser.name}</li>
          <li>{eachUser.email}</li>
        </div>
      ))} */}
    </div>
  );
}

export async function staticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  
  console.log(data)

//   return {props:
//       {response}
  
   
//   };
}
