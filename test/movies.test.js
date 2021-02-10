import chai from 'chai';
const expect = chai.expect;
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import 'mocha';

const server = `http://localhost:3500/graphql?query=%7B%0A%20%20`;

let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

describe('GraphQL', () => {
    it('Returns movie with id = 315635', (done) => {
        chai.request(server).get('movie(movie_id%3A315635)%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%7D%0A%7D')
        .end((err,res) => {
            if (err) return done(err);
            expect(res).to.have.status(200);
            done();
        })
    })

    it('Returns all movies', (done) => {
        chai.request(server).get('movies%7B%0A%20%20%20%20items%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D')
        .end((err, res) => {
            if (err) return done(err);
            expect(res).to.have.status(200);
            done();
        })  
    })
});