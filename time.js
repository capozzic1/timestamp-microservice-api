let debug = require('debug')('test');
let moment = require('moment');


class TimeConverter {
  constructor(){
    this.naturalDate = null;
    this.unixTime = null;
  }

  checkString(string){
    let format = /\w{3,9}?\s\d{1,2}?,\s\d{4}?/;
    let unixFormat = /^\d[0-9]{0,20}$/;
    let test = format.test(string);
    let test2 = unixFormat.test(string);

    if (test === true){
      this.natToUnix(string);

    } else if (test2 === true) {
      this.unixToNat(string);

    } else {
      this.naturalDate = null;
      this.unixTime = null;
    }

    return this.getResults();

  }

  natToUnix(string){
    //put into iso format for moment.js
    let newDate = new Date(string);
    //change into unix time
    let date = moment(newDate).unix();
    this.unixTime = date;
    this.naturalDate = string;


  }
  unixToNat(string){

    let date = moment.unix(string);
    let formatted = date.format("MMMM DD YYYY");

    this.unixTime = string;
    this.naturalDate = formatted;


  }

  getResults(){
    let results = {unix: this.unixTime, natural: this.naturalDate};
    debug(results);
    return results;
  }



}

let time = new TimeConverter();

module.exports = time;
