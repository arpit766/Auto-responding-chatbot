

function talk(){
    var know ={
        "Who are you" : "Hello, Codewith_random here ❤",
        "How are you" : "Good :)",
        "What can i do for you" : "Please Give us A Follow & Like.",
        "Your followers" : "I have my family of 5000 members, i don,t have follower ,have supportive Family 👨‍👩‍👦 ",       
         "ok" : "Thank You So Much ",
        "Bye" : "Okay! Will meet soon..",

        " Are you a robot " : " Yes I am a robot, but I,m a good one. Let me prove it. How can I help you? ",

        " Do you know a joke " : " You,re funny! ",
        " Do you love me " : "I Love You",
        " How old are you " : " What,s your age ",
        " What do you do with my data " : " Do you save what I say ",
        " Do you have a job for me " : " Where can I apply ",
        
    };

     var user = document.getElementById('userBox').value;
          document.getElementById('chatLog').innerHTML = user + "<br>";

     if(user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
     }
     else{
        document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>"; 
     
     


        
        
    }
}