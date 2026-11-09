import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://github.com/yashsahu1628-lab')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Profile: {data?.profile}
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeIidTWtKcB8toetphViWUuEIGMY_2BzeVEkwb3_use66s4QOFCB3vyVqL5YjFQH7rWPhhVBm-kpuOeNt87YpcF2CP56CcTTo6y4kbFNvKIA&s=10" alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://github.com/yashsahu1628-lab')
    return response.json()
}