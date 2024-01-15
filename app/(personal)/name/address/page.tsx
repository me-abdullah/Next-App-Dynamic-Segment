'use client';

import 'bootstrap/dist/css/bootstrap.css';

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="container">
      <h2 className="title">
        <span className="title-word title-word-1">I</span>
        <span className="title-word title-word-2">Live</span>
        <span className="title-word title-word-3">In</span>
        <span className="title-word title-word-4">Karachi</span>
      </h2>
      <button className='btn btn-outline-primary' onClick={() => {
        router.push("./designation")
      }}>Go to Designation</button>
    </div>
  )
}