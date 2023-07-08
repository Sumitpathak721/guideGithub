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
        "location": "Gr Noida",
        "role": "Android Developer",
        "company": "Amazon",
        "startDate": "1 Aug 2023",
        "ctc": "$15000/year",
        "experience": "3 years"
      },
      {
        "location": "Delhi",
        "role": "MERN Stack Developer",
        "company": "Google",
        "startDate": "15 Sep 2023",
        "ctc": "$18000/year",
        "experience": "4 years"
      },
      {
        "location": "Noida",
        "role": "Full Stack Developer",
        "company": "Microsoft",
        "startDate": "10 Jul 2023",
        "ctc": "$16000/year",
        "experience": "3 years"
      },
      {
        "location": "Gaziabad",
        "role": "SDE",
        "company": "Apple",
        "startDate": "1 Sep 2023",
        "ctc": "$17000/year",
        "experience": "2 years"
      },
      {
        "location": "Goa",
        "role": "React Developer",
        "company": "Facebook",
        "startDate": "20 Aug 2023",
        "ctc": "$14000/year",
        "experience": "2 years"
      },
      {
        "location": "Hydrabad",
        "role": "MERN Stack Developer",
        "company": "Netflix",
        "startDate": "5 Oct 2023",
        "ctc": "$20000/year",
        "experience": "5 years"
      },
      {
        "location": "Banglore",
        "role": "Full Stack Developer",
        "company": "Adobe",
        "startDate": "8 Nov 2023",
        "ctc": "$19000/year",
        "experience": "4 years"
      },
      {
        "location": "Gr Noida",
        "role": "Android Developer",
        "company": "Microsoft",
        "startDate": "1 Sep 2023",
        "ctc": "$18000/year",
        "experience": "4 years"
      },
      {
        "location": "Delhi",
        "role": "MERN Stack Developer",
        "company": "Apple",
        "startDate": "15 Oct 2023",
        "ctc": "$19000/year",
        "experience": "5 years"
      },
      {
        "location": "Noida",
        "role": "Full Stack Developer",
        "company": "Amazon",
        "startDate": "10 Aug 2023",
        "ctc": "$17000/year",
        "experience": "3 years"
      },
      {
        "location": "Gaziabad",
        "role": "SDE",
        "company": "Google",
        "startDate": "1 Nov 2023",
        "ctc": "$20000/year",
        "experience": "5 years"
      },
      {
        "location": "Gr Noida",
        "role": "SDE",
        "company": "Intel",
        "startDate": "1 Aug 2023",
        "ctc": "$16000/year",
        "experience": "3 years"
      },
      {
        "location": "Delhi",
        "role": "React Developer",
        "company": "studyMonk",
        "startDate": "15 Sep 2023",
        "ctc": "$17000/year",
        "experience": "2 years"
      },
      {
        "location": "Noida",
        "role": "MERN Stack Developer",
        "company": "Cisco",
        "startDate": "10 Jul 2023",
        "ctc": "$19000/year",
        "experience": "4 years"
      },
      {
        "location": "Gaziabad",
        "role": "Full Stack Developer",
        "company": "Oracle",
        "startDate": "1 Sep 2023",
        "ctc": "$18000/year",
        "experience": "3 years"
      },
      {
        "location": "Goa",
        "role": "SDE",
        "company": "Salesforce",
        "startDate": "20 Aug 2023",
        "ctc": "$15000/year",
        "experience": "2 years"
      },
      {
        "location": "Hydrabad",
        "role": "React Developer",
        "company": "Intel",
        "startDate": "5 Oct 2023",
        "ctc": "$19000/year",
        "experience": "4 years"
      },
      {
        "location": "Banglore",
        "role": "MERN Stack Developer",
        "company": "Microsoft",
        "startDate": "8 Nov 2023",
        "ctc": "$20000/year",
        "experience": "5 years"
      },
      {
        "location": "Gr Noida",
        "role": "Full Stack Developer",
        "company": "Google",
        "startDate": "1 Aug 2023",
        "ctc": "$18000/year",
        "experience": "3 years"
      },
      {
        "location": "Delhi",
        "role": "SDE",
        "company": "Amazon",
        "startDate": "15 Sep 2023",
        "ctc": "$17000/year",
        "experience": "2 years"
      },
      {
        "location": "Noida",
        "role": "React Developer",
        "company": "Facebook",
        "startDate": "10 Jul 2023",
        "ctc": "$16000/year",
        "experience": "3 years"
      },
      {
        "location": "Gaziabad",
        "role": "MERN Stack Developer",
        "company": "Microsoft",
        "startDate": "1 Sep 2023",
        "ctc": "$19000/year",
        "experience": "4 years"
      },
      {
        "location": "Goa",
        "role": "Full Stack Developer",
        "company": "Apple",
        "startDate": "20 Aug 2023",
        "ctc": "$14000/year",
        "experience": "2 years"
      },
      {
        "location": "Hydrabad",
        "role": "SDE",
        "company": "Netflix",
        "startDate": "5 Oct 2023",
        "ctc": "$20000/year",
        "experience": "5 years"
      },
      {
        "location": "Banglore",
        "role": "React Developer",
        "company": "Adobe",
        "startDate": "8 Nov 2023",
        "ctc": "$19000/year",
        "experience": "4 years"
      },
      {
        "location": "Gr Noida",
        "role": "MERN Stack Developer",
        "company": "Intel",
        "startDate": "1 Aug 2023",
        "ctc": "$16000/year",
        "experience": "3 years"
      },
      {
        "location": "Delhi",
        "role": "Full Stack Developer",
        "company": "IBM",
        "startDate": "15 Sep 2023",
        "ctc": "$17000/year",
        "experience": "2 years"
      },
      {
        "location": "Noida",
        "role": "SDE",
        "company": "Cisco",
        "startDate": "10 Jul 2023",
        "ctc": "$19000/year",
        "experience": "4 years"
}]



function filterJobs(){
    var container = $("#job-list")
    var role = container.attr('data-role');
    var location = container.attr('data-location');
    var text = '';
    for(let i=0;i<jobsData.length;i++){
        if((jobsData[i].location==location|| location=='All') && (jobsData[i].role==role || role=="All")){
            console.log("got called");
            text+=`<div class="job">
                  <div class="job-role">${jobsData[i].role}</div>
                  <div class="company">${jobsData[i].company}</div>
                  <div class="location">${jobsData[i].location}</div>
                  <div class="details">
                    <div class="start-date">Start Date: ${jobsData[i].startDate}</div>
                    <div class="ctc">CTC: ${jobsData[i].ctc}</div>
                    <div class="experience">Experience: ${jobsData[i].experience}</div>
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