import database from '../firebase/firebaseConfig';
//Blog Action Start
// =======================================================
// import {v4 as uuid} from 'uuid'
export const blogAdd = (blog)=>({
    type: "ADD_BLOG",
    blog
});

export const addBlogToDatabase = (blogData={})=>{
    return (dispatch)=>{
        const {title="",description="",dataAdded=0} = blogData;
        const blog = {title,description,dataAdded};

        database.ref("blog").push(blog).then((res)=>{
            dispatch(blogAdd({
                id:res.key,
                ...blog
            }))
        })
    }
}


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

export const setBlogs = (blogs) => ({
    type: "SET_BLOGS",
    blogs
})

export const getBlogsFromDatabase = () => {
    return (dispatch) => {
        return database.ref("blog").once("value").then((snapshot) => {
            const blogs = [];

            snapshot.forEach((blog) => {
                blogs.push({
                    id: blog.key,
                    ...blog.val()
                })
            })

            dispatch(setBlogs(blogs));
        })
    }
}