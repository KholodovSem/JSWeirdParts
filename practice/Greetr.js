/* 
    Requirements

    1. When given a first name, last name, and optional language, it generates
    formal and informal greetings.

    2. Support English and Spanish language

    3. Reusable

    4. Easy to type G$().
*/

(function greetr(global, jQuery) {

  const Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  const supportedLangs = ['en', 'es'];

  const greetings = {
    en: 'Hello',
    es: 'Hola'

  };

  const formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  const logMessages = {
    en: 'Logged in',
    es: 'Inicio sesion'
  }

  Greetr.prototype = {

    fullName: function () {
      return this.firstName + ' ' + this.lastName
    },

    validate: function () {
      if (supportedLangs.indexOf(this.language) === - 1) {
        throw "Invalid language"
      }
    },

    greeting: function () {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + ' ' + this.firstName + ' ' + this.lastName + '!'
    },

    greet: function (formal) {
      let message = '';

      //if undefined or null it be coerced to 'false'
      if (formal) {
        message = this.formalGreeting();
      }
      else {
        message = this.greeting();
      }

      if (console) {
        console.log(message);
      }

      //'this' refers to the calling object at execution time
      //makes the method chainable
      return this;
    },

    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }

      return this;
    },

    setLang: function (lang) {
      this.language = lang;

      this.validate();

      return this;
    },

    HTMLGreeting: function (selector, formal) {
      if (!jQuery) {
        throw 'jQuery not found'
      }

      if (!selector) {
        throw 'Missing jQuery selector'
      }

      let message = '';
      if (formal) {
        message = this.formalGreeting();
      }
      else {
        message = this.greeting();
      }

      jQuery(selector).html(message);

      return this;
    }

  };

  Greetr.init = function (firstName, lastName, language) {

    this.firstName = firstName || "default";
    this.lastName = lastName || "default";
    this.language = language || "en";

  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;

})(window, jQuery)