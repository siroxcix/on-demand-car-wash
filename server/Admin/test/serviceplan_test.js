const chai = require('chai');
const chaiHttp = require('chai-http');
const { response } = require('express');
const server = require('../server');
const { expect } = require('chai');
const jwt = require("jsonwebtoken");


//Assertion style
chai.should();
chai.use(chaiHttp);


describe("Admin service API", ()=> {

   /**
   * GET services route
   */
    describe("GET /services",()=> {
        it("it should not return list of all services",(done)=> {
            chai.request(server)
                .get("/services")
                .end((err,response)=>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })


   /**
   * POST services route
   */
    describe("POST /services",()=> {
        it("it should not create a new service",(done)=> {
            const serviceDetails = {
                name : "platinum gold wash",
                cost :  5999,
                description : "Platinum wash includes platinum stuff with your car."
            }
            chai.request(server)
                .get("/services")
                .send(serviceDetails)
                .end((err,response)=>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })
})