

const getData = async (id) => {
    const res = await fetch(`http://localhost:3000/api/student/${id}`, {
        cache: "no-store",
      });
    
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
    
      return res.json();
}

const stuInfo = async ({params}) => {
    const data = await getData(params.id);
  return (
    
<div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${data.first_name} ${data.last_name}`}</h5>
    <h1 className="font-medium">
      Department: {data.department}</h1>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Course: {data.course}</p>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Year: {data.course}</p>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Gender: {data.gender}</p>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Age: {data.age}</p>
</div>

  )
}

export default stuInfo