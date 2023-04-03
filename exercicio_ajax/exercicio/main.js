$(document).ready(function() {
    $.getJSON('github.json', function(data) {
      $('.profile-name').text(data.name);
      $('.profile-username').text('@' + data.username);
      $('.repos').text(data.repos);
      $('.followers').text(data.followers);
      $('.following').text(data.following);
      $('.profile-link').attr('href', data.github_url);
    });
  });