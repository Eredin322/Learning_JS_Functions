(function ppp1() {
    let p = 10;
    let q = document.querySelector('.b-1');

    q.onclick = () => {
        p = p + 1;
        console.log('work q 1: ' + p);
    }
})();