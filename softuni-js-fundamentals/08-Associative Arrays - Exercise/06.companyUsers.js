function companyUsers(arr){

        let companyEmployees = {};

        for (let command of arr) {
            let [companyName, employeeID] = command.split(" -> ");
            
            if (companyName in companyEmployees){
                if (!companyEmployees[companyName].includes(employeeID)){
                    companyEmployees[companyName].push(employeeID);
                }
            } else {
                companyEmployees[companyName] = [employeeID];
            }
        }

        let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));

        for (let [name, empoyeeIDs] of entries){
            console.log(name);
            empoyeeIDs.forEach(id => console.log(`-- ${id}`));
  
            };
        }
companyUsers ([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'])