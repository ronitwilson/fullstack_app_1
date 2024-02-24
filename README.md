# mevn_app_1

* use cors package, morgan package
* tutorial link: https://www.youtube.com/watch?v=Fa4cRMaTDUI&t=943s&ab_channel=freeCodeCamp.org
* part 2 https://www.youtube.com/watch?v=xZMwg5z5VGk&t=1124s&ab_channel=freeCodeCamp.org
* part 3 https://www.youtube.com/watch?v=H6hM_5ilhqw&t=144s&ab_channel=freeCodeCamp.org


# Next steps  ?
* Go microservices ? -> https://www.youtube.com/watch?v=_7-IhHMptNo&list=PLmD8u-IFdreyh6EUfevBcbiuCKzFk0EW_&index=11&ab_channel=NicJackson
* Full stack app playlist -> https://www.youtube.com/watch?v=P4kuSxpjA48&list=PLChiukrA-RMOEB1PRQqB1NITIRsDz9pIN&ab_channel=CodingWithDawid
* Uber events app with micro services-> https://www.youtube.com/watch?v=8-L8C5DxIiA&list=PLT5Jhb7lgSBMF7JqIV6OZZ9LYPGhqZjfS&ab_channel=IndiTechCoder
* aws playlist -> https://www.youtube.com/watch?v=SG8blanhAOg&list=PLBfufR7vyJJ7k25byhRXJldB5AiwgNnWv&index=12&ab_channel=ExamPro
* Next app -> https://www.youtube.com/watch?v=mYy-d6BtqmU&ab_channel=CodingWithDawid

# 12-02-2024
## After the authentication flow from frontend to backend
* make login route
  * use findOne to check if email matchs a db entry
  * then check if the password is the smae as one provided
* hint: sequelize({force: true}) -> force drops the table in the db
* 

# 13-02-2024
## use jwt for authentication
* Have a jwtSignUser(user) -> jwt.sign(user, jwtSecret, expiresIn: 190)
* login retrun -> res.send({user:UserJson, token: jwtSignUser(UserJson))

## use bcrypt to encrpt the password
* In User model have a comparePassword method.
 *  User.prototype.comparePassword = function(password) { return bcrypt.compareAsync(password, this.password)}
*  have hooks -> beforeCreate, update, save (41 mins)
*  

## in the client front install vuex
* have a vuex store.

# 19-02-2024
* Have frontend page to show the songs
* Have the song array load from backend
* In backend have a SongsController.js -> have a index method to get songs , post method to save songs
* Have a songs model
*  do a song.create(req.body)  to store the entry to the db 
*  have a song.findAll({limit: 10})  to fetch songs
* fetch and show it on UI

## UI to create song
* After song is created move to the /songs overview page
* Have a function to verify all the fileds for the song is creater
  fn() {
  Object.keys(this.song).every(key => !!this.song[key])

* in the view song page have a button to go to a page to see the details.

## 20-02-24
* continue from Part 6 15 mins

## 24-02-25
* update the index in the songsController
* How to use the $or statement in vue
 * songs = await Song.findAll({ where: { $or: [ 'title,'artist', 'genre', 'album'].map(key => ({ $like: `%$search%`))}})
* at 30 mins part 6 start making a script to push in data.
