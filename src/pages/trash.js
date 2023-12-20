
import { useEffect, useState } from 'react';
import { app ,database } from '../firebaseConfig';
import {collection,addDoc} from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  
} from 'firebase/auth';

function App() {
  let auth=getAuth();
  const [data, setData] = useState({ })
  const collectionRef =collection(database,'users')
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value }

    setData({ ...data, ...inputs })
  }

  const handleInfo =() =>{
   addDoc(collectionRef,data).then(()=>{
    alert('data added')
   })
   .catch((err)=>{
    alert(err.message)
   })
  }
  const handleSubmit =() =>{
    createUserWithEmailAndPassword(auth,data.email,data.password)
    .then((response)=>{
      alert("registered succesfully")
    })
    .catch((err)=>{
      alert(err.message)
    })
  
  }
  function handle(){
    handleSubmit();
    handleInfo();
  }
 

  return (
    <div className="App-header">
      <input
        placeholder="Email"
        name="email"
        type="email"
        className="input-fields"
        onChange={event => handleInputs(event)} style={{color : "black"}}
      />
      <input        placeholder="Password"
        name="password"
        type="password"
        className="input-fields"
        onChange={event => handleInputs(event)}
        style={{color : "black"}}
      />
              <input   style={{color : "black"}}
                 placeholder='name'
                  type="text"
                  name="fullname"
                  className="input-fields"
                   onChange={event => handleInputs(event)}
                  autoComplete="given-name"
                
                />
                <select style={{color : "black"}}

                placeholder="profession"
                  id="role"
                  name="role"
                  onChange={event => handleInputs(event)}
                  className="input-fields"
                >
                  <option>User</option>
                  <option>Start-up</option>
                  <option>Incubator</option>
                  <option>Accelerator</option>
                  <option>Investor</option>
                  
                </select>

                <select style={{color : "black"}}

                placeholder="country"
                  id="country"
                  name="country"
                 
                  onChange={event => handleInputs(event)}
                  className="input-fields"
                >
                  <option>India</option>
                  <option>U.S.A</option>
                  <option>Canada</option>
                </select>
                <input style={{color : "black"}}
                placeholder='city'
                  type="text"
                  name="city"
               onChange={event => handleInputs(event)}
                  autoComplete="address-level2"
                  className="input-fields"
                />
                 {/* <input style={{color : "black"}}

                  type="file"
                  name="document"
                  id="document"
                  className="input-fields"
                /> */}

      <button onClick={handle}>Register</button>
      
    </div>
  );
}

export default App;






//     <form >
//       <div className="space-y-12">
//         <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">
//             Personal Information
//           </h2>

//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-3">
//               <label
              
//                 htmlFor="fullname"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Full name
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="fullname"
//                   id="fullname"
                  
//                   onChange={event => handleInputs(event)}
//                   autoComplete="given-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-4">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
                
//                   onChange={event => handleInputs(event)}
//                   autoComplete="email"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//             <div className="sm:col-span-4">
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Password
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
                  
//                   onChange={event => handleInputs(event)}
//                   autoComplete="email"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             {/* <div className="sm:col-span-3">
//               <label
//                 htmlFor="role"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Select Your Role
//               </label>
//               <div className="mt-2">
//                 <select
//                   id="role"
//                   name="role"
//                   onChange={event => handleInputs(event)}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 >
//                   <option>User</option>
//                   <option>Start-up</option>
//                   <option>Incubator</option>
//                   <option>Accelerator</option>
//                   <option>Investor</option>
                  
//                 </select>
//               </div>
//             </div> */}
//             {/* <div className="sm:col-span-3">
//               <label
//                 htmlFor="country"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Country
//               </label>
//               <div className="mt-2">
//                 <select
//                   id="country"
//                   name="country"
                 
//                   onChange={event => handleInputs(event)}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 >
//                   <option>India</option>
//                   <option>U.S.A</option>
//                   <option>Canada</option>
//                 </select>
//               </div>
//             </div> */}

//             {/* <div className="col-span-full">
//               <label
//                 htmlFor="streetaddress"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Street address
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="streetAddress"
//                   id="streetaddress"
                  
//                   onChange={event => handleInputs(event)}
//                   autoComplete="street-address"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div> */}

//             {/* <div className="sm:col-span-2 sm:col-start-1">
//               <label
//                 htmlFor="city"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 City
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="city"
//                   id="city"
                  
//                   onChange={event => handleInputs(event)}
//                   autoComplete="address-level2"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div> */}

//             {/* <div className="sm:col-span-2">
//               <label
//                 htmlFor="region"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 State / Province
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="state"
//                   id="region"
                 
//                   onChange={event => handleInputs(event)}
//                   autoComplete="address-level1"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div> */}

//             {/* <div className="sm:col-span-2">
//               <label
//                 htmlFor="postalcode"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 ZIP / Postal code
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="code"
//                   id="postalcode"
                 
//                   onChange={event => handleInputs(event)}
//                   autoComplete="postalcode"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div> */}
//           </div>
//         </div>
//         {/* <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">
//             Profile
//           </h2>
//           <p className="mt-4 text-sm leading-6 text-gray-600">
//             This information will be displayed publicly so be careful what you
//             share.
//           </p>

//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="col-span-full">
//               <label
//                 htmlFor="about"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 About
//               </label>
//               <div className="mt-2">
//                 <textarea
//                   id="about"
//                   name="about"
                  
//                   onChange={event => handleInputs(event)}
//                   rows={3}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <p className="mt-3 text-sm leading-6 text-gray-600">
//                 Write a few sentences about yourself.
//               </p>
//             </div>
//           </div>
//           <div className="col-span-full">
//               <label
//                 htmlFor="portfolio"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Document
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="file"
//                   name="document"
//                   id="document"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//         </div> */}
//       </div>

//       <div className="mt-6 flex items-center justify-end gap-x-6">
        
      
//            <button onClick={handleInfo}>save</button>
        
//       </div>
//     </form>
//   );
// }
// export default App;
