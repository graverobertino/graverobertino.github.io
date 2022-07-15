//this code was copied from Bloktic's website. bigg thumber for thee
//check him out: https://bloktic.neocities.org/index.html
var blogs = 2;
var last = 2;
var whereat = blogs;

function firstBlog() {
    whereat = 1;
	document.getElementById("blogborder").src = "blog_pages/blog" + whereat + '.html';
}
function previousBlog() {
    if (whereat != 1)
    whereat -= 1;
    document.getElementById("blogborder").src = "blog_pages/blog" + whereat + '.html';
}
function nextBlog() {
    if (whereat != blogs)
    whereat += 1;
    document.getElementById("blogborder").src = "blog_pages/blog" + whereat + '.html';
}
function latestBlog() {
    whereat = last;
	document.getElementById("blogborder").src = "blog_pages/blog" + whereat + '.html';
}
//