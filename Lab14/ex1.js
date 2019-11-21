filename = 'user_data.json'

var filename = 'user_data.json'

data - fs.readFileSync(filename, 'utf-8')

users_reg_data = JSON.parse(data);

console.log(typeof users_reg_data);

console.log(users_reg_data.itm352.password);