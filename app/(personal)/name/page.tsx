'use client';

import 'bootstrap/dist/css/bootstrap.css';

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="container">
      <h2 className="title">
        <span className="title-word title-word-1">My</span>
        <span className="title-word title-word-2">Name</span>
        <span className="title-word title-word-3">Is</span>
        <span className="title-word title-word-4">Abdullah</span>
      </h2>
      <button className='btn btn-outline-primary' onClick={() => {
        router.push("./name/address")
      }}>Address Page</button>
    </div>
  )
}