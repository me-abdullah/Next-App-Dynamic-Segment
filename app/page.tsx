import 'bootstrap/dist/css/bootstrap.css';

import Link from 'next/link';
import './globals.css';

export default function Home() {
  
  return (
    <div className="container">
      <h2 className="title">
        <span className="title-word title-word-1">Hello</span>
        <span className="title-word title-word-2">World</span>
        <span className="title-word title-word-3">From</span>
        <span className="title-word title-word-4">Abdullah</span>
      </h2>

     
      <button className='btn custom'>
        <Link className='frlnk' href="./name">Go To Name Page</Link>
      </button>
    </div>
  );
}