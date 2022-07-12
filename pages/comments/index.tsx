import { NextPage } from 'next'

import React, { useState } from 'react'

import { IComment } from '../../types/comment'

const Comments: NextPage = () => {
  const [state, setState] = useState({ comments: [] as IComment[], loading: false, postCommentBody: '' })

  React.useEffect(() => console.log(state.comments), [state.comments])

  const handleFetchComments = async () => {
    setState((prev) => ({ ...prev, loading: true }))
    const response = await fetch('/api/v1/comments')
    const { comments } = await response.json()
    setState((prev) => ({ ...prev, comments, loading: false }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const response = await fetch('/api/v1/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ body: state.postCommentBody }),
    })

    const { comments } = await response.json()
    setState((prev) => ({ ...prev, comments }))
  }

  const handleDeleteComment = async (commentId: number) => {
    const response = await fetch(`/api/v1/comments/${commentId}`, {
      method: 'DELETE',
    })

    const { comments } = await response.json()
    setState((prev) => ({ ...prev, comments }))
  }

  if (state.loading) return <div>Loading...</div>

  return (
    <div>
      <h1>Comments</h1>
      <button onClick={handleFetchComments}>Fetch comments from our Next.js API</button>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Post a comment" onChange={(e) => setState((prev) => ({ ...prev, postCommentBody: e.target.value }))} />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {state.comments?.map((comment, i) => (
          <li key={i}>
            <div>
              <p>{comment.body}</p>
              <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Comments
