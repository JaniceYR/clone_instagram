# Schema Information

### users
column_name     | data_type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
bio             | text      |
profile_pic_url | text      |

## photos
column_name | data_type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (users), indexed
photo_url   | text      | not null
description | text      |
location    | string    |

### followings
column_name     | data_type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
follower_id     | integer   | not null, foreign key (users), indexed, unique (following_id)
following_id    | integer   | not null, foreign key (users), indexed

## likes
column_name | data_type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (users), indexed, unique (photo_id)
photo_id    | integer   | not null, foreign key (photos), indexed

## comments
column_name | data_type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
user_id     | integer   | not null, foreign key (users), indexed
photo_id    | integer   | not null, foreign key (photos), indexed
