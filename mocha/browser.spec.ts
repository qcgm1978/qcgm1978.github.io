var assert = require('assert');
var chai = require("chai");

var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

// Then either:
var expect = chai.expect;
// or:
var assert = chai.assert;
// or:
chai.should();

describe('hooks', function () {

    before(function () {
        // runs before all tests in this block
    });

    after(function () {
        // runs after all tests in this block
    });

    beforeEach(function () {
        // runs before each test in this block
    });

    afterEach(function () {
        // runs after each test in this block
    });

    // test cases
});
describe('Array', function () {
    const db = {
        clear() {
            return new Promise((resolve, reject) => {
                resolve()
            })
        },
        save(arr) {
            this.User = arr;
        },
        find(obj) {
            return Promise.resolve(this[obj.type])
        }
    }
    const tobi = 1, loki = 2, jane = 3;
    beforeEach(function () {
        return db.clear()
            .then(function () {
                return db.save([tobi, loki, jane]);
            });
    });
    it('should complete this test', function (done) {
        return new Promise(function (resolve) {
            assert.ok(true);
            resolve();
        })
            .then(done);
    });
    describe('my suite', () => {
        it('my test', () => {
            // should set the timeout of this test to 1000 ms; instead will fail
            this.timeout(1000);
            assert.ok(true);
        });
    });
    describe('#find()', function () {
        it('respond with matching records', function () {
            return db.find({ type: 'User' }).should.eventually.have.length(3);
        });
    });
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
        it('double done', function (done) {
            // Calling `done()` twice is an error
            setImmediate(done);
            // setImmediate(done);
        });
    });
    describe('Array', function () {
        describe('#indexOf()', function () {
            it('should return -1 when the value is not present', function () {
                [1, 2, 3].indexOf(5).should.equal(-1);
                [1, 2, 3].indexOf(0).should.equal(-1);
            });
        });
    });
    describe('User', function () {
        describe('#save()', function () {
            class User {
                constructor(name) { }
                save(func) {
                    func()
                }
            }
            class Connection {
                constructor() {

                    let User = [0];
                }
                clear(func) { func() }
                save(args, done) { this.User = args; done() }
                find(data, func) { func(this[data.type]) }
            }
            it('should save without error', function (done) {
                var user = new User('Luna');
                user.save(function (err) {
                    if (err) done(err);
                    else done();
                });
            });
            describe('Connection', function () {

                var db = new Connection,
                    tobi = new User('tobi'),
                    loki = new User('loki'),
                    jane = new User('jane');

                beforeEach(function (done) {
                    db.clear(function (err) {
                        if (err) return done(err);
                        db.save([tobi, loki, jane], done);
                    });
                });

                describe('#find()', function () {
                    // it('respond with matching records', function (done) {
                    //     db.find({ type: 'User' }, function (err, res) {
                    //         if (err) return done(err);
                    //         res.should.have.length(3);
                    //         done();
                    //     });
                    // });
                });
            });
        });
    });
});