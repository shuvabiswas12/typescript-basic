let message;
message = "abc";

// type assertion can be done by two way..

// 1 way
let isValid = (message as string).endsWith("c");

// another way
let isValid2 = (<string>message).endsWith("c");