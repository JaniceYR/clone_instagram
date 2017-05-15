{
  session: {
    currentUser: {
      id: 1,
      username: 'demoid'      
    },
    errors: []
  },
  user: {
    id: 1,
    username: 'demoid',
    name: 'Demo Id'
    profile_pic_url: 'user_pic.png',
    bio: "User Bio",
    photos: [1, ...],
    followers: [2, ...],
    following: [3, ...],
    likes: [4, ...]
  },
  photo: {
    id: 1,
    username: 'demoid',
    profile_pic_url: 'user_pic.png',
    photo_url: 'photo.png',
    description: "my first photo on my CloneInstagram",
    comments: {
      1: {
        username: 'demoid',
        body: "test comment1"
      },
      2: {
        username: 'janice',
        body: "wow awesome!"
      }
    },
    likes: {
      1: {
        username: 'janice'
      }
    }
  }
}
