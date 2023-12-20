import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import '../css/mentors.css'
const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    // More people...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our users</h2>
          <p className="mt-10 text-lg leading-8 text-gray-600">
            Where voices harmonize and differences unite, our community thrives in shared purpose, weaving a tapestry of support, belonging, and boundless possibilities.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
          {people.map((person) => (
            <div className="mentors p-4 ml-10 border-2 border-gray-200 rounded-lg" key={person.name} style={{ width: '600px',
                                                                 height: '400px',       }}>
              <li>
                <div className="flex items-center gap-x-6">

                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                 
                 

                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                   
                  </div>
                  <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">
        message
      </Button>
      <Button variant="outlined" color="error">
        Report
      </Button>
    </Stack>
                </div>
              </li>
              <p className='p-3'>
              🚀 Exciting news! Our team at [Company XYZ] just launched a groundbreaking product aimed at revolutionizing how we approach [industry/sector]. 🌟

We're thrilled to introduce [Product Name], designed to streamline processes and enhance user experiences. With its innovative features, we're confident it'll redefine standards in the [industry].

👉 Want to learn more? Dive deeper into the details in our latest blog post: [Link to Blog Post]

Join us in this journey towards innovation! Share your thoughts in the comments below. #Innovation #ProductLaunch #CompanyXYZ
                </p>
            </div>
          ))}
        </ul>
      </div>
    </div>
    )
  }
  