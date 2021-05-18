// TODO: write your code here
export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUserName() {
    const valid = /^[^0-9_-][0-9A-za-z_-]*[^0-9_-]$/.test(this.name);
    const valid2 = !(/\d{4}/.test(this.name));
    if (valid && valid2) {
      return true;
    }
    return false;
  }
}
