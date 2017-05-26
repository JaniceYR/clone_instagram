# CloneInstagram

[Clone-Instagram](https://clone-stagram.herokuapp.com/#/) is a web application inspired by Instagram for following the other users and sharing pictures.
It was built using Ruby on Rails backend with PostgreSQL database and a React/Redux frontend.

## Features & Implementation
* User can Sign up or Sign in with secure authentication



### Flexibility
![check_on_phone]
### Welcoming User & Suggestions
![suggestion](https://github.com/JaniceYR/clone_instagram/blob/master/docs/features/suggestions_page.png)
```
  def index
    @users = User.joins(:followers)
                .select("users.*, count(follows) as follower_count")
                .group("users.id")
                .order("follower_count DESC")
                .limit(5)
    render "api/users/index"
  end
```

### Feed


## Project Design
Clone-Instagram was designed and built in two weeks.
The original [proposal](https://github.com/JaniceYR/clone_instagram/blob/master/docs/README.md) included:
* [React Components Hierarchy](https://github.com/JaniceYR/clone_instagram/blob/master/docs/component-hierarchy.md)
* [DB schema](https://github.com/JaniceYR/clone_instagram/blob/master/docs/schema.md)
* [Wireframes](https://github.com/JaniceYR/clone_instagram/tree/master/docs/wireframes)
  (Wireframe example)
  ![wireframe_user_profile_page](https://github.com/JaniceYR/clone_instagram/blob/master/docs/wireframes/user_profile_page.png)

## Technologies
### Backend
* Ruby On Rails
* jBuilder
* PostgreSQL Database
* Heroku

### Frontend
* React/Redux
* javascript
* SCSS/CSS
* npm
* Webpack

### Other
* Cloudnary for users' profile pictures and post pictures storage.
* BCrypt for password-salting and hashing for a secure authentication system.

## Additional Features
* Add Geotags using Google map api
* Search for photos by Geotags


- [ ] New account creation, login, and guest/demo login
- [ ] Production README, replacing this README
- [ ] Hosting on Heroku
- [ ] Images
- [ ] Likes
- [ ] Commenting on images
- [ ] Following & Photo feed


**Objective:** Functioning rails project with front-end Authentication
