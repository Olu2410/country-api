import axios from "axios";
import { useState } from "react"

const Test=() => {

    const [formData, setFormData] = useState({
        title: "",
        userId: "",
        body: "",
    })
    const handleChange = (e)=>{
        const {name, value} = e.target
        // console.log(e.target)
        
        setFormData((prevFormData) => ({...prevFormData,[name]: value }))

        console.log(formData);
    }; 
    const handleSubmit =() =>{
//         fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify(formData),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//     }

        axios
        .post("https://jsonplaceholder.typicode.com/posts/", formData)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      };


  return (
    <div className="flex w-screen justify-center"> 
        <form onSubmit={handleSubmit} className="*:border *:pl-1 *:border-slate-900 gap-5 *:rounded-md flex flex-col w-80">
            <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange}/>
            <input type="text" name="userId" placeholder="UserId"  value={formData.userId} onChange={handleChange}/>
            <textarea value={formData.body} onChange={handleChange} name="body" placeholder="body" cols="30" rows="10" ></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Test