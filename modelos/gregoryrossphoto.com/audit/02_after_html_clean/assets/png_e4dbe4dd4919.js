hs_pingcount++;
if (hs_pingcount<2){
    _hs_png_timeout=setTimeout("hitsteps.createDiv()",5000);
}else if (hs_pingcount<8){
    _hs_png_timeout=setTimeout("hitsteps.createDiv()",10000);
}else if (hs_pingcount<15){
    _hs_png_timeout=setTimeout("hitsteps.createDiv()",30000);
}else{
    _hs_png_timeout=setTimeout("hitsteps.createDiv()",50000);
}
