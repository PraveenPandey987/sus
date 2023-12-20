
import { useEffect, useState } from 'react';
import { app ,database } from '../firebaseConfig';
import {
  getAuth,
  createUserWithEmailAndPassword,
  
} from 'firebase/auth';
function App() {
  let auth=getAuth();
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value }

    setData({ ...data, ...inputs })
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
 

  return (
    <div className="App-header">
      <input
        placeholder="Email"
        name="email"
        type="email"
        className="input-fields"
        onChange={event => handleInputs(event)} style={{color : "black"}}
      />
      <input
        placeholder="Password"
        name="password"
        type="password"
        className="input-fields"
        onChange={event => handleInputs(event)}
        style={{color : "black"}}
      />

      <button onClick={handleSubmit}>Log In</button>
      
    </div>
  );
}

export default App;





// import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../firebaseConfig"; // Assuming you have your Firebase auth and firestore instances in 'auth.js'

// const Register = () => {
//   const [email, setemail] = useState('');
//   const [password, setPassword] = useState('');
//   const [fullname, setfullname] = useState('');
//   const [role, setrole] = useState('User');
//   const [country, setcountry] = useState('India');
//   const [streetaddress, setstreetaddress] = useState('');
//   const [city, setcity] = useState('');
//   const [region, setregion] = useState('');
//   const [postalcode, setpostalcode] = useState('');
//   const [about, setabout] = useState('');

//   const handleRegistration = async (e) => {
//     e.preventDefault();

//     try {
//       // Create user with email and password
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       // Store additional user data in Firestore
//       const user = userCredential.user;
//       await db.collection('users').doc(user.uid).set({
//         email: user.email,
//         fullname,
//         role,
//         country,
//         streetaddress,
//         city,
//         region,
//         postalcode,
//         about,
//       });

//       console.log('Registration successful');
//     }
//     catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleRegistration}>
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
//                   value={fullname}
//                   onChange={(e) => setfullname(e.target.value)}
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
//                   value={email}
//                   onChange={(e) => setemail(e.target.value)}
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
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   autoComplete="email"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-3">
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
//                   value={role}
//                   onChange={(e) => setrole(e.target.value)}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 >
//                   <option>User</option>
//                   <option>Start-up</option>
//                   <option>Incubator</option>
//                   <option>Accelerator</option>
//                   <option>Investor</option>
                  
//                 </select>
//               </div>
//             </div>
//             <div className="sm:col-span-3">
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
//                   value={country}
//                   onChange={(e) => setcountry(e.target.value)}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 >
//                   <option>India</option>
//                   <option>U.S.A</option>
//                   <option>Canada</option>
//                 </select>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label
//                 htmlFor="streetaddress"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Street address
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="streetaddress"
//                   id="streetaddress"
//                   value={streetaddress}
//                   onChange={(e) => setstreetaddress(e.target.value)}
//                   autoComplete="street-address"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2 sm:col-start-1">
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
//                   value={city}
//                   onChange={(e) => setcity(e.target.value)}
//                   autoComplete="address-level2"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="region"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 State / Province
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="region"
//                   id="region"
//                   value={region}
//                   onChange={(e) => setregion(e.target.value)}
//                   autoComplete="address-level1"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="postalcode"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 ZIP / Postal code
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="postalcode"
//                   id="postalcode"
//                   value={postalcode}
//                   onChange={(e) => setpostalcode(e.target.value)}
//                   autoComplete="postalcode"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="border-b border-gray-900/10 pb-12">
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
//                   value={about}
//                   onChange={(e) => setabout(e.target.value)}
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
//         </div>
//       </div>

//       <div className="mt-6 flex items-center justify-end gap-x-6">
//         <button
//           type="button"
//           className="text-sm font-semibold leading-6 text-gray-900"
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Save
//         </button>
//       </div>
//     </form>
//   );
// }

// export default Register