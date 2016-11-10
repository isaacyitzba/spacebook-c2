var posts=[];

var newPost = function(text){
  var post = {text: text, id: 0 };

  if(posts.length === 0){
    post.id = 0;
  }
  else{
    var lastIndex = posts.length-1;
    post.id = posts[lastIndex].id + 1;
  }
  posts.push(post);
}

var addPost = function (){
  $('.posts').empty();

  for (var i =0; i < posts.length; i++) {
    $('.posts').append('<div class="parent"><p class="post" data-id="' + posts[i].id + '">' + posts[i].text + '</p>'+'<button type= "button" class = "btn btn-default btn-danger remove">remove</button> <br> <div><input type="text" id="comment" class="form-control" placeholder="Comment Here"></input><input type="text" id="username" class="form-control" placeholder="Username"></input><button type= "button" class = "btn btn-primary comment">Comment</button></div></div>');
    
  }
}

$('.btn-primary').on('click',function(){
  var text = $('#post-name').val();
  newPost(text);
  addPost(text);
});


$('.posts').on('click', '.remove', function(){
  $(this).closest('.parent').remove();
  var dataId = $(this).closest('.parent').data().id;
  posts.splice(dataId, 1);
});

var comments = [];

var newComment = function(username,text){ 
  var comment = {
    username: username,
    text: text,
  }
  comments.push(comment);
}

var addComment = function(username,text){
  $('.posts').append('<div class="comment-parent"<li class="comment">' + username + ' - ' + text+'</><br><button type= "button" class = "btn btn-default btn-danger remove-comment">remove</button></div>');
}


$('.posts').on('click','.comment', function(){
  var username = $(this).prev().val();
  var text = $(this).prev().prev().val();
  newComment(username, text);
  addComment(username,text);
});

$('body').on('click', '.remove-comment', function(){
  $(this).closest('.comment-parent').remove();
});




    







