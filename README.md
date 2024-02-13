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
