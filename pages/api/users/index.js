import { usersList } from "../../../components/data"

 const Handler = (req, res) => {
    if (req.method === "GET"){
    res.status(200).json(usersList )
    console.log("usersList", usersList);



    }
    else if (req.method === "POST"){
    console.log("+++calling++++++++")
        const newUser = req.body.user
        const addedUser = {
            id: new Date(),
            text: newUser
        }
        res.status(201).json(addedUser)
        usersList.push(addedUser)


    }
    // else if (req.method === "DELETE"){
    // //     const deletedUserId = req.body.user.id 
    // //     usersList.filter(each => ! each.id === deletedUserId)
    
        

    // // }


}

export default Handler