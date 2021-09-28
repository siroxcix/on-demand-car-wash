const chai  = require('chai');
const server = require ('../server');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const { response } = require('express');

//Assertion style
chai.should();
chai.use(chaiHttp);

describe('Customer cars API', ()=>{
    
    /**
    * GET active cars list 
    */
    describe("GET /cars",()=>{
        it("it should not get the list of cars", (done) => {
            chai.request(server)
                .get("/cars")
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })
})


describe('Customer find washers API', ()=>{
    
    /**
    * GET washers list 
    */
    describe("GET /findWashers",()=>{
        it("it should not get the list of washers", (done) => {
            chai.request(server)
                .get("/findWashers")
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })
})


describe('Customer leaderboard API', ()=>{
    
    /**
    * GET leaderboard list
    */

    describe("GET /leaderboard",()=>{
        it("it should not get the leaderboard list", (done) => {
            chai.request(server)
                .get("/leaderboard")
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })

})

describe('Customer services API', ()=>{
    
    /**
    * GET services list 
    */

    describe("GET /services",()=>{
        it("it should not get the list of services", (done) => {
            chai.request(server)
                .get("/services")
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })

})

describe('Customer addons API', ()=>{
    
    /**
    * GET addons list 
    */
    const serviceName = 'basic wash';
    describe("GET /addons",()=>{
        it("it should not get the addons list", (done) => {
            chai.request(server)
                .get(`/addons/:${serviceName}`)
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })

})


describe('Customer scheduledLater API', ()=>{
    
    /**
    * GET list of orders scheduled for later
    */

    describe("GET /scheduledLater",()=>{
        it("it should not get list of orders scheduled for later", (done) => {
            chai.request(server)
                .get("/scheduledLater")
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })

})