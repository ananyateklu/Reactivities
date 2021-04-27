export interface Duck {
    name: string;
    legs: number;
    makeSound: (sound: string) => void;
}

const duck1: Duck = {
    name: 'huey',
    legs: 2,
    makeSound: (sound: any) => console.log(sound)
}

const duck2: Duck = {
    name: 'dewuey',
    legs: 2,
    makeSound: (sound: any) => console.log(sound)
}

duck1.makeSound('quack');

export const ducks = [duck1, duck2]