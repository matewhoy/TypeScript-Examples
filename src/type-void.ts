//void

//tipo explicito
function showInfo(user: any):any {
    console.log('User Info', user.id, user.username, user.firstName);
    // return 'hola';
}

showInfo({id: 1, username: 'matewhoy', firstName: 'Mateo'});

//Tipo Inferido
function showFormattedInfo(user:any){
    console.log('User Info', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}

showFormattedInfo({id: 1, username: 'matewhoy', firstName: 'Mateo'});

//tipo void, como tipo de dato en variable
let unusable: void;
unusable = null;
unusable = undefined;

