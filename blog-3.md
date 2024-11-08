
**Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.**

Type guards are a powerfull feature in TypeScript that allows us to verify the type of a variable or property at runtime. They are especially useful when working with union types, where a variable can be  multiple types. By using type guards, we can write safer and more clean code.

**Types of type Guard**
1. typeof type guard

const kgToGram = (value: string | number): string | number | undefined => {
    if(typeof value === 'number'){
        return value * 1000
    }else if(typeof value === 'string'){
        return parseFloat(value) * 1000
    }
}
2. instanceof type guard
3. in type guard
type User = {
    name: string;
    age: number
}
const user: User = {
    name: 'Alamin',
    age: 22
}
if('name' in user){
    console.log(`Hello ${user.name}`)
}

