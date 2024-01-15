import React from 'react'

export default function MyName({params}: {params: {myname: string}}) {
  return (
    <div className="container">
      <h2 className="title">
        <span className="title-word title-word-1">My</span>
        <span className="title-word title-word-2">Name</span>
        <span className="title-word title-word-3">Is</span>
        <span className="title-word title-word-4">{params.myname}</span>
      </h2>
      </div>
  )
}
