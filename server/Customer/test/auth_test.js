const chai = require('chai');
const server = require('../server');
const chaiHttp = require('chai-http');

//Assertion style
chai.should();
chai.use(chaiHttp);

describe('Customer Auth API', ()=>{

    /**
     * Test the POST signup route
     */
    describe("POST /signup", () => {
      it("it should not add a user", (done) =>{
        const userCredentials =  {
          "email" : "abc",
          "password" : "abc123"
      }
        chai.request(server)
          .post("/signup")
          .send(userCredentials)
          .end((err, response) =>{
            response.should.have.status(400);
            response.body.should.be.a('object');
            done();
          })
      })
      it("it should not add a user", (done) =>{
        const userCredentials =  {
          "email" : "abc@",
          "password" : "abc12345"
      }
        chai.request(server)
          .post("/signup")
          .send(userCredentials)
          .end((err, response) =>{
            response.should.have.status(400);
            response.body.should.be.a('object');
            done();
          })
      })
    })

  }) 
