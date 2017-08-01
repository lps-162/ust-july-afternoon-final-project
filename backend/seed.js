const request = require('request');
const faker = require('faker');

for (let i=0; i < 5; i++) {
    let newEmpObj = {
        emp_no: faker.random.alphaNumeric(6),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        city: faker.address.city(),
        photo_url: faker.image.imageUrl()
    };

    request.post('http://localhost:3000/api/employees', { form: newEmpObj }, function(err, result) {
        if (err) {
            console.log('Error occured in seeding data');
            process.exit(-1);
        }
    });
}