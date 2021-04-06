function Account(login,email){
    this.login = login;
    this.email = email;
}
Account.prototype.getInfo = function(){
  return console.log(`login ${this.login.login} email ${this.login.email}`);
}
console.log(Account.prototype.getInfo); 

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});
mango.getInfo(); 
const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});
poly.getInfo(); 