
//Blog Action Start
// =======================================================
import {v4 as uuid} from 'uuid'
export const blogAdd = ({title="",description="",dataAdded=0})=>({
    type: "ADD_BLOG",
    blog:{
        id:uuid(),
        title:title,
        description: description,
        dataAdded: dataAdded
    }
});
export const blogRemove = ({id})=>(
    {
        type:"REMOVE_BLOG",
        id:id
    }
)

export const blogEdit = (id,updates)=>({
    type:"EDIT_BLOG",
    id,
    updates
})
// =======================================================
//Blog Action End
