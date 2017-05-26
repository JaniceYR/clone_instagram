## Component Hierarchy
**Root*
**AuthFormContainer**
- AuthForm
  - Sign In
  - Sign Up

**NavigationComponent**
- Home
- Add New Photo
- User Profile Page
- Log Out

**PhotoFeedContainer**
- PhotoContainer
  - UserDetailContainer
  - LikeContainer
  - CommentContainer
    - CommentItem

**UserProfileContainer**
- UserDetailContainer
- PhotoItemContainer
  - PhotoDetailContainer

**EditProfileContainer**

**AddNewPhotoContainer**

## Routes

|Path   | Component   |
|-------|-------------|
| "/signup" | "AuthFormContainer" |
| "/signin" | "AuthFormContainer" |
| "/feed" | "NavigationComponent" |
| "/feed" | "PhotoFeedContainer" |
| "/profile/:userId" | "UserProfileContainer" |
| "/profile/:userId" | "PhotoItemContainer" |
| "/profile/:userId/photos/:photoId" | "PhotoDetailContainer" |
| "/profile/:userId/editProfile" | "EditProfileContainer" |
| "/new-photo" | "AddNewPhotoContainer" |
