import axios from "axios"
export default function Blog({ posts }: any) {
    console.log("posts", posts)
    return (
      <ul>
        {posts.map((post: any, index: any) => (
          <li key={index}>{post.name}</li>
        ))}
      </ul>
    )
  }




  // export async function getStaticPaths() {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  //   const posts : any = await res.json()
  //   console.log("postspaths", posts)
  
  //   const paths = posts.map((post:any) => ({
  //     params: { id: post.id },
  //   }))
  
    
  //   return { paths, fallback: false }
  // }

  
  


  export async function getStaticProps() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    return {
      props: {
        posts:res.data,
      },
    }
  }