// test.js

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../backend/app.js';

chai.use(chaiHttp);
const { expect } = chai;

describe('API Endpoints', () => {
    it('should return "notexist" for non-existing user on POST /', (done) => {
        chai.request(app)
            .post('/')
            .send({ email: 'nonexisting@example.com', password: 'password123' })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.equal('notexist');
                done();
            });
    });
});
