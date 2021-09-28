const chai = require('chai');
const server = require('../server');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const { response } = require('express');

//Assertion style
chai.should();
chai.use(chaiHttp);


describe('Customer Myorder API', ()=>{


    /**
     * Get list of accepted orders
    */
    describe("GET /accepted", ()=> {
        it("it should not get list of accepted orders", (done)=>{
            chai.request(server)
                .get('/accepted')
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })


    /**
    * Get list of pending orders
    */
   describe("GET /pending", ()=> {
        it("it should not get list of accepted orders", (done)=>{
            chai.request(server)
                .get('/pending')
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })


    /**
    * get list of completed and paid orders
    */
   describe("GET /completedAndPaid", ()=> {
        it("it should not get list of completed and paid orders", (done)=>{
            chai.request(server)
                .get('/completedAndPaid')
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })


    /**
    * Get list of completd but unpaid orders
    */
    describe("GET /completedAndUnpaid", ()=> {
        it("it should not get list of completed and unpaid orders", (done)=>{
            chai.request(server)
                .get('/completedAndUnpaid')
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })

    /**
    * Get list of cancelled orders
    */
    describe("GET /cancelled", ()=> {
        it("it should not get list of cancelled orders", (done)=>{
            chai.request(server)
                .get('/cancelled')
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })


    /**
    * Get list of inprocess orders
    */
    describe("GET /inprocess", ()=> {
        it("it should not get list of inprocess orders", (done)=>{
            chai.request(server)
                .get('/inprocess')
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })
})