(function() {
  var testData =  [
      {"ID":1,"NAME":"Der Mentor","CATEGORY":"theatre, culture, play, stage","DATE":"7/13/2014 13:00:00","DESCRIPTION":"Der 65jährige Benjamin Rubin wurde durch sein sein frühes Theaterstück „Der lange Weg“ zum Literaturstar. Seit vierzig Jahren hat er nichts Vergleichbares zustande gebracht. Der aufstrebende Jungdramatiker Martin Wegener, 40 Jahre jung, ist hingegen die hoffnungsvolle Stimme einer Generation. So wird er jedenfalls von einem Online-Magazin bezeichnet. Durch das Mentor-Projekt einer Kulturstiftung treffen die beiden nun aufeinander. Rubin soll Wegeners neues Stück „Namenlos“ betreuen. Eingelassen haben sich die beiden auf das einwöchige Experiment nur des Geldes wegen – und so sitzen sie nun zusammen in einer abgeschiedenen Villa auf dem Land, umgeben von einem Tümpel voller Frösche, Martins attraktiver Frau Gina und dem fürsorglichen Herrn Wangenroth von der Kulturstiftung, der eigentlich selbst lieber Künstler wäre ...\nBald eskaliert der literarische Gedankenaustausch zum Hahnenkampf zweier Egomanen, die einander nichts schuldig bleiben.","LOCATION":"Komödie und Theater am Kurfürstendamm","LATITUDE":52.499328,"LONGITUDE":13.324613,"URL":"http://www.komoedie-berlin.de/archiv/der+mentor.htm#.U7fUJPmSw4c"},
      {"ID":2,"NAME":"Ai Weiwei – The Fake Case","CATEGORY":"movie, cinema, culture","DATE":"7/6/2014 11:00:00","DESCRIPTION":"Ai Weiwei zog stets den Kampf für die Menschenrechte einem Leben voller Privilegien vor – eine Wahl, die ernsthafte Konsequenzen nach sich zieht. Im April 2011 wird er plötzlich von den chinesischen Behörden entführt, an einen geheimen Ort gebracht und dort strengstens isoliert. Nach seiner Entlassung lebt er ein Jahr lang unter Hausarrest und ständiger Kontrolle, jede seiner Bewegungen wird vom Staat überwacht.","LOCATION":"Martin-Gropius-Bau","LATITUDE":52.507106,"LONGITUDE":13.381873,"URL":"http://prinz.de/berlin/events/423696-ai-weiwei-the-fake-case-1/2014-07-06"},
      {"ID":3,"NAME":"Tatort frannz","CATEGORY":"movie, cinema, culture","DATE":"7/6/2014 20:15:00","DESCRIPTION":"die aktuelle Folge Tatort oder Polizeiruf 110\nSeit mehr als 35 Jahren ist der “Tatort” aus den deutschen Wohnzimmern nicht mehr wegzudenken. Immer sonntags um 20.15 Uhr sitzen die Krimifans auf der heimischen Couch und verfolgen die spannenden Fälle von Batic und Leitmayr, Kommissarin Charlotte Lindholm oder gehen mit Kommissarin Lena Odenthal auf Mörderjagd. In derzeit 600 Folgen haben über 70 Kommissare/Teams ermittelt. Der erste Tatort war übrigens “Taxi nach Leipzig” und wurde am 29. November 1970 ausgestrahlt. Wer lieber in Gesellschaft mitfiebert, ist im frannz genau richtig. Eintritt frei!Veranstaltungsreihe: [Tatort frannz]","LOCATION":"frannz Club","LATITUDE":52.5383,"LONGITUDE":13.41298,"URL":"http://frannz.com/frannz/highlight/tatort-frannz"},
      {"ID":4,"NAME":"Show me","CATEGORY":"show, stage, culture","DATE":"7/5/2014 15:00:00","DESCRIPTION":"SHOW ME ist unsere bisher aufwendigste Produktion. Strahlender als alles, was Sie bisher auf der größten Theaterbühne der Welt gesehen haben. Poetische, zarte Momente wechseln mit mächtigen Szenenbildern, darunter ein über 20 Meter hoher Wasserfall oder 60 Tänzer in futuristischen LED-Kostümen. Mit 162 Mitwirkenden, davon über 100 Künstler, ist es zugleich die weltweit größte Ensuite-Show. Erleben Sie Artistik zum Niederknien schön, ästhetisch verwoben mit verblüffenden Formationen aus Kostümen und Künstlern. SHOW ME eignet sich auch bestens für internationale Berlinbesucher.","LOCATION":"Friedrichstadt-Palast","LATITUDE":52.523911,"LONGITUDE":13.388064,"URL":"http://www.palast-berlin.eu/de/shows/show-me/"},
      {"ID":5,"NAME":"Hinterm Horizont","CATEGORY":"show, stage, culture","DATE":"7/6/2014 15:30:00","DESCRIPTION":"Berlin, im ehemaligen Osten Deutschlands. Jessy führt ein auf den ersten Blick relativ normales Leben. Sie ist liebende Mutter von Steve und treue Ehefrau von Marco. Doch der Schein trügt und die Fassade beginnt zu bröckeln, als eine Boulevardjournalistin ein Foto aus alten DDR-Tagen findet. Udo Lindenberg in inniger Umarmung mit dem damaligen FDJ-Mädchen Jessy.\nFreut euch auf eine authentische Berlin-Story zur Wiedervereinigung am Platz, wo einst die Mauer stand. Erlebt die größten Hits von Udo Lindenberg in einer bewegenden Ost-West-Liebesgeschichte.","LOCATION":"Stage Theater am Potsdamer Platz","LATITUDE":52.507699,"LONGITUDE":13.37187,"URL":"http://www.stage-entertainment.de/musicals-shows/hinterm-horizont-berlin.html"}
  ]

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
        console.log(tpl)
        return jQuery(tpl)[0]
    }

    function renderEventList(list) {
        var fragment = document.createDocumentFragment()
        var evtItem = null

        for(var i=0;i<list.length;i++) {
            evtItem = renderEvent(list[i])
            console.log(evtItem)
            fragment.appendChild(evtItem)
        }
        return fragment
    }

    var x = renderEventList(testData)
    jQuery('.event_list').html('').append(x)

})();
