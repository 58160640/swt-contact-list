const request = require('supertest');
const router = require('../server');


describe('GET contacts',()=>{
  it('GET Successfully',(done)=>{
    request(router).get('/contacts')
    .expect(200)
    .then((res)=>{
      let contacts = res.body
      let contact = contacts[0]
      expect(contacts instanceof Array).toBeTruthy()
      expect(contact.id).not.toBeUndefined()
      expect(contact.name).toBeDefined() 
      expect(contact.phone).not.toBeNull()
      expect(contact.email).toBeDefined()
      expect(contact.url).toBeDefined()
      expect(contact.notes).not.toBeNull()
      done()
    })
  })
  })