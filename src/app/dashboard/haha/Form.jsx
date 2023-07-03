'use client'
import { useRouter } from "next/navigation"
const Form = ({action}) => {
const router = useRouter()
    const haha = async (e) => {
e.preventDefault()
const username = e.target[1].value
// console.log(e.target[1].value);
   try {
            await fetch("/api/user", {
              method: "POST",
              body: JSON.stringify({
                username,
              }),
            });
            // mutate();
                
            e.target.reset();
          } catch (err) {
            // setError(err);
            console.log(err);
          }
    }
  return (
    <>
     <form action={action} onSubmit={haha}>
    <input type="text" name="name"/>
    <button onClick={() => router.push('/dashboard/haha')}>click me</button>
</form>
</>
  )
}

export default Form