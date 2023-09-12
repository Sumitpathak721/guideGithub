const showInput = (id) => {
    $(`#${id} input`).css("display", "block");
    $(`#${id} input`).focus();
}
function showToggleComponent1(component){
    $("#"+component).css("display","block");
    $("#blur-pop-background").css("display","block");
}
function hideToggleComponent1(component){
    $("#"+component).css("display","none");
    $("#blur-pop-background").css("display","none");
}
function changeToggleComponent1(componentName){
    if(componentName=="login"){
        hideToggleComponent1("login-component");
        showToggleComponent1("signup-component");
    }else if(componentName=="signup"){
        hideToggleComponent1("signup-component");
        showToggleComponent1("login-component");
    }else{
        console.log("Invalid click attribute");
    }
}

function showToggleComponent2(componentName){
    if(componentName=='key-features-toggle'){
        $("#"+componentName).addClass('active-toggleComponent2');
        $("#search-jobs-toggle").removeClass('active-toggleComponent2');
        $("#search-jobs").css("display","none");
        $("#key-features").css("display",'flex');
    }else if(componentName=='search-jobs-toggle'){
        $("#"+componentName).addClass('active-toggleComponent2');
        $("#key-features-toggle").removeClass('active-toggleComponent2');
        $("#key-features").css("display","none");
        $("#search-jobs").css("display",'flex');
    }else{
        console.log("wrong onclick argument")
    }
}

$(".floatInput").focus(function() {
    $(this).prev("label").css("font-size", "10px");
});

$(".floatInput").blur(function() {
    $(this).prev("label").css("font-size", "20px");
    $(this).css("display","none");
});

// fake data
var jobsData = [
  {
    "name": "Sumit Pathak",
    "role": "MERN Stack Developer",
    "location": "Delhi",
    "experience": 3,
    "estimated_CTC": "$15000/year",
    "startDate": "10-July-2023"
  },
  {
    "name": "John Smith",
    "role": "Full Stack Developer",
    "location": "Noida",
    "experience": 5,
    "estimated_CTC": "$20000/year",
    "startDate": "15-July-2023"
  },
  // Dummy Candidates details have been added. :)
  {
    "name": "Camila Cabello",
    "role": "React Developer",
    "location": "Bangalore",
    "experience": 3,
    "estimated_CTC": "$22000/year",
    "startDate": "21-August-2023"
  },
  {
    "name": "Shawn Mendes",
    "role": "Backend Developer",
    "location": "Bangalore",
    "experience": 2,
    "estimated_CTC": "$12000/year",
    "startDate": "20-July-2023"
  },
  {
    "name": "Charlie Puth",
    "role": "FrontEnd Developer",
    "location": "Bangalore",
    "experience": 2,
    "estimated_CTC": "$12000/year",
    "startDate": "20-July-2023"
  },
  {
    "name": "Taylor Swift",
    "role": "Full Stack Developer",
    "location": "Bangalore",
    "experience": 2,
    "estimated_CTC": "$12000/year",
    "startDate": "20-July-2023"
  },
  {
    "name": "Ananya Singh",
    "role": "Data Analyst",
    "location": "Bangalore",
    "experience": 2,
    "estimated_CTC": "$20000/year",
    "startDate": "20-July-2023"
  },
  {
    "name": "Jane Doe",
    "role": "React Developer",
    "location": "Bangalore",
    "experience": 2,
    "estimated_CTC": "$12000/year",
    "startDate": "20-July-2023"
  },
  {
    "name": "Michael Johnson",
    "role": "SDE",
    "location": "Hyderabad",
    "experience": 4,
    "estimated_CTC": "$18000/year",
    "startDate": "25-July-2023"
  },
  {
    "name": "Alice Brown",
    "role": "MERN Stack Developer",
    "location": "remote",
    "experience": 3,
    "estimated_CTC": "$16000/year",
    "startDate": "30-July-2023"
  },
  {
    "name": "David Wilson",
    "role": "Full Stack Developer",
    "location": "Goa",
    "experience": 6,
    "estimated_CTC": "$22000/year",
    "startDate": "10-July-2023"
  },
  {
    "name": "Sarah Lee",
    "role": "React Developer",
    "location": "Hyderabad",
    "experience": 1,
    "estimated_CTC": "$10000/year",
    "startDate": "15-July-2023"
  },
  {
    "name": "Robert Johnson",
    "role": "SDE",
    "location": "remote",
    "experience": 4,
    "estimated_CTC": "$19000/year",
    "startDate": "20-July-2023"
  },
  {
    "name": "Emily Davis",
    "role": "MERN Stack Developer",
    "location": "Delhi",
    "experience": 2,
    "estimated_CTC": "$14000/year",
    "startDate": "25-July-2023"
  },
  {
    "name": "Michael Anderson",
    "role": "Full Stack Developer",
    "location": "Noida",
    "experience": 3,
    "estimated_CTC": "$17000/year",
    "startDate": "30-July-2023"
  },
  {
    "name": "Sophia Taylor",
    "role": "React Developer",
    "location": "Gurgaon",
    "experience": 4,
    "estimated_CTC": "$18000/year",
    "startDate": "10-July-2023"
  },
  {
    "name": "William Thomas",
    "role": "SDE",
    "location": "Delhi",
    "experience": 5,
    "estimated_CTC": "$20000/year",
    "startDate": "15-July-2023"
  },
  {
    "name": "Olivia Moore",
    "role": "MERN Stack Developer",
    "location": "Noida",
    "experience": 2,
    "estimated_CTC": "$14000/year",
    "startDate": "20-July-2023"
  },
  {
    "name": "James Clark",
    "role": "Full Stack Developer",
    "location": "Gurgaon",
    "experience": 4,
    "estimated_CTC": "$18000/year",
    "startDate": "25-July-2023"
  },
  {
    "name": "Emma Hill",
    "role": "React Developer",
    "location": "remote",
    "experience": 3,
    "estimated_CTC": "$16000/year",
    "startDate": "30-July-2023"
  },
  {
    "name": "Alexander Wright",
    "role": "SDE",
    "location": "Hyderabad",
    "experience": 6,
    "estimated_CTC": "$22000/year",
    "startDate": "10-July-2023"
  },
  {
    "name": "Ava Lewis",
    "role": "MERN Stack Developer",
    "location": "Delhi",
    "experience": 1,
    "estimated_CTC": "$10000/year",
    "startDate": "15-July-2023"
  },
  {
    "name": "Liam Martin",
    "role": "Full Stack Developer",
    "location": "remote",
    "experience": 5,
    "estimated_CTC": "$20000/year",
    "startDate": "20-July-2023"
  },
  {
    "name": "Isabella Walker",
    "role": "React Developer",
    "location": "Gurgaon",
    "experience": 2,
    "estimated_CTC": "$14000/year",
    "startDate": "25-July-2023"
  },
  {
    "name": "Henry Hall",
    "role": "SDE",
    "location": "Bangalore",
    "experience": 3,
    "estimated_CTC": "$16000/year",
    "startDate": "30-July-2023"
  },
  {
    "name": "Sajesh",
    "role": "SDE 1",
    "location": "Coimbatore",
    "experience": 5,
    "estimated_CTC": "$1670/year",
    "startDate": "31-July-2023"
  },
  {
    "name": "mohan",
    "role": "SDE 5",
    "location": "chennai",
    "experience": 6,
    "estimated_CTC": "$1670/year",
    "startDate": "17-July-2023"
  },
  {
    "name": "mahan",
    "role": "SDE 6",
    "location": "Delhi",
    "experience": 5,
    "estimated_CTC": "$1700/year",
    "startDate": "16-July-2023"
  },
  {
    "name": "Sahil",
    "role": "SDE 3",
    "location": "London",
    "experience": 2,
    "estimated_CTC": "$200k/year",
    "startDate" : "12-April-2027"
  },
  {
    "name": "Sam",
    "role": "SDE 2",
    "location": "London",
    "experience": 1,
    "estimated_CTC": "$110k/year",
    "startDate" : "12-March-2027"
  },
  {
    "name": "Uday",
    "role": "SDE 3",
    "location": "New York",
    "experience": 1,
    "estimated_CTC": "$160k/year",
    "startDate" : "12-July-2027"
  }
]


function filterJobs(){
    var container = $("#job-list")
    var role = container.attr('data-role');
    var location = container.attr('data-location');
    var text = '';
    for(let i=0;i<jobsData.length;i++){
        if((jobsData[i].location==location|| location=='All') && (jobsData[i].role==role || role=="All")){
            console.log("got called");
            text+=`<div class="job">
                  <div class="name">${jobsData[i].name}</div>
                  <div class="job-role">${jobsData[i].role}</div>
                  <div class="location">${jobsData[i].location}</div>
                  <div class="details">
                    <div class="start-date">Start Date: ${jobsData[i].startDate}</div>
                    <div class="ctc">Estimated Salary: ${jobsData[i].estimated_CTC}</div>
                    <div class="experience">Experience: ${jobsData[i].experience} year</div>
                  </div>
            </div>`
        }
    }
    container.html(text);
}
function changeLocation(location){
    $("#job-list").attr('data-location',location);
    filterJobs();
}
function changeRole(role){
    $("#job-list").attr('data-role',role);
    filterJobs();
}

filterJobs();