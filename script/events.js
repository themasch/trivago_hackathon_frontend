(function() {
  var currentPage = 0,
      currentData = [],
      backendUrl  = 'http://trivago.masch.it' // 'http://192.168.245.123:8000/'
      template = '<li class="visitable">'+
      '<div class="info" data-id="{{id}}">'+
        '<div class="sidebar_buttons">'+
          '<button class="button downvote"><span class="img_sprite_moon"></span></button>'+
        '</div>'+
        '{{#if image_small}}'+
        '<img width="30" height="30" src="{{image_small}}" alt="">'+
        '{{else}}' +
        '<img width="30" height="30" src="http://placekitten.com/30/30" alt="">'+
        '{{/if}}' +
        '<div class="js_sidebaritem_city sidebaritem_city_text_wrap">'+
          '<em>{{title}}</em>'+
        '</div>'+
        '<div class="js_sidebaritem_city sidebaritem_city_text_wrap">'+
          '{{begin_f}}'+
        '</div>'+
        '<div class="js_sidebaritem_city sidebaritem_city_text_wrap">'+
          '{{venue}}'+
        '</div>'+
      '</div>'+
    '</li>'
      detailTemplate =
        '<h1>{{title}}</h1>'+
        '{{#if image}}'+ '<img src="{{image}}" alt="">'+ '{{/if}}' +
        '<br />'+
        '<em>'+
          '{{begin_f}}'+
        '</em><br /><br />'+
        '<div style="text-algin:justify">'+
          '{{{desc}}}'+
        '</div>'+
        '<a class="venue" target="_blank" href="{{venue_url}}">{{venue}}</a>',
      tplFunc = Handlebars.compile(template),
      tplDetailFunc = Handlebars.compile(detailTemplate);

  moment.lang('de')

  function renderEvent(evt) {
    evt.begin_f = moment(evt.begin).format('LLL')
    var tpl = tplFunc(evt)
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
<<<<<<< HEAD
    $.getJSON('http://192.168.245.123:8000/search/?location=' + query)
=======
    $.getJSON(backendUrl + '/events/?query=' + query)
>>>>>>> 0afb391339e4e35a3ec99fbf7f93200dfa3495ef
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

  function submitDownvote(id) {

    $.post(backendUrl + '/events/blockEvent', { id: id }, function(resp) {
      console.log(resp)
    })
    for(var i=0;i<currentData.length;i++) {
      if(currentData[i].id === id) {
        var data = currentData[i]
        currentData.splice(i, 1)
        break
      }
    }
    updateEventList()
    updatePagination()

    if($('#event_popup').is(':visible')) {
      if(data.id === lastPopupId) {
        $('#event_popup').hide()
        lastPopupId = undefined
      } else {
        openPopup(lastPopupId)
      }
    }
  }

  function renderPopupContent(id) {
    for(var i=0;i<currentData.length;i++) {
      if(currentData[i].id === id) {
        return tplDetailFunc(currentData[i])
      }
    }
    return ''
  }

  function openPopup(id) {
      var ele = $('.event_list .visitable .info[data-id="'+id+'"]')
      var posTop = ele.offset().top
      var height = ele.innerHeight()
      var popupTop = posTop + (height/2) - 125 // POPUP HEIGHT
      var content = renderPopupContent(id)
      var left    = ele.offset().left - 535
      $('#event_popup').css('top', popupTop).css('left', left).show()
      $('#event_popup .content').html(content)
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

  $('#event_popup').on('click', function(evt) {
    evt.stopPropagation();
  })

  $('body').on('click', function(evt) {
    if($.contains($('#event_popup')[0], evt.target)) {
      return true
    }
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
  $('.hide_events').on('click', function() {
    $('.event_sidebar').toggle()
  })
  updateEventSearch()
})();
