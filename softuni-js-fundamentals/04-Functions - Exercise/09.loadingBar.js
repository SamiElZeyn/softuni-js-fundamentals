function loadingBar(num) {

    let percent = '%'.repeat(num / 10);
    let dots = '.'.repeat(10 - num / 10);
    let result = percent + dots;

    if (num < 100) {
        console.log(`${num}% [${result}]`)
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(`[${result}]`);
    }

}
loadingBar(100)