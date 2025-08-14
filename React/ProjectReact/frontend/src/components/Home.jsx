import React, {useState} from 'react';
function Homepage(){
    const [data, setData] = useState([
        {id:1, name: 'ashu', age:21, city: 'noida'},
        {id:2, name: 'ashish', age:21, city: 'gurgaon'},
        {id:3, name: 'pranjal', age:21, city: 'gaziabad'},
    ]);


const handleDelete = (id) => {
    setData(data.filter(item=>item.id!==id));
};
const handleEdit = (id) =>{
    alert(`editing item with id: ${id}`)
}
console.log("Data: ", data)
  return (
    <div className="conatiner mt-5">
        <h2>Data Table</h2>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>city</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            
            <tbody>
                {data.length > 0 ? (
                data.map((item)=>{
                    return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.city}</td>
                        <td>
                            <button className='btn btn-danger btn-sm'
                            onClick={()=>handleEdit(item.id)}
                            > Edit </button>
                            </td>
                        <td>
                            <button className='btn btn-danger btn-sm'
                            onClick={()=>handleDelete(item.id)}
                            > Delete </button>
                            </td>
                            {/* <td className='btn'>edit</td>
                            <td className='btn btn-danger btn-sm'>delete</td> */}
                            </tr>  );  
                        })):(<tr>
                           <td>no data available</td> </tr>)}
            </tbody>
            
        </table>
    </div>
  );
}

export default Homepage