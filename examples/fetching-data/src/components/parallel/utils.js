export function getPostsWithComments(posts = [], comments = []) {
  const postWithComments = posts.map(post => {
    const commentsForPost = comments.filter(comment => comment.postId === post.id)
    return {
      ...post,
      comments: commentsForPost
    }
  })

  return postWithComments
}

export function getPostsWithCommentsAndUsers(posts = [], comments = [], users = []) {
  const postWithCommentsAndUsers = posts.map(post => {
    const commentsForPost = comments.filter(comment => comment.postId === post.id)
    const userForPost = users.find(user => user.id === post.userId)
    return {
      ...post,
      comments: commentsForPost,
      user: userForPost
    }
  })

  return postWithCommentsAndUsers
}
