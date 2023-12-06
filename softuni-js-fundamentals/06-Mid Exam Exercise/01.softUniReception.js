function softUniReception (arr) {

    arr = arr.map(Number);
    let employee1 = arr[0];
    let employee2 = arr[1];
    let employee3 = arr[2];
    let students = arr[3];
    let hours = 0;

    let totalStudentsPerHour = employee1 + employee2 + employee3;

    for (let i = students; i > 0; i-=totalStudentsPerHour) {
        hours++;
        if (hours % 4 == 0) {
            hours++;
        }
    }

    console.log(`Time needed: ${hours}h.`);
}
softUniReception (['3','2','5','40'])