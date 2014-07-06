(function() {
  var currentPage = 0,
      currentData = [],
      template = '<li class="visitable">'+
      '<div class="info" data-id="{{id}}">'+
        '<div class="sidebar_buttons">'+
          //'<button class="button upvote"><span class="img_sprite_moon"></span></button>'+
          '<button class="button downvote"><span class="img_sprite_moon"></span></button>'+
        '</div>'+
        '<img width="30" height="30" src="{{image_small | default("http://placekitten.io/30x30.png")}}" alt="">'+
        '<div class="js_sidebaritem_city sidebaritem_city_text_wrap">'+
          '<em>{{title}}</em>'+
        '</div>'+
        '<div class="js_sidebaritem_city sidebaritem_city_text_wrap">'+
          '{{begin}}'+
        '</div>'+
        '<div class="js_sidebaritem_city sidebaritem_city_text_wrap">'+
          '<a href="{{venue_url}}">{{venue}}</a>'+
        '</div>'+
      '</div>'+
    '</li>';

  function renderEvent(evt) {
    var tpl = template.replace(/{{([^}]+)}}/g, function(full, key) {
        var parts = key.split('|')
        if(parts.length > 1) {

        } else {
          return evt[key]
        }
    })
    return jQuery(tpl)[0]
  }

  function renderEventList(list, skip) {
    var fragment = document.createDocumentFragment()
    var start    = skip || 0

    for(var i=start;i<Math.min(list.length, 5+start);i++) {
        fragment.appendChild(renderEvent(list[i]))
    }
    return fragment
  }

  function updateEventList() {
    $('.event_list')
      .html('')
      .append(
        renderEventList(currentData, currentPage*5)
      )
  }


  function updateEventSearch(qry) {
    var query = encodeURIComponent($('#js_querystring').val())
    $.getJSON('http://192.168.245.123:8000/search/?location=' + query)
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

  function submitUpvote(id) {
    //TODO: send to backend

//    updateEventList()
//    updatePagination()
  }

  function submitDownvote(id) {
    //TODO: send to backend
    for(var i=0;i<currentData.length;i++) {
      if(currentData[i].ID === id) {
        var data = currentData[i]
        currentData.splice(i, 1)
        break
      }
    }
    updateEventList()
    updatePagination()

    if($('#event_popup').is(':visible')) {
      if(data.ID === lastPopupId) {
        $('#event_popup').hide()
        lastPopupId = undefined
      } else {
        openPopup(lastPopupId)
      }
    }
  }

  function openPopup(id) {
      var ele = $('.event_list .visitable .info[data-id="'+id+'"]')
      console.log(ele, id)
      var posTop = ele.offset().top
      var height = ele.innerHeight()
      var popupTop = posTop + (height/2) - 125 // POPUP HEIGHT
      $('#event_popup').css('top', popupTop).show()
  }

  var lastPopupId = undefined
  $('.event_list').on('click', '.visitable', function(evt) {
    var id = $('.info', this).data('id')
    if(lastPopupId !== id) {
      openPopup(id)
      lastPopupId = id
      evt.preventDefault()
      return false
    }
  })

  $('.event_list').on('click', '.upvote', function(evt) {
    var id = $(this).closest('.info').data('id')
    submitUpvote(id)
    evt.preventDefault()
    return false
  })

  $('body').on('click', function(evt) {
    if($('#event_popup').is(':visible')) {
      $('#event_popup').hide()
      evt.preventDefault()
      return false
    }
  })

  $('.event_list').on('click', '.downvote', function(evt) {
    var id = $(this).closest('.info').data('id')
    submitDownvote(id)
    evt.preventDefault()
    return false
  })

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

  $('#js_go').on('click', updateEventSearch)
  updateEventSearch()
})();
