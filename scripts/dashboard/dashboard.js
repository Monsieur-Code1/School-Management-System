"use strict"
 const statsContainer = document.querySelector(".stats-container");

const statsData =[
    { title: "Students", value: "100", colorClass: "students-cart", footerColor: "students-footer"},
    { title: "Teachers", value: "50", colorClass: "teachers-cart", footerColor: "teachers-footer"},
    { title: "Semester", value: "3", colorClass: "semester-cart", footerColor: "semester-footer"}
]

statsContainer.innerHTML= statsData.map((item) =>{
    return `
    <div class="${item.colorClass}">
            <div class="stat-content">
                <h3>${item.title}</h3>
                <p class="stat-number">${item.value}</p>
            </div>
            <div class="stat-footer ${item.footerColor}">
                <a href="#"> <img src="../../img/Group 7.svg" alt="icon"> </a>
            </div>
        </div>
    `
}).join("");