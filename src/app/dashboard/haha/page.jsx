
import Form from "./Form"


async function getData() {
    const res = await fetch('http://localhost:3000/api/user',{ next: { revalidate: 2 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  
const Haha = async () => {
    const data = await getData()

       const handleSubmit = async (e) => {
        "use server"
        // e.preventDefault();
       const username = 'jajajaja'
      //  console.log(username);
      //  console.log(e);
   
      //  console.log(e.target[0].value);
        // try {
        //     await fetch("/api/user", {
        //       method: "POST",
        //       body: JSON.stringify({
        //         username,
        //       }),
        //     });
        //     mutate();
        //     e.target.reset();
        //   } catch (err) {
        //     // setError(err);
        //     console.log(err);
        //   }
    };

    // console.log(data);
  return (
     <div>
      <h1>dasdas</h1>
      {data?.map(item => <h1>{item.username}</h1>)}
      {/* <form method="POST" action={handleSubmit}>
        <input type="text" name="name"/>
      <button type="submit">Add to Cart</button>
    </form> */}
 
     <Form action={handleSubmit}/>


    </div>
  )
}

export default Haha