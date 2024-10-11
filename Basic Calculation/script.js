
function grade(marks) {
    if (marks >= 90) {
        return "A";
    }
    else if (marks >= 80) {
        return "B";
    }
    else if (marks >= 70) {
        return "C";
    }
    else if (marks >= 60) {
        return "D";
    }
    else if (marks >= 50) {
        return "E";
    }
    else {
        return "F";
    }

}

function comments(grad) {
    switch (grad) {
        case "A":
            return 'Excellent work!';
        case "B":
            return 'Well done';
        case "C":
            return 'Good job';
        case "D":
            return 'You passed, but you could do better';
        case "E":
            return 'Just Passed';
        case "F":
            return 'Sorry, you failed';


    }
}

function eligibility(grad,comment)
{
    if(grad!='F')
    {
        console.log(`Your Grade is ${grad}. ${comment} You are eligible for the next level.`)
    }
    else{
        console.log(`Your Grade is ${grad}. ${comment} Please try again next time`)
    }
}

let marks;
let grad;

marks = prompt("Enter your marks:");

if (marks >= 0 && marks <= 100) {
    grad = grade(marks);
    comment = comments(grad);
    eligibility(grad,comment);
}
else {
    console.log("Marks should be between 0 to 100...")
}