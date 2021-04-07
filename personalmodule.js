let  systemTime = new Date();
module.exports.date = systemTime;

module.exports.showGreeting = function(username){
    let  hour = systemTime.getHours();
    // console.log(systemTime);
    // console.log(hour);
    
    if (hour >=23 || hour <5) {
        return "Good night!", username;
    } else if (hour >=5 && hour<11){
        return "Good morning!", username;
    } else if (hour >=11 && hour<17){
        return "Good afternoon!", username;
    } else if (hour>=17 && hour<23){
        return "Good evening!", username;
    };
}