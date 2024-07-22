'use client'
'use client'

import React, { useState } from 'react'
import axios from 'axios'
import './career.scss'
import img from './12.png'
import Image from 'next/image'

// Mock jobs data
const jobsData = [
  {
    id: 6,
    title: 'Java Developer',
    location: 'Remote',
    tags: [
      'Java serverless Lambda/ Fuctional service,',
      'writing functions as a service,',
      'springboot or soap,',
      'python,',
      'mondodb,',
      'Aggregation pipline,',
      'API building,',
      'React,'
    ],
    description:
      ' Empower Professionals is a privately-owned, certified Minority Owned Business Enterprise (MBE), national business and technology consulting firm focused on efficiently and reliably providing flexible solutions for team building across all 50 states. Whether your organization needs a single resource, a niche team of resources, or a complete outsourced solution.',
    responsiblity: [
      'Understanding the Clients need through the job description provided and sourcing candidates through job portals and other social websites accordingly.',
      'Identify and Search Professionals in the US Market through different Sources',
      'Sourcing, screening and evaluating and recruiting candidates through a structured recruitment process',
      'Shortlist and Interview candidates according to the job requirement',
      'Take care of Clients Requirements and place Software professionals',
      'Negotiate on Salary aspects and close the position',
      'Assist Account Manager (s)/Team Lead with urgent technical requirements',
      'Update the Resourcing Application System routinely'
    ],
    Prerequisite: [
      '8 years of professional experience',
      'Budget: upto 45lpa',
      'Professional experience using Java in production quality code.',
      'Excellent written and verbal English communication skills',
      'Strong design skills (HLD and LLD)',
      'Agile and comfortable working in a fast-paced startup environment.',
      'Focus on collaboration and making progress everyday over excellence. '
    ]
  },
  {
    id: 7,
    title: 'Software developer(IITians Only)',
    location: 'Remote',
    tags: ['Any Technology,', 'HTML', 'React,'],
    description:
      'Hiring Tech is a respected IT firm based in Indore, focusing on recruitment and consultancy. Our team comprises 100+ skilled professionals, including senior programmers, designers, and project managers. This diverse talent pool ensures robust support for clients and continuous access to valuable resources and information, enhancing our service capabilities.',
    responsiblity: [
      'Understanding the Clients need through the job description provided and sourcing candidates through job portals and other social websites accordingly.',
      'Identify and Search Professionals in the US Market through different Sources',
      'Sourcing, screening and evaluating and recruiting candidates through a structured recruitment process',
      'Shortlist and Interview candidates according to the job requirement',
      'Take care of Clients Requirements and place Software professionals',
      'Negotiate on Salary aspects and close the position',
      'Assist Account Manager (s)/Team Lead with urgent technical requirements',
      'Update the Resourcing Application System routinely'
    ],
    Prerequisite: [
      'Collaborate remotely to design, develop, and deploy React Native-based Android applications and React JS-based web applications for veterinary professionals and pet owners.',
      'Focus primarily on front-end development, ensuring exceptional user experiences on both Android and web platforms.',
      'Write clean, efficient, and maintainable code adhering to industry best practices.',
      'Conduct thorough testing to ensure quality, reliability, and performance.',
      'Assist in troubleshooting and debugging issues to ensure smooth operation.',
      'Stay updated on emerging technologies, tools, and trends in front-end',
      'Development and healthcare IT.'
    ]
  },
  {
    id: 8,
    title: 'UI/UX Specialist',
    location: 'Remote',
    tags: ['Figma,', 'Adobe', 'UI/UX,'],
    description:
      'Hiring Tech is a respected IT firm based in Indore, focusing on recruitment and consultancy. Our team comprises 100+ skilled professionals, including senior programmers, designers, and project managers. This diverse talent pool ensures robust support for clients and continuous access to valuable resources and information, enhancing our service capabilities.',
    responsiblity: [
      'Understanding the Clients need through the job description provided and sourcing candidates through job portals and other social websites accordingly.',
      'Identify and Search Professionals in the US Market through different Sources',
      'Sourcing, screening and evaluating and recruiting candidates through a structured recruitment process',
      'Shortlist and Interview candidates according to the job requirement',
      'Take care of Clients Requirements and place Software professionals',
      'Negotiate on Salary aspects and close the position',
      'Assist Account Manager (s)/Team Lead with urgent technical requirements',
      'Update the Resourcing Application System routinely'
    ],
    Prerequisite: [
      'A strong portfolio showcasing design projects and experience',
      'Familiarity with design tools - Figma (preferred)',
      'Knowledge of UX design principles and best practices'
    ]
  },
  {
    id: 5,
    title: 'US IT Recruiter',
    location: 'Indore',
    tags: [' Evening/ Night Shift ', ' verbal Communication Skills in English'],
    description:
      ' Empower Professionals is a privately-owned, certified Minority Owned Business Enterprise (MBE), national business and technology consulting firm focused on efficiently and reliably providing flexible solutions for team building across all 50 states. Whether your organization needs a single resource, a niche team of resources, or a complete outsourced solution.',
    responsiblity: [
      'Understanding the Clients need through the job description provided and sourcing candidates through job portals and other social websites accordingly.',
      'Identify and Search Professionals in the US Market through different Sources',
      'Sourcing, screening and evaluating and recruiting candidates through a structured recruitment process',
      'Shortlist and Interview candidates according to the job requirement',
      'Take care of Clients Requirements and place Software professionals',
      'Negotiate on Salary aspects and close the position',
      'Assist Account Manager (s)/Team Lead with urgent technical requirements',
      'Update the Resourcing Application System routinely'
    ],
    Prerequisite: [
      '0 - 6 months years of professional experience',
      'Professional experience using Java in production quality code.',
      'Excellent written and verbal English communication skills',
      'Strong design skills (HLD and LLD)',
      'Agile and comfortable working in a fast-paced startup environment.',
      'Focus on collaboration and making progress everyday over excellence. '
    ]
  },
  {
    id: 1,
    title: 'Sr Java developer',
    location: 'Remote',
    tags: ['Java Spring boot ', 'Python'],
    description:
      'Advertisement technology or ad-tech is an $800 billion industry.  Brands rely on targeting consumers across digital ecosystem yet there are not unified solutions which simplify the complex. Tech leaders Google, Meta, even largest consumer tech companies like Amazon, Uber, Netflix rely on advertising revenue with an ever-evolving ecosystem, the problem statements are diverse, high velocity, and technically challenging for the advertisers. We’re a passionate team with experience that includes building a unicorn programmatic media company, & the development of many of the product & technologies used in scale ad targeting, measurement on digital platforms.',
    responsiblity: [
      'Design and build software solutions that directly impact customers and the world.',
      'Take ownership and be responsible for what you build',
      'Work collaboratively across multiple functions (e.g. Product, Sales, Marketing). ',
      'You will develop and execute against both short and long-term roadmaps, making effective tradeoffs between business impact, user experience, and a high-quality technical foundation.',
      'You will support your fellow engineers through feedback, code reviews, and the advancement of internal tools and processes.',
      'Ensuring that all deliverables adhere to our world-class standards',
      'Help with hiring and organizations building for future scale.'
    ],
    Prerequisite: [
      '5+ years of professional experience',
      'Professional experience using Java in production quality code.',
      'Excellent written and verbal English communication skills',
      'Strong design skills (HLD and LLD)',
      'Agile and comfortable working in a fast-paced startup environment.',
      'Focus on collaboration and making progress everyday over excellence. '
    ]
  },
  {
    id: 2,
    title: 'Frontend Developer',
    location: 'Remote',
    tags: ['React', 'HTML', 'CSS'],
    description:
      'Advertisement technology or ad-tech is an $800 billion industry.  Brands rely on targeting consumers across digital ecosystem yet there are not unified solutions which simplify the complex. Tech leaders Google, Meta, even largest consumer tech companies like Amazon, Uber, Netflix rely on advertising revenue with an ever-evolving ecosystem, the problem statements are diverse, high velocity, and technically challenging for the advertisers. We’re a passionate team with experience that includes building a unicorn programmatic media company, & the development of many of the product & technologies used in scale ad targeting, measurement on digital platforms.',
    responsiblity: [
      'Design and build software solutions that directly impact customers and the world.',
      'Take ownership and be responsible for what you build',
      'Work collaboratively across multiple functions (e.g. Product, Sales, Marketing). ',
      'You will develop and execute against both short and long-term roadmaps, making effective tradeoffs between business impact, user experience, and a high-quality technical foundation.',
      'You will support your fellow engineers through feedback, code reviews, and the advancement of internal tools and processes.',
      'Ensuring that all deliverables adhere to our world-class standards',
      'Help with hiring and organizations building for future scale.'
    ],
    Prerequisite: [
      '5+ years of professional experience',
      'Professional experience using Java in production quality code.',
      'Excellent written and verbal English communication skills',
      'Strong design skills (HLD and LLD)',
      'Agile and comfortable working in a fast-paced startup environment.',
      'Focus on collaboration and making progress everyday over excellence. '
    ]
  },
  {
    id: 3,
    title: 'Backend Developer',
    location: 'Remote',
    tags: ['Node.js', 'MongoDB'],
    description:
      'Advertisement technology or ad-tech is an $800 billion industry.  Brands rely on targeting consumers across digital ecosystem yet there are not unified solutions which simplify the complex. Tech leaders Google, Meta, even largest consumer tech companies like Amazon, Uber, Netflix rely on advertising revenue with an ever-evolving ecosystem, the problem statements are diverse, high velocity, and technically challenging for the advertisers. We’re a passionate team with experience that includes building a unicorn programmatic media company, & the development of many of the product & technologies used in scale ad targeting, measurement on digital platforms.',
    responsiblity: [
      'Design and build software solutions that directly impact customers and the world.',
      'Take ownership and be responsible for what you build',
      'Work collaboratively across multiple functions (e.g. Product, Sales, Marketing). ',
      'You will develop and execute against both short and long-term roadmaps, making effective tradeoffs between business impact, user experience, and a high-quality technical foundation.',
      'You will support your fellow engineers through feedback, code reviews, and the advancement of internal tools and processes.',
      'Ensuring that all deliverables adhere to our world-class standards',
      'Help with hiring and organizations building for future scale.'
    ],
    Prerequisite: [
      '5+ years of professional experience',
      'Professional experience using Java in production quality code.',
      'Excellent written and verbal English communication skills',
      'Strong design skills (HLD and LLD)',
      'Agile and comfortable working in a fast-paced startup environment.',
      'Focus on collaboration and making progress everyday over excellence. '
    ]
  },
  {
    id: 4,
    title: 'Seo Specialist',
    location: 'Remote',
    tags: ['Google ads', 'Seo Tool'],
    description:
      'Advertisement technology or ad-tech is an $800 billion industry.  Brands rely on targeting consumers across digital ecosystem yet there are not unified solutions which simplify the complex. Tech leaders Google, Meta, even largest consumer tech companies like Amazon, Uber, Netflix rely on advertising revenue with an ever-evolving ecosystem, the problem statements are diverse, high velocity, and technically challenging for the advertisers. We’re a passionate team with experience that includes building a unicorn programmatic media company, & the development of many of the product & technologies used in scale ad targeting, measurement on digital platforms.',
    responsiblity: [
      'Design and build software solutions that directly impact customers and the world.',
      'Take ownership and be responsible for what you build',
      'Work collaboratively across multiple functions (e.g. Product, Sales, Marketing). ',
      'You will develop and execute against both short and long-term roadmaps, making effective tradeoffs between business impact, user experience, and a high-quality technical foundation.',
      'You will support your fellow engineers through feedback, code reviews, and the advancement of internal tools and processes.',
      'Ensuring that all deliverables adhere to our world-class standards',
      'Help with hiring and organizations building for future scale.'
    ],
    Prerequisite: [
      '5+ years of professional experience',
      'Professional experience using Java in production quality code.',
      'Excellent written and verbal English communication skills',
      'Strong design skills (HLD and LLD)',
      'Agile and comfortable working in a fast-paced startup environment.',
      'Focus on collaboration and making progress everyday over excellence. '
    ]
  }
]

// Reusable Input Component
const Input = ({ type, name, value, onChange, placeholder }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500"
    required
  />
);

// Job Card Component
const JobCard = ({ job, onClick }) => (
  <li
    key={job.id}
    className='mb-4 p-4 bg-[#fff] rounded-md cursor-pointer max-w-5xl w-[1000px] flex justify-between max-md:flex-wrap'
    onClick={() => onClick(job)}
  >
    <div className='flex flex-col'>
      <div className='flex flex-col max-sm:flex-row max-sm:justify-start max-sm:items-center justify-center gap-3'>
        <Image src={img} alt='' className='max-sm:w-[40px]' />
        <h2 className='text-xl max-sm:text-[16px] font-bold'>{job.title}</h2>
      </div>
      <ul className='mt-2 flex flex-wrap items-center gap-2 max-sm:gap-0 max-md:w-full'>
        <li>Skills:</li>
        {job.tags.map(tag => (
          <li key={tag} className='inline-block max-sm:text-[14px] bg-[#EBF6FC] font-bold text-[#001833] px-2 py-1 rounded-md m-2'>
            {tag}
          </li>
        ))}
      </ul>
    </div>
    <div className='flex flex-col gap-4 justify-center items-center'>
      <p className='text-[#001833] w-[150px] max-md:w-[100px] text-center'>
        {job.location}
      </p>
      <div className='mt-2'>
        <button className='px-8 py-3 max-sm:text-[14px] max-sm:py-1 bg-[#D79442] hover:bg-[#CC7914] text-white rounded-3xl'>
          Apply
        </button>
      </div>
    </div>
  </li>
);

// Job Details Component
const JobDetails = ({ job, onApplyClick }) => (
  <div className='fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-[9999]'>
    <div className='bg-white p-8 max-w-md rounded-lg'>
      <div className='apply-form'>
        <div className='fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 z-[9999]'>
          <div className='bg-white p-10 max-w-xl rounded-lg flex max-w-[1200px] gap-20 max-sm:gap-4 justify-center items-center max-lg:flex-wrap'>
            <div className='job-description max-w-6xl overflow-y-scroll h-[500px] mt-20 max-sm:h-[400px] max-sm:mt-4'>
              <h2 className='text-2xl font-semibold mb-4'>{job.title}</h2>
              <p className='text-gray-600 mb-4'>{job.location}</p>
              <p className='mb-4'>{job.description}</p>
              <h2 className='text-2xl font-semibold mb-4'>Responsibilities</h2>
              <ul className='list-disc ml-5'>
                {job.responsiblity.map(tag => (
                  <li key={tag} className='text-black mb-2'>{tag}</li>
                ))}
              </ul>
              <h2 className='text-2xl font-semibold mb-4'>Prerequisites</h2>
              <ul className='list-disc ml-5'>
                {job.Prerequisite.map(tag => (
                  <li key={tag} className='text-black mb-2'>{tag}</li>
                ))}
              </ul>
              <button className='mt-10 p-4 bg-gray-900 rounded-full text-white' onClick={onApplyClick}>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main Component
const JobsPage = () => {
  const [filter, setFilter] = useState('')
  const [filteredJobs, setFilteredJobs] = useState(jobsData)
  const [selectedJob, setSelectedJob] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: '',
    number: '',
    experience: '',
    CTC: '',
    ECTC: '',
    location: '',
    Notice: '',
    position: false
  })

  const [load, setLoad] = useState(false)
  const [apply, setApply] = useState(false)

  const handleFilterChange = e => {
    setFilter(e.target.value)
    const filtered = jobsData.filter(
      job =>
        job.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        job.location.toLowerCase().includes(e.target.value.toLowerCase()) ||
        job.tags.some(tag =>
          tag.toLowerCase().includes(e.target.value.toLowerCase())
        )
    )
    setFilteredJobs(filtered)
  }

  const handleJobClick = job => {
    setSelectedJob(job)
  }

  const handleApplyClick = () => {
    setSelectedJob(selectedJob => ({
      ...selectedJob,
      showForm: true
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      setLoad(true)
      const response = await axios.post('/api', formData)
      if (response.status === 200) {
        alert('Mail sent successfully')
      }
    } catch (error) {
      alert('Failed to send email')
      console.error('Error occurred while sending email:', error)
    } finally {
      setLoad(false)
    }
  }

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handelApply = () => {
    setApply(!apply)
  }

  const handleClose = () => {
    setApply(false)
    setSelectedJob(null)
  }

  return (
    <div className='w-full flex justify-center'>
      <div className='bgcareer w-[90%] bg-[#FFF7F7] pt-20 max-md:pt-0'>
        <div className='container mx-auto p-4 max-md:p-0 max-w-6xl mb-20 max-md:mb-5 visionbg'>
          <h2 className='text-4xl max-md:text-[24px] font-bold mb-4 text-[#062b43]'>Job Listings</h2>
          <input
            type='text'
            placeholder='Filter by title, location, or tag'
            value={filter}
            onChange={handleFilterChange}
            className='w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500'
          />
          <ul className='flex flex-wrap gap-5 max-w-5xl mx-auto mt-10 max-md:mt-4'>
            {filteredJobs.map(job => (
              <JobCard key={job.id} job={job} onClick={handleJobClick} />
            ))}
          </ul>
          {selectedJob && (
            <JobDetails job={selectedJob} onApplyClick={handelApply} />
          )}
          {apply && (
            <div className='fixed inset-0 flex flex-col justify-center items-center bg-white z-[9999] max-md:p-10'>
              <form onSubmit={handleSubmit} className='flex  flex-col h-full mt-52'>
                <div className='flex gap-4'>
                  <Input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Your Name'
                  />
                  <Input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Your Email'
                  />
                </div>
                <div className='flex gap-4'>
                  <Input
                    type='text'
                    name='resume'
                    value={formData.resume}
                    onChange={handleChange}
                    placeholder='Your Resume'
                  />
                  <Input
                    type='text'
                    name='number'
                    value={formData.number}
                    onChange={handleChange}
                    placeholder='Your Number'
                  />
                </div>
                {/* Add more inputs as needed */}
                <button
                  type='submit'
                  className='mt-10 p-4 bg-gray-900 rounded-full text-white'
                >
                  Submit
                </button>
                <button
                  type='button'
                  className='mt-5 p-4 bg-red-600 rounded-full text-white ml-4'
                  onClick={handleClose}
                >
                  Close
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default JobsPage


