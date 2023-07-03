

export const metadata = {
  title: 'Portfolio | UCode Clinic',
  description: 'UCode Clinic Portfolio Page',
}

async function getData() {
  const res = await fetch('http://localhost:3000/api/user')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Category = async () => {
 const data = await getData()
   console.log(data);
  return (
    <div>
    <h1>dasdas</h1>
    {data?.map(item => <h1>{item.username}</h1>)}
    
{/* <form onSubmit={handleSubmit}>
  <input type="text" />
  <button>click me</button>
</form> */}

  </div>
  )
}

export default Category