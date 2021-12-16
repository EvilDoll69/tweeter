/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$('document').ready(function(){

  $(".tweet-input").submit(function(event) {
    event.preventDefault();

    $.ajax({
      type: "POST",
      url: "http://localhost:8080/tweets/",
      data: $(this).serialize(), //input object from the form
      success: function(tweet) {
        $("#tweet-text").val("");
      }
   });

   if ($("#tweet-text").val() === null || $("textarea").val() === "") {
    // $(".error").text("ERROR: Please input some text");
    alert ("You have to input some text!")
   };

   if ($("#tweet-text").val().length > 140) {
    // $(".error").text("ERROR: Please input some text");
    alert ("You have reached your tweet limit")
   };

  });

  const loadTweets = () => {
  $.get( "/tweets", function($tweet) {
    $(renderTweets($tweet), "json" );
    console.log("Inside")

  });
};
loadTweets();


  const renderTweets = function(tweets) {
    //loops through tweets  
    for (const tweetElem of tweets) {
      
      $("#posted-tweets").append(createTweetElement(tweetElem));
    }

  };

  const createTweetElement = function(tweet) {
    const timePassed = timeago.format(tweet.created_at);

    let $tweet = (`

    <section id="posted-tweet">
        <header class="post-header">
          <div class="post-icon">
            <img src = ${tweet.user.avatars}/>
            <p class="name">${tweet.user.name}</p>
          </div>              
          <h4 class="post-header nickname">${tweet.user.handle}</h4>
        </header>
        
        <form class = "tweet-input" method="POST" action="/tweets/"><br>
          <article class="input-tweet" name="text" id="tweet-text">${tweet.content.text}</article>
          </form>
            
          <footer class="footer">
            <p class="days-on-site">${timePassed}</p>
            <div class="post-reactions">
              <i class="icon fas fa-flag"></i>
              <i class="icon fas fa-retweet"></i>
              <i class="icon fas fa-heart"></i>
            </div>            
          </footer>        
      </section>

      `);
      return $tweet;  // return tweet <section> element containing the entire HTML structure of the tweet  
};

  
    // const $tweet = createTweetElement(tweet);
    // console.log($tweet);  
    
    // $('#posted-tweets').append($tweet); // to add it to the page  

  // renderTweets(tweets);

});

// $("#posted-tweets").submit(function( event ) {
//   alert( "Handler for .submit() called." );
//   event.preventDefault();
// });


