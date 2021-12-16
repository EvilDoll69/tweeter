/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$('document').ready(function(){

  $(".tweet-input-form").submit(function(event) {
    event.preventDefault();

    
   if ($("#tweet-text").val() === null || $("textarea").val() === "") {
    $(".error-message").css("visibility", "visible").text("⚠️ ERROR: Please input some text ⚠️");
    return;
   } else {
    $(".error-message").css("visibility", "hidden");
   };


   if ($("#tweet-text").val().length > 140) {
    $(".error-message").css("visibility", "visible").text("⚠️ ERROR: You have exceeded allowable letter limit ⚠️");
    return;
   } else {
    $(".error-message").css("visibility", "hidden");    
   };

   $.ajax({
    type: "POST",
    url: "http://localhost:8080/tweets/",
    data: $(this).serialize(), //input object from the form
    success: function(tweet) {
      $("#tweet-text").val("");
      loadTweets();
    }    
 });

  const $counter = $(this).find('.counter');// convention JQuery
  $counter.val(140);

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

    const escape = function (str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };  

    let $tweet = (`

    <section id="posted-tweet">
        <header class="post-header">
          <div class="post-icon">
            <img src = ${tweet.user.avatars}/>
            <p class="name">${(tweet.user.name)}</p>
          </div>              
          <h4 class="post-header nickname">${escape(tweet.user.handle)}</h4>
        </header>
        
        <form class = "tweet-input-form" method="POST" action="/tweets/"><br>
          <article class="input-tweet-article" name="text" id="tweet-text">${escape(tweet.content.text)}</article>
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


});

