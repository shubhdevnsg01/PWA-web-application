import Conversation from "../models/Conversation.js"
export const newConversation =async(req,res)=>{
    try{
        const senderId=req.body.senderId
        const receiverId=req.body.receiverId
        const exist= await Conversation.findOne({members:{$all:[receiverId,senderId]}})

        if(exist){
            res.status(200).json({
                msg:'Conversation alerady exist'
            })
        }
        const newConversation=new Conversation({
            members:[senderId,receiverId]
        })
        await newConversation.save()
        return res.status(200).json('Conversation saved successfully')
    }catch(error){
        res.status(500).json(error.message)
    }
}


export const getConversation = async (req, res) => {
    try {
        const senderId=req.body.senderId
        const receiverId=req.body.receiverId
        let conversation = await Conversation.findOne({ members: { $all: [ request.body.senderId, request.body.receiverId] }});
        res.status(200).json(conversation);
    } catch (error) {
        res.status(500).json(error);
    }

}