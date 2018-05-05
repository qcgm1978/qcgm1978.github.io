var ObserveObj = (obj) => {
    const handler = {
        set(target, key, value) {
            console.log(`Setting value ${key} as ${value}`)
            debugger; target[key] = value;
        },
        get(target, key) {
            console.log(`Reading value from ${key}`)
            debugger;
            return target[key];
        },
        deleteProperty(target, key) {
            debugger;
            delete target[key];
        },
    };

    return new Proxy(obj, handler);
}
export default ObserveObj;