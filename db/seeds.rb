# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.destroy_all
# Post.destroy_all
# Follow.destroy_all
# Like.destroy_all
# Comment.destroy_all

user1 = User.create(username: "demoID", password: "password",
                    name: "Janice Lee", bio: "Hi there! This id is for demo. :)", profile_pic_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495406902/1662763_1155477257805616_1310834924_a_xmqzhi.jpg")
user2 = User.create(username: "user2", password: "password",
                    name: "User2", bio: "test id no.2", profile_pic_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495480689/dfkmka1kiru8b1x5fiog.jpg")
user3 = User.create(username: "user3", password: "password",
                    name: "User3", bio: "test id no.3", profile_pic_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495480689/dfkmka1kiru8b1x5fiog.jpg")
user4 = User.create(username: "user4", password: "password",
                    name: "User4", bio: "test id no.4", profile_pic_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495480689/dfkmka1kiru8b1x5fiog.jpg")

post1 = Post.create(user_id: user1.id, photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495134612/18513006_1538444429521465_7732084092316942336_n_qqn9sm.jpg",
            description: "나의 첫 번째 이미지!", location: "San Francisco")
post2 = Post.create(user_id: user1.id, photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495134807/18011757_223702351446633_1468456194745040896_n_vvwwgo.jpg",
            description: "나의 두 번째 이미지!", location: "Tucson")
post3 = Post.create(user_id: user2.id, photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495134652/17076682_294288370986805_5845730968400297984_n_nfszn4.jpg",
            description: "서울 한옥마을", location: "Seoul")
post4 = Post.create(user_id: user2.id, photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495134638/17334196_169472920235487_7769195607641554944_n_rhf2mx.jpg",
            description: "소샬리토의 새벽", location: "Sausalito")
post5 = Post.create(user_id: user2.id, photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495134821/17881855_286284638495019_1828291294993055744_n_ptoqzi.jpg",
            description: "미국에 놀러온 언니", location: "Phoenix")

post6 = Post.create(user_id: user1.id, photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495405978/d4ell1kpf0fsh67ucxht.jpg",
            description: "아름다운 카페", location: "San Francisco")
post7 = Post.create(user_id: user1.id, photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495234267/owpklnzcpbhfrj7dryr3.jpg",
            description: "구하우스", location: "Korea")
post8 = Post.create(user_id: user1.id, photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495134767/17438109_789314367891321_6968004522685759488_n_zchlgp.jpg",
            description: "몬터레이 바다", location: "Monterey")
post9 = Post.create(user_id: user2.id, photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495134622/17265404_381853918866828_6001447451553169408_n_aoqfhe.jpg",
            description: "소샬리토의 새벽", location: "Sausalito")
post10 = Post.create(user_id: user2.id, photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495134767/17438109_789314367891321_6968004522685759488_n_zchlgp.jpg",
            description: "미국에 놀러온 언니", location: "Phoenix")

follow1 = Follow.create(follower_id: user1.id, following_id: user2.id)
follow2 = Follow.create(follower_id: user1.id, following_id: user3.id)
follow3 = Follow.create(follower_id: user2.id, following_id: user1.id)
follow4 = Follow.create(follower_id: user3.id, following_id: user1.id)
follow5 = Follow.create(follower_id: user4.id, following_id: user1.id)

likes1 = Like.create(user_id: user1.id, post_id: post1.id)
likes2 = Like.create(user_id: user1.id, post_id: post3.id)
likes3 = Like.create(user_id: user2.id, post_id: post1.id)
likes4 = Like.create(user_id: user3.id, post_id: post1.id)
likes5 = Like.create(user_id: user2.id, post_id: post2.id)

comment1 = Comment.create(user_id: user1.id, post_id: post1.id,
                body: "1st comment from user1")
comment2 = Comment.create(user_id: user2.id, post_id: post1.id,
                body: "nice pic!")
comment3 = Comment.create(user_id: user3.id, post_id: post1.id,
                body: "Copyright (c) 2017 Copyright Holder All Rights Reserved.")
comment4 = Comment.create(user_id: user4.id, post_id: post1.id,
                body: "Coffee made from house-roasted beans served along with baked goods in a bi-level, industrial space.
Address: 270 7th St, San Francisco, CA 94103
Hours: Open today · 7AM–7PM
Phone: (415) 861-1313
Menu: places.singleplatform.com")
comment5 = Comment.create(user_id: user1.id, post_id: post1.id,
                body: "Thanks for details!")

comment6 = Comment.create(user_id: user2.id, post_id: post2.id,
                body: "where is it?")
comment7 = Comment.create(user_id: user3.id, post_id: post2.id,
                body: "awesome!")
comment8 = Comment.create(user_id: user4.id, post_id: post3.id,
                body: "멋지당")
comment9 = Comment.create(user_id: user1.id, post_id: post3.id,
                body: "나중에 같이 가자")
comment10 = Comment.create(user_id: user2.id, post_id: post3.id,
                body: "하하하하하하하하하하하하하하")
