import bcrypt from 'bcryptjs'

const users = [{
    name: 'Admin User',
    email: 'admin@dukani.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
},
{
    name: 'John User',
    email: 'john@dukani.com',
    password: bcrypt.hashSync('123456', 10),
},
{
    name: 'Jane User',
    email: 'jane@dukani.com',
    password: bcrypt.hashSync('123456', 10),
}]

export default users