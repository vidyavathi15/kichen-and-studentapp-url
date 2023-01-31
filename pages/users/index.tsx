

import { JavascriptOutlined } from "@mui/icons-material"
import axios from "axios"
import { useState } from "react"

const UsersPage = () => {
    const [listData, setListData] = useState<any>([])
    const [user, setUser] = useState<any>("")
    const updateButton= async () => {
        const updatedUser = await  axios.put("/api/users")
        const updatedUserDetails ={
            id: Date.now(),
            text: user.text

        }
        setListData([...listData, {id: user.id, text: user.text}])

    }
    const onClickLoad= async() => {listData.push()
        const userData = await axios.get('/api/users')
        const {data} = userData
        setListData(data)

    }
    console.log("listData", listData);
    const onClickSubmit= async () => {
        const data = await axios.post('/api/users')
        console.log("jsonData", data.status);
        
    const newUser = {
        id: Date.now(),
        text: user
    }
    console.log("newUser........", newUser)
     listData.push(newUser)

            
        }

const onClickDeleteButton= async() => {
    // const usersList = await axios.delete("/api/users")

}
        
        
return(
    <>
        <button type="button" onClick= {onClickLoad} >LoadingButton</button>

        <input type="text"   value={user} onChange={(e: any) => setUser(e.target.value)}/>
        <button type="button" onClick={onClickSubmit} >Submit</button>
        <button type="button" onClick={updateButton}>UpdateButton</button>
        <button type="button" onClick={onClickDeleteButton}>DeleteButton</button>
        {listData?.map((each: any, index: any) => (
            <div key={index}>
                {each.id} {each.text}
            </div>

    ))}
    </>
    )

}



export default UsersPage