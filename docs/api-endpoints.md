#API Endpoints

##HTML API

**Root**

- `GET /` - Loads React web app

##JSON API

**Users**

- `GET /api/users`
- `GET /api/user/:username`
- `POST /api/users`
- `GET /api/user/:id/photos`
- `GET /api/user/:id/follows`
- `POST /api/user/:id/follows`
- `GET /api/user/:id/followers`

**Session**

- `POST /api/session`
- `DELETE /api/session`

**Photos**

- `GET /api/photos`
- `GET /api/photo/:id`
- `GET /api/photo/:id/comments`
- `POST /api/user/:id/photos`
- `PATCH /api/photo/:id`
- `DELETE /api/photo/:id`
- `POST /api/photo/:id/likes`

**Comments**

- `POST /api/photo/:id/comments`
- `PATCH /api/comment/:id`
- `DELETE /api/comment/:id`

**Likes**

- `DELETE /api/like/:id`

**Follows**

- `DELETE /api/follow/:id`
