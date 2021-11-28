const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];

let ol = document.createElement("ol");
document.body.appendChild(ol);
users.forEach((user) => {
    let li = document.createElement("li");
    li.innerHTML = `${user.firstName} ${user.lastName}`;
    li.setAttribute("data-id", `${user.id}`);
    li.style.listStyleType = "none";
    ol.appendChild(li);
});
