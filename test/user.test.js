const User=require('../models/user')
const request = require('supertest')
const app = require('../server/app')
const Articles = require('../models/article')
const roughArticles = {
    topic:"we are here",
    content:"God is good"
}
const roughUser= {
    priviledge:'admin',
    email:"sunmonuoluwole@gmail.com",
    name:"wole",
    tokens:"554fggffg"
}
beforeEach(async()=>{
  await User.deleteMany()
  await Articles.deleteMany()
  await Articles.create(roughArticles)
  await User.create(roughUser)

})

it('should add',async()=>{
     await request(app).get('/articles/all')
    .expect(200)
    const article = await Articles.find()
    expect(article.length).toBe(1)
    expect(article[0].topic).toBe(roughArticles.topic)
   
})

it('should create new articles',async()=>{
    request(app).post('/articles/me/sunmonuoluwole@gmail.com')
    .expect(200)
    .send({
        topic:'oluwa',
        content:'jesuu'
    })
    .set('code','554fggffg')
})
