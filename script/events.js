(function() {
  var template = '<li class="visitable">'+
      '<div class="info">'+
        '<div class="sidebar_buttons">'+
          '<button class="button upvote"><span class="img_sprite_moon"></span></button>'+
          '<button class="button downvote"><span class="img_sprite_moon"></span></button>'+
        '</div>'+
        '<img width="30" height="30" src="http://placehold.it/30x30.png" alt="">'+
        '<div class="js_sidebaritem_city sidebaritem_city_text_wrap">'+
          '<em>{{NAME}}</em>'+
        '</div>'+
        '<div class="js_sidebaritem_city sidebaritem_city_text_wrap">'+
          '{{DATE}}'+
        '</div>'+
        '<div class="js_sidebaritem_city sidebaritem_city_text_wrap">'+
          '{{LOCATION}}'+
        '</div>'+
      '</div>'+
    '</li>';

  function renderEvent(evt) {
    var tpl = template.replace(/{{([^}]+)}}/g, function(full, key, idx) {
        return evt[key]
    })
    return jQuery(tpl)[0]
  }

  function renderEventList(list, skip) {
    var fragment = document.createDocumentFragment()
    var evtItem = null
    var start = skip || 0

    for(var i=start;i<Math.min(list.length, 5+start);i++) {
        evtItem = renderEvent(list[i])
        fragment.appendChild(evtItem)
    }
    return fragment
  }

  function updateEventList(data, page) {
    var x = renderEventList(data, page*5)
    jQuery('.event_list').html('').append(x)
    console.log(x)
  }

  var currentPage = 0,
      currentData = []

  function updateEventSearch(qry) {
    $.getJSON('./testdata/events.json')
      .done(function(data) {
        currentData = data
        currentPage = 0
        updateEventList(data, 0)
        updatePagination()
      })
      .fail(function() {
        console.log('backend died. apokalypse?')
      })
  }

  function updatePagination(current, total) {
    var total = Math.ceil(currentData.length / 5)
    $('.paging_buttons .current_page').text(currentPage + 1)
    $('.paging_buttons .total_pages').text(total)
  }

  $('.paging_buttons .next').on('click', function() {
    if((currentPage + 1) * 5 >= currentData.length) {
      return
    }
    currentPage++
    updateEventList(currentData, currentPage)
    updatePagination()
  })

  $('.paging_buttons .prev').on('click', function() {
    if(currentPage === 0) {
      return
    }
    currentPage--
    updateEventList(currentData, currentPage)
    updatePagination()
  })


  updateEventSearch()
})();
