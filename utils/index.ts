function imageWithFallback(image?: string): string {
  return image && image !== 'N/A'
    ? image
    : `https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80`
}

export {imageWithFallback}
