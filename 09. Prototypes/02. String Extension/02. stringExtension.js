(function solve(){
    String.prototype.ensureStart = function (str) {
        if (this.toString().startsWith(str)) {
          return this.toString();
        } else {
          return str + this.toString();
        }
      };
     
      String.prototype.ensureEnd = function (str) {
        if (this.toString().endsWith(str)) {
          return this.toString();
        } else {
          return this.toString() + str;
        }
      };
     
      String.prototype.isEmpty = function () {
        if (this.toString().length === 0) {
          return true;
        }
        return false;
      };

      String.prototype.truncate = function (n) {
        if (n < 4) {
          return '.'.repeat(n);
        }
        if (this.toString().length <= n) {
          return this.toString();
        } else {
          let lastIndex = this.toString().substring(0, n - 2).lastIndexOf(' ');
          if (lastIndex != -1) {
            return this.toString().substring(0, lastIndex) + '...';
          } else {
            return this.toString().substring(0, n - 3) + '...';
          }
        }
      };

    String.format = function (string, ...params) {
        for (let param = 0; param < params.length; param++) {
          if (string.includes(`{${param}}`)) {
            string = string.replace(`{${param}}`, params[param]);
          }
        }
     
        return string;
      };


})();

let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);

str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);

str = String.format('The {0} {1} fox','quick', 'brown');
console.log(str);

