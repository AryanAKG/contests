let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
        return v.json()
}).then((contests) => {
        console.log(contests)
        ihtml = ""
        for (item in contests) {
                console.log(contests[item])
                ihtml += `
                <div class="card mx-2 my-2 " style="width: 22rem;">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpMBTgrPtQuNSYqIzPVAEJgJbF7tWmT1LhnCrtAkFbe-_qgRXBj-25gZ0yuR_3sL6iNE&usqp=CAU" class="card-img-top" alt="...">
                                <div class="card-body ldark-mode">
                                        <h5 class="card-title">${contests[item].name}</h5>
                                        <p class="card-text"> Status is ${contests[item].status} and site is ${contests[item].site}</p>
                                        <p class="card-text"> In 24 Hours? ${contests[item].in_24_hours} </p>
                                        <p>Starts at: ${contests[item].start_time}
                                        <p>Starts at: ${contests[item].end_time}
                                        <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
                                </div>
                        </div>
                `
        }
        cardContainer.innerHTML = ihtml
})



function myFunction() {
        let element = document.body;
        element.classList.toggle("dark-mode");

}

function my() {
        next = document.getElementById("next");
        next.innerHTML = "Practice problems and learn with live and online recorded classes with this website. Practice & Prepare for Top MNCs technical rounds by solving their coding problems";
}

setInterval(() => {
        let a = new Date();
        time.innerHTML = a;
}, 1000
)

let myjokes = ["Dont't worry if it doesn't work right. If everything did, you'd be out of a job", "Don't comment bad code - rewrite it", "A programming language is for thinking about programs, not for expressing programs you've already thought of. It should be a pencil, not a pen", "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code. - Dan Salomon", " Without requirements or design, programming is the art of adding bugs to an empty text file", "One main'scrappy software is another man's full time job", "Walking on water and developing software from a specification are easy if both are frozen", "System programmers are the high priests of a low cult", "Software undergoes beta testing shortly before iy' released.Beta is latin for still doesn't work", "Measuring programming progree by lines of code is like measuring aircraft building progree by weight", "If debudding is the process of removing software bugs, then programming must be the process of putting them in", "The computer was born to solve problems that did not exist before"];

function func1(){
let index = Math.floor(Math.random() * (myjokes.length - 1));
joke = document.getElementById("joke");

joke.innerHTML = myjokes[index];
}
btn = document.getElementById("btn");
btn.addEventListener('click',func1);
/* ******************* NOTES APP (REMAINING QUESTIONS OF PRACTICE SET) *********** */
// let n = localStorage.getItem("note")
// alert("Your note is " + n)

// let a = prompt("Enter your note")
// if (a) {
//         localStorage.setItem("note", a)
// }

// let c = confirm("Do you want to delete your note?")
// if (c) {
//         localStorage.removeItem("note")
//         alert("Note deleted successfully!")
// }
