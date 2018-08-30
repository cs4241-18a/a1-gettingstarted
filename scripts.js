//globals to handle holding open expandable sections
var p_intro_held = false;
var p_acad_held = false;
var p_expr_held = false;

//when we set the style of an element, it is overwritten
//maintain the default paragraph style here to append after changing attributes
//only necessary to set on expansion(when visible)
var p_default_style = "width:500px;background-color:#00BFFF";

//expand section by id
function expand(id){
  if (checkIdVarHelper(id) == false){
    var p = document.getElementById(id);
    p.setAttribute("style", "display:visible;"+p_default_style);
  }
}

//toggle holding open of a section
function toggleHold(id){
  var p = document.getElementById(id);
  if (checkIdVarHelper(id) == false){
    //expand the section, visually indiciate
    p.setAttribute("style", "display:visible;border-style:solid;"+p_default_style);
    toggleIdVarHelper(id);
  } else {
    //collapse the section
    p.setAttribute("style", "display:none");
    toggleIdVarHelper(id);
  }
}

//collapse section by id
function collapse(id){
  if (checkIdVarHelper(id) == false){
    var p = document.getElementById(id);
    //none takes up no space; still in the background
    p.setAttribute("style", "display:none");
  }
}

//returns true if the hold value for an id is set; I have to use this a bunch
function checkIdVarHelper(id){
  switch(id){
    case "p_intro":
      if (p_intro_held){
        return true;
      } else {
        return false;
      }
      break;
    case "p_acad":
      if (p_acad_held){
        return true;
      } else {
        return false;
      }
      break;
    case "p_expr":
      if (p_expr_held){
        return true;
      } else {
        return false;
      }
      break;
    default:
      return false;
  }
}

//toggle the hold value of the corresponding id
//honestly these globals probably should have been a hashmap
function toggleIdVarHelper(id){
  switch(id){
    case "p_intro":
      p_intro_held = !p_intro_held;
      break;
    case "p_acad":
      p_acad_held = !p_acad_held;
      break;
    case "p_expr":
      p_expr_held = !p_expr_held;
      break;
    default:
      //debugging etc
      alert("Error setting hold value");
  }
}
