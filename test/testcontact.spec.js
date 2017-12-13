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
  
  describe('GET contacts 1',()=>{
    it('GET ID 1 Successfully',(done)=>{
      request(router).get('/contacts/1') 
      .expect(200)
      .then((res)=>{
        let contact = res.body
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

    
describe('POST contacts',()=>{
    it('Check Post id contactList id:12 ',(done)=>{
      request(router).post('/contacts')
      .send([{id:12,name:'Suphalert',email:'58160640@go.buu.ac.th',phone: '0922266382',url:'www.Louis.com' ,notes:'Ok Pom Kao jai' }])
      .expect(201)
      .then((res)=>{
        let contacts = res.body
        let contact = contacts[0]
       expect(contacts).toBeDefined()
       expect(contact.id).toBe(12)
       expect(contact.name).toBe('Suphalert')
       expect(contact.email).toBe('58160640@go.buu.ac.th')
       expect(contact.phone).toBe('0922266382')
       expect(contact.url).toBe('www.Louis.com')
       expect(contact.notes).toBe('Ok Pom Kao jai')
      done()
     })
   })
  })