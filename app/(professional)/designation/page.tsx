import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import { useRouter } from "next/navigation";
export default function Designation(){
  const router = useRouter();
  return (
    <div className="container">
      <h2 className="title">
        <span className="title-word title-word-1">I</span>
        <span className="title-word title-word-2">am</span>
        <span className="title-word title-word-3">Frontend</span>
        <span className="title-word title-word-4">Developer</span>
      </h2>
      <Link className='frlnk' href="./">Go to Home</Link>
    </div>

  )
}
