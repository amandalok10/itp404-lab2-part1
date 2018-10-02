let reposTemplateString = document.getElementById('repos-template').innerHTML;
let renderRepos = Handlebars.compile(reposTemplateString);


 $('body').html("Loading...");






$.getJSON('https://thejsguy.com/teaching/2018/api/restaurants.json').then(function(repositories){
    console.log(repositories);
    let renderedRepos = renderRepos({
        repos: repositories.data
    });
    $('body').html(renderedRepos);
});
