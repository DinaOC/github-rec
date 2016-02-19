$(document).ready(function() {

  $('.repositories').hide();
  $('.public-activity').hide();

    $('.right-links').on('click', 'a', function(event) {
      event.preventDefault();
        var selectedPage = "." + $(this).attr('rel');
        $(selectedPage).siblings().hide();
        $(selectedPage).show();


    })
    var reposStr = "";
    repoItems.forEach(function(element) {
        reposStr += "<p class='names'>" + element.name + "</p>" + "<span class='dates'>" + moment.utc(element.updated_at).startOf("day"). fromNow(); + "</span>" ;
    })
    $(".repositories").append(reposStr);

// This is Public activity



        var repoStr2 = "";
        active.forEach(function(el) {
          if (el.type === "CreateEvent"){
              repoStr2 += "<p>" + el.actor.login +"</p>" + "<p>" + "<p>" + el.payload.ref + "</p>" + "<p>" + el.repo.name + "</p>";
          }
          else {
            repoStr2 += "<p>" + el.actor.login + "</p>" + "<p>" + el.repo.name + "</p>" + "<p>" + el.payload.ref + "</p>";
          }

        })
        $(".public-activity").append(repoStr2);

});
