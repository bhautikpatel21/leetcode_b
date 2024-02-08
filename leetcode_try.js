function memoize(fn) {

    const  cache = {};
    
    return function(...args) {
        const key = json.stringify(args);

        if (key in cache){
            return cache[key];
        }
        cache[key]= fn(...args);
        return cache[key];
    }
}
