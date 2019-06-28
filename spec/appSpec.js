const express = require('express');
const Request = require('request');
const app = require('../app');

describe("GET /", () => {
    let data = {};
    beforeAll((done) => {
        Request.get("http://localhost:3001/", (error, response, body) => {
            data.status = response.statusCode;
            done();
        });
    });
    it("Status 200", () => {
        expect(data.status).toBe(200);
    });
})
describe("GET /get", () => {
    let data = {};
    beforeAll((done) => {
        Request.get("http://localhost:3001/get", (error, response, body) => {
            data.status = response.statusCode;
            done();
        });
    });
    it("Status 200", () => {
        expect(data.status).toBe(200);
    });
})
describe("Post /post", () => {
    let data = {};
    beforeAll((done) => {
        Request.post("http://localhost:3001/post", (error, response, body) => {
            data.status = response.statusCode;
            done();
        });
    });
    it("Status 200", () => {
        expect(data.status).toBe(200);
    });
});