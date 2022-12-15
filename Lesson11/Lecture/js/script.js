const tree = document.querySelector('.test');
console.log(tree);

function treeTravelsal(elem) {
    let innerElements = elem.children;
    console.dir(elem);
    // console.log(innerElements);
    Array.from(innerElements).forEach(item => treeTravelsal(item));
}

treeTravelsal(tree);