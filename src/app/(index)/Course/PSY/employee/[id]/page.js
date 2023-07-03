

const getData = async (id) => {
    const res = await fetch(`http://localhost:3000/api/employee/${id}`, {
        cache: "no-store",
      });
    
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
    
      return res.json();
}

const emInfo = async ({params}) => {
    const data = await getData(params.id);
  return (
    
<div href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${data.first_name} ${data.last_name}`}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      Department: {data.department}</p>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      Job/Title: {data.job_role}</p>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      Gender: {data.gender}</p>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      Age: {data.age}</p>
</div>

  )
}

export default emInfo