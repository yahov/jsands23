cheat.log('[perdun.tech] perdun.tech BY yahov#4750');
cheat.log('-------------------------');
cheat.log('[perdun.tech] FREE VERSION FOR WEAVE 2.5');
utils.play_sound("C:\\perdun\\1.wav");

function onrender() {

    var menu = ui.get_menu_alpha();
    var poz = ui.get_menu_position();
    var size = ui.get_menu_size();

    render.filled_rect([poz[0], poz[1] - 125], [size[0], 120], [16, 16, 16, menu * 255], 5)
    render.text([poz[0] + 10, poz[1] - 110], [255, 255, 255, menu * 255], 12, 6, "LAST UPD 21.06.2022")
    render.text([poz[0] + 10, poz[1] - 90], [255, 0, 0, menu * 255], 12, 6, "Update log:")
    render.text([poz[0] + 10, poz[1] - 50], [255, 255, 255, menu * 255], 12, 6, "-Added SexyDesync\n-Added PukedJitter\n-Added TankAntiSex")
    render.text([poz[0] + 10, poz[1] - 20], [100, 149, 237, menu * 255], 12, 6, "PERDUNTECH.JS")
    }

register_callback("render", onrender)

function tag() {

   var time = parseInt((global_vars.curtime() * 3))

   if (time != time) {

   switch ((time) % 11)	
   {
    case 1: { cheat.set_clantag("P"); break; }
    case 2: { cheat.set_clantag("PE"); break; }
    case 3: { cheat.set_clantag("PER"); break; }
    case 4: { cheat.set_clantag("PERD"); break; }
    case 5: { cheat.set_clantag("PERDU"); break; }
    case 6: { cheat.set_clantag("PERDUN"); break; }
    case 7: { cheat.set_clantag("PERDUN."); break; }
    case 8: { cheat.set_clantag("PERDUN.T"); break; }
    case 9: { cheat.set_clantag("PERDUN.TE"); break; }
    case 10:{ cheat.set_clantag("PERDUN.TEC"); break; }   
	case 11:{ cheat.set_clantag("PERDUN.TECH"); break; }  
   }
   lasttime = time;
}


ui.add_checkbox("GayIdicator", "indicators")
vars.set_bool("js.indicators", true)

var size = render.get_screen_size();

register_callback("render", function() {
    if (!vars.get_bool("js.indicators")) return;

    var x_ind = size[0]
    var y_ind = size[1]

    render.rect([x_ind - 1593, y_ind - 314], [58, 81], [235, 246, 140, 255], 4)

    if (vars.is_bind_active("doubletap")) {
        render.text([x_ind - 1590, y_ind - 314], [235, 246, 190, 255], 200, 3, "DT");
    } else {
        render.text([x_ind - 1590, y_ind - 314], [0, 0, 255, 255], 200, 3, "DT");
    }

    if (vars.is_bind_active("hide_shots")) {
        render.text([x_ind - 1590, y_ind - 295], [219, 200, 120, 255], 200, 3, "HS");
    } else {
        render.text([x_ind - 1590, y_ind - 295], [0, 0, 255, 255], 200, 3, "HS");
    }

    if (vars.is_bind_active("fake_duck")) {
        render.text([x_ind - 1590, y_ind - 275], [1, 255, 120, 255], 200, 3, "DUCK");
    } else {
        render.text([x_ind - 1590, y_ind - 275], [0, 0, 255, 255], 200, 3, "DUCK");
    }
    if (vars.is_bind_active("override_damage"))  {
        render.text([x_ind - 1590, y_ind - 255], [230, 230, 230, 255], 200, 3, "MDG");
    } else {
        render.text([x_ind - 1590, y_ind - 255], [0, 0, 255, 255], 200, 3, "MDG");
    }



})


