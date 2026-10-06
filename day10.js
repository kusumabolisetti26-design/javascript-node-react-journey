console.log("Start");

setTimeout(() => {
    console.log("Hello");
}, 2000);

console.log("End");


let promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Login Successful");
    }
    else {
        reject("Login Failed");
    }

});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


function getUser() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("User Data received");
        }, 2000);

    });

}
async function displayUser() {

    let result = await getUser();

    console.log(result);

}

displayUser();

function getUser() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("User Data received");
        }, 2000);

    });

}
async function displayUser() {

    try {
        let result = await getUser();

        console.log(result);
    }
    catch (error) {
        console.log(error);
    }

}

displayUser();


let users = [
    { name: "Kusuma", role: "student" },
    { name: "Rahul", role: "student" },
    { name: "Priya", role: "admin" }
];

function getUsers() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(users);
        }, 2000);

    });

}

async function displayUsers() {

    let result = await getUsers();

    let students = result.filter((user) => {
        return user.role === "student";
    });

    let names = students.map((user) => {
        return user.name;
    });

    console.log(names);
}

displayUsers();