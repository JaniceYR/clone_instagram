# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.destroy_all
Post.destroy_all
Follow.destroy_all
Like.destroy_all
Comment.destroy_all
user = []
post = []
user[0] = User.create(username: "demoID",
                    password: "password",
                    name: "Demo",
                    bio: "Hi there! This id is for demo. :) by Janice Yura Lee",
                    profile_pic_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495406902/1662763_1155477257805616_1310834924_a_xmqzhi.jpg")
user[1] = User.create(username: "janice",
                    password: "password",
                    name: "Janice Yura Lee",
                    bio: "from Korea, in San Francisco",
                    profile_pic_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495480689/dfkmka1kiru8b1x5fiog.jpg")
user[2] = User.create(username: "totorasora",
                    password: "password",
                    name: "Kristin Lee",
                    bio: "World treveler",
                    profile_pic_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495480689/dfkmka1kiru8b1x5fiog.jpg")

3.times do |i|
  user << User.create(username: Faker::Internet.unique.user_name,
                          password: "password",
                          name: Faker::Name.unique.name,
                          bio: Faker::TwinPeaks.quote,
                          profile_pic_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495480689/dfkmka1kiru8b1x5fiog.jpg"
  )
end
3.times do |i|
  user << User.create(username: Faker::Internet.unique.user_name,
                          password: "password",
                          name: Faker::Name.unique.name,
                          bio: Faker::Friends.quote,
                          profile_pic_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495480689/dfkmka1kiru8b1x5fiog.jpg"
  )
end
3.times do |i|
  user << User.create(username: Faker::Internet.unique.user_name,
                          password: "password",
                          name: Faker::Name.unique.name,
                          bio: Faker::StarWars.quote,
                          profile_pic_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495480689/dfkmka1kiru8b1x5fiog.jpg"
  )
end

post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495134612/18513006_1538444429521465_7732084092316942336_n_qqn9sm.jpg",
                    description: "picnic with friends next to bay bridge",
                    location: "San Francisco")
post << Post.create(user_id: user[0].id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495134622/17265404_381853918866828_6001447451553169408_n_aoqfhe.jpg",
                    description: "Chilling in Sausalito",
                    location: "Sausalito")
post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495827129/13724503_1776808879243939_1807590478_n_1_b9pj9p.jpg",
                    description: "Can I send this pic to natgeo? haha",
                    location: "Iceland")
post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495826884/13731273_1341031485924583_257488041_n_1_ogl1bk.jpg",
                    description: "suffer from altitude sickness but was amazing day",
                    location: "Cusco, Peru")
post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495826170/14659275_1092117627569205_1173205260756320256_n_1_xkxsxm.jpg",
                    description: "never could be forgotten. RIP.",
                    location: "New York, USA")

post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495826883/13687194_1637235649924907_2011273940_n_1_jpfeo0.jpg",
                    description: "yeah, enjoy.",
                    location: "Andes, Peru")
post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495826773/14032914_1764697090475851_1701043184_n_1_k1gqn3.jpg",
                    description: "Do you wanna join?",
                    location: "San Blas, Panama")
post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495826764/14099709_633067803527215_1603994458_n_1_cbh8hi.jpg",
                    description: "Best air view in my life",
                    location: "San Andres, Colombia")
post << Post.create(user_id: user[2].id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495825623/17494270_942688902534520_2861329967331934208_n_xotbfz.jpg",
                    description: "What a day",
                    location: "Phoenix")
post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495825792/16110275_1612771085406606_8625198708746616832_n_bm7qne.jpg",
                    description: "My cat, Kas",
                    location: "San Francisco, USA")
post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495825708/18160658_1760730647572762_1275451655931822080_n_sclade.jpg",
                    description: "Sweet nap time",
                    location: "Seoul, Korea")


post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495825649/17661879_424215161269355_5480743986161254400_n_ijjhge.jpg",
                    description: "Salvation Mountain",
                    location: "Niland, USA")
post << Post.create(user_id: user.sample.id,
                    photo_url: "http://res.cloudinary.com/cloneinstagram/image/upload/v1495825849/15034678_219755265102165_8625941196922945536_n_n4zlsr.jpg",
                    description: "Late night",
                    location: "Fukuoka, Japan")
post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495825845/15035750_270765119986840_989121317477285888_n_jd5fbt.jpg",
                    description: "Museum with my mom",
                    location: "Jeju, Korea")
post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495825859/14733660_1264684106904646_2342427467626577920_n_wniwzw.jpg",
                    description: "kinnnnnnnda art?",
                    location: "Gyungki, Korea")
post << Post.create(user_id:  user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495825820/15101584_1615394555420726_1626296835578527744_n_jf6cmq.jpg",
                    description: "Lazy day",
                    location: "Tokyo, Japan")


post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495826008/13731242_1652906388366318_1623049947_n_nznxor.jpg",
                    description: "Traffic jam in Icelad",
                    location: "Iceland")
post << Post.create(user_id:  user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495825468/11246919_1883583205248279_6616868333234946048_n_l7bn1x.jpg",
                    description: "Arizona gems! 😍👌👍💙💜",
                    location: "Arizona, USA")
post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495826022/13721333_1260611577305969_384931202_n_tra1r2.jpg",
                    description: "Beautiful port village, but has sad history",
                    location: "Cartagena, Colombia")
post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495825957/13745167_1056668761083527_869400716_n_qj8gzq.jpg",
                    description: "Icaland needs more colors",
                    location: "Iceland")
post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495825546/17267407_1119191491540660_5708458754148663296_n_abarzv.jpg",
                    description: "the first Milky Way in my life",
                    location: "Utah, USA")


post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495825509/15876658_1832540130321100_6392904897058045952_n_essqmu.jpg",
                    description: "my favorite tree in this planet",
                    location: "Gyungki, Korea")
post << Post.create(user_id:  user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495234286/ga8vjxee6ekxulw5djvt.jpg",
                    description: "Epic cafe in Siberian silver birch forest",
                    location: "Seoul, Korea")
post << Post.create(user_id: user[0].id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495825604/17493457_341311582932958_7352455377587273728_n_i2qiid.jpg",
                    description: "Why here is still so freezing, but fantastic though.",
                    location: "GrandCanyon, USA")
post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495825539/17265396_1837298266533235_1321873084101165056_n_lvag2n.jpg",
                    description: "Good morning.",
                    location: "Los Angeles, USA")
post << Post.create(user_id: user[1].id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495825555/17332941_1865555440380614_6305551172132405248_n_ve8dx9.jpg",
                    description: "Dinner with my family",
                    location: "Sausalito, USA")


post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495134652/17076682_294288370986805_5845730968400297984_n_nfszn4.jpg",
                    description: "서울 한옥마을! Awesome place in Seoul, we can see how was the life like back in the 1900s in Korea.",
                    location: "Seoul, Korea")
post << Post.create(user_id: user[0].id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495825481/15403567_193362027795907_5628509363862765568_n_mqzqrl.jpg",
                    description: "At the museum",
                    location: "Tokyo, Japan")
post << Post.create(user_id: user[2].id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495825588/17438902_614902482053103_8355928723421134848_n_m8ln6n.jpg",
                    description: "My favorite pic from this roadtrip",
                    location: "Tucson, USA")
post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495405978/d4ell1kpf0fsh67ucxht.jpg",
                    description: "Best coffee in San Francisco! at Glass Coffee",
                    location: "San Francisco, USA")
post << Post.create(user_id: user[0].id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495134781/17596426_160493681138776_7067818858270162944_n_rnj4ni.jpg",
                    description: "So Arizona, love this peaceful place",
                    location: "Arizona, USA")


post << Post.create(user_id: user[1].id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495825784/16585454_1646064589028306_9010490127402663936_n_k0fpze.jpg",
                    description: "Another pic in Gu house",
                    location: "Gu-House, Korea")
post << Post.create(user_id: user[0].id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495134807/18011757_223702351446633_1468456194745040896_n_vvwwgo.jpg",
                    description: "Road trip to middle of nowhere",
                    location: "Arizona, USA")
post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495134767/17438109_789314367891321_6968004522685759488_n_zchlgp.jpg",
                    description: "Sunset on the Monterey beach",
                    location: "Monterey, USA")
post << Post.create(user_id: user.sample.id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495134628/16584759_1272249132811181_5310439925760393216_n_whvghv.jpg",
                    description: "Best private museum I've ever visited in Korea",
                    location: "Gu-House, Korea")
post << Post.create(user_id: user[0].id,
                    photo_url: "https://res.cloudinary.com/cloneinstagram/image/upload/v1495134638/17334196_169472920235487_7769195607641554944_n_rhf2mx.jpg",
                    description: "Beautiful sunrise in Sausalito",
                    location: "Sausalito, USA")

comments = [
  "I Love this pic",
  "Where is it?",
  "It's so sick",
  "Oh my gosh",
  "Let's go together next time",
  "Extraordinary!",
  "Great shot!",
  "Great light",
  "Beautiful scenery",
  "Beautiful",
  "Beautiful👍",
  "👍",
  "👍👍",
  "👍👍👍",
  "👍👍👍👍",
  "📷🔝😀👍",
  "💖💖💖",
  "❤️",
  "💙",
  "💯👏",
  "😍😍",
  "😘",
  "😝😝",
  "😎",
  "👏",
  "👏👏",
  "Outstanding and impressive 👍👍",
  "Love this😍",
  "Wow😳",
  "Super",
  "Adorable",
  "Wow",
  "How is this possible",
  "Awesome!",
  "Amazing",
  "SUPER WOW! That is awesome.",
  "Really amazing !😉😄 Good job for the photographer 👍",
  "Hahahahah😂😂😂",
  "Wowww....perfect click",
  "Hahahah",
  "Love it",
  "Like it",
  "Looks awesome",
  "Wow what a shot😍",
  "Go for it!",
  "Woooooow!",
  "Incredible!",
  "Absolutely incredible post, thank you for sharing!",
  "Thank you for sharing, wow",
  "Nice",
]
(post.length*5).times do
  Comment.create(user_id: user.sample.id,
  post_id: post.sample.id,
  body: comments.sample)
end

(user.length*15).times do
  new_follow = Follow.new(follower_id: user.sample.id,
                          following_id: user.sample.id)
  next if Follow.find_by(follower_id: new_follow.follower_id,
                            following_id: new_follow.following_id)
  new_follow.save
end

(post.length*20).times do
  new_like = Like.new(user_id: user.sample.id,
                      post_id: post.sample.id)
  next if Like.find_by(user_id: new_like.user_id,
                        post_id: new_like.post_id)
  new_like.save
end
