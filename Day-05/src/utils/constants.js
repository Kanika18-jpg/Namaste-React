export const LOGO_URL = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All";

// Two types of exports: default and named exports
// Default export: You can only have one default export per module. It can be imported without using curly braces.
// Named export: You can have multiple named exports in a module. They must be imported using curly braces.

// can we use default export and named export together?
// Yes, you can use both default and named exports in the same module. However, you can only have one default export per module. Named exports can be multiple.

// can named export be default export?
// No, named exports cannot be default exports. However, you can export a named export as the default export by using the `export default` syntax. For example:
// export const myFunction = () => { ... }
// export default myFunction; // This will make myFunction the default export of the module.