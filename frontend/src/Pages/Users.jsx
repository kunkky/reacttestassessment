import React from 'react'
import useFetechUsers from '../Hooks/useFetechUsers'

const Users = () => {
//use custome hook you created fetch the api  
    const { loading, userError, users } = useFetechUsers();

console.log(users);
  return (
    <div className='h-screen flex items-center flex-col'>
        <div className="h-[100px] w-full bg-purple-900 text-white font-extrabold flex text-center justify-center items-center flex-col">Complete Project by User Tables </div>

        {
            loading ===false && users !==null ?
        
        <div className="mt-10 p-5 bg-purple-50 h-auto w-auto rounded-lg flex md:flex-wrap">
              <div className="container mx-auto p-8">
                  <table className="table-auto w-full">
                      <thead>
                          <tr>
                              <th className="px-4 py-2">address</th>
                              <th className="px-4 py-2">email</th>
                              <th className="px-4 py-2">username</th>
                              <th className="px-4 py-2">firstname</th>
                              <th className="px-4 py-2">lastname</th>
                          </tr>
                      </thead>
                      <tbody>
                      {
                                      users.map((index)=>(
                                         
                                          <tr key={index}>
                                              <td className="border px-4 py-2">lorem</td>
                                              <td className="border px-4 py-2">lorem</td>
                                              <td className="border px-4 py-2">lorem</td>
                                              <td className="border px-4 py-2">lorem</td>
                                              <td className="border px-4 py-2">lorem</td>
                                              
                                          </tr>
                                      
                                      ))
                      }
                          
                          
                         
                      </tbody>
                  </table>
              </div>
        </div> :<div>No Data Yet</div>
}
    </div>
  )
}

export default Users