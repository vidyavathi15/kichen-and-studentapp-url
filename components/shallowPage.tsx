import React from 'react'

  const ShallowPage = (props: any) => {
    // const {usersList} = props 
    console.log("list111", props.usersList.usersData);
    const usersRes = props.usersList.usersData
    
  return (
    <>
    <h1>Hiii</h1>
    {usersRes.map((each: any, index: any) => (
      <div key={index}>{each.id} {each.name} {each.email}</div>
    ))}
    </>
    

    
  )
}

export default ShallowPage
