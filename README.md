# CloneInstagram

[Clone-Instagram](https://clone-stagram.herokuapp.com/#/) is a web application inspired by Instagram for following the other users and sharing pictures.
It was built using Ruby on Rails backend with PostgreSQL database and a React/Redux frontend.

## Features & Implementation
* Users can post their pictures and share it.
* Users can follow the other users and also unfollow them.
* Users can comment on the post and delete it. Also can like or unlike the post.

### Flexibility
Clone-Instagram can be used in every browser including Chrome, Safari, and even in mobile browser.
Users can post new pictures and can like and comment, everything using their mobile phone!
![check_on_phone](https://github.com/JaniceYR/clone_instagram/blob/master/docs/features/check_on_iphone.png)

### Secure Authentication
With secure authentication system, users can Sign-up or Sign-in in a secure way.
Or using guest id(DemoId), everyone can explore everything without Sign-up.
![sign_up_page](https://github.com/JaniceYR/clone_instagram/blob/master/docs/features/signup_in_page.png)

### Welcoming User & Suggestions
When users visit Clone-Instagram for the first time and just made their account, users can get a few suggestions for follows.
Suggestions will be the most popular users by followers count.
```ruby
  //users_controller.rb
  def index
    @users = User.joins(:followers)
                .select("users.*, count(follows) as follower_count")
                .group("users.id")
                .order("follower_count DESC")
                .limit(5)
    render "api/users/index"
  end
```
![suggestion_page](https://github.com/JaniceYR/clone_instagram/blob/master/docs/features/suggestions_page.png)

### Feed
When users follow the other users, then users can check their followings posts on their feed page.
Users can comment on feed page and also like or unlike the post.
```ruby
  // posts_controller.rb
  def index
    @posts = Post.where(user_id: current_user.feed_ids)
    render "/api/posts/index"
  end
```

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
* Cloudinary for users' profile pictures and post pictures storage.
* BCrypt for password-salting and hashing for a secure authentication system.

## Additional Features
* Add Geotags using Google map API
* Search for photos by Geotags
