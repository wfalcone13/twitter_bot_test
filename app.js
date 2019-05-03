var Twitter = require('twitter');
var config = require('./config')

var T = new Twitter(config);

var params = {
  q: 'wdavidturner',
  count: 1
  
}

///get Dt's tweets
// favorite DT's tweets


T.get('users/search', params, function(err,data,response){
  if(!err){
    let user = {user: data[0].name }
    let id = {id: data[0].id}
    let screen_name = { sn: data[0].screen_name}
    console.log(user)

    T.get('statuses/user_timeline', id, function(err, data, response){
      if(!err){
        let id = {id: data[0].id_str}
        let tw_str = data[0].id_str
        console.log(id)
        console.log(tw_str)
        // console.log(data[0])
        
      
        T.post(`statuses/retweet/${tw_str}`, id, function (err, response) {
            if (err) {
              console.log(err[0].message);
            } else {
              console.log('retwet')
            }

          })

        T.post('favorites/create', id, function(err, response){
            if(err){
              console.log(err[0].message);
            } else {
              console.log('favd')
            }
          })
       

      

      }

    })
  }

})



