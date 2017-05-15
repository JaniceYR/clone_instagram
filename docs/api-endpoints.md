#API Endpoints

##HTML API

**Root**

- `GET /` - Loads React web app

##JSON API

**Users**

- `GET /api/users`
- `GET /api/user/:id`
- `POST /api/users`

**Session**

- `POST /api/session`
- `DELETE /api/session`

**Photos**

- `GET /api/photos`
- `GET /api/photo/:id`
- `PATCH /api/photo/:id`

- `GET /api/user/:id/photos`
- `POST /api/user/:id/photos`

**Comments**

- `PATCH /api/comment/:id`
- `DELETE /api/comment/:id`

- `GET /api/photo/:id/comments`
- `POST /api/photo/:id/comments`

**Likes**

- `POST /api/photo/:id/likes`
- `DELETE /api/like/:id`

**Followings**

- `GET /api/user/:id/follows`
- `GET /api/user/:id/followers`
- `POST /api/user/:id/follows`
- `DELETE /api/follow/:id`
