const tape = require('tape');
const supertest = require('supertest');

//Fill this with many many tests YAY!! 😜😩


tape('first name of object is Abdullah', (t) => {
supertest(app)
  .get('/facsters')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '371')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
      var expected = "Abdullah";
      var actual = res.body[0].firstname;
      t.deepEquals(actual, expected, 'first name of object should be Abdullah')
      t.end()
    })
  });

    tape('array length', (t) => {
      supertest(app)
        .get('/facsters')
        .expect('Content-Type', /json/)
        .expect('Content-Length', '371')
        .expect(200)
        .end(function(err, res) {
      var expected = 6;
      var actual = res.body.length;
      t.deepEquals(actual, expected, 'the length of the array should be 6')
      t.end()
    })
  });


    tape('key value pairs', (t) => {
      supertest(app)
        .get('/facsters')
        .expect('Content-Type', /json/)
        .expect('Content-Length', '371')
        .expect(200)
        .end(function(err, res) {
      function checkNumProp(arr, num) {
        for (var i = 0; i < arr.length; i++) {
          if (Object.keys(arr[i]).length !== num) {
            return false
          }
        }
        return true;
      }
      var expected = true;
      var actual = checkNumProp(res.body, 4);
      t.deepEquals(actual, expected, 'Each object should have 4 key value pairs')
      t.end()
    })
  });

tape('first name of object is Bart', (t) => {
  supertest(app)
    .get('/facsters/bart')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '62')
    .expect(200)
    .end(function(err, res) {
      if (err) throw err;
        var expected = "Bart";
        var actual = res.body[0].firstname;
        t.deepEquals(actual, expected, 'first name of object should be Bart')
        t.end()
      })
    });

    var names = ['Abdullah', 'Amelie', 'Aseel', 'Alina', 'Bart', 'Yahia'];
    for (let i = 0; i < names.length; i++) {
    tape('test all name endpoints equal the firstname of json firstname returned', (t) => {
        supertest(app)
          .get('/facsters/' + names[i])
          .expect('Content-Type', /json/)
          // .expect('Content-Length', '65')
          .expect(200)
          .end(function(err, res) {
            console.log(i);
            if (err) throw err;
            console.log(names[i]);
              var expected = names[i];
              var actual = res.body[0].firstname;
              t.deepEquals(actual, expected, 'firstname should be ', names[i])
              t.end()
            })
        });
      }
