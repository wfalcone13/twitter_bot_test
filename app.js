var Twitter = require('twitter');
var config = require('./config')

var T = new Twitter(config);

var params = {
  q: 'wdavidturner',
  count: 4
  
}



// T.get('search/tweets', params, function(err, data, response){
//   if(!err){

    
//     for (let i = 0; i < data.statuses.length; i++){
//       let id = {id: data.statuses[i].id_str}
      
//       T.post('favorites/create', id, function(err, response){
//         if(err){
//           console.log(err[0].message);
//         } else {
//           let username = response.user.screen_name;
//           let tweetId = response.id_str;
//           console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
//         }
//       })
//     }
//     } else {
//       console.log(err)
//     }
//   })


///get Dt's tweets
// favorite DT's tweets

let tweet_ids = []

T.get('users/search', params, function(err,data,response){
  if(!err){
    let user = {user: data[0].name }
    let id = {id: data[0].id}
    let screen_name = { sn: data[0].screen_name}
    // console.log(user)

    T.get('statuses/user_timeline', id, function(err, data, response){
      if(!err){
        // let tw_id = {tw_id: data[i].id}
        console.log(data[0])
        
        data.forEach(tw =>{
          let id = {id: tw.id_str}
          console.log(id)
          T.post(`statuses/retweet/${tw.id_str}`, id, function (err, response) {
            if (err) {
              console.log(err[0].message);
            } else {
              console.log('retwet')
            }
            })
          // T.post('favorites/create', id, function(err, response){
          //   if(err){
          //     console.log(err[0].message);
          //   } else {
          //     console.log('favd')
          //   }
          // })
        })
      }
    } )
  }

})

console.log('arr:', tweet_ids)

