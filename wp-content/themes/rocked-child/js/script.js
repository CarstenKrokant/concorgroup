function vacaturesAccordion(name){
   if (!jQuery('#vacatures-content-block .accordion .item.'+name).hasClass('active')) {
      jQuery('#vacatures-content-block .accordion .item').removeClass('active');
      jQuery('#vacatures-content-block .accordion .item.'+name).addClass('active');
      jQuery('#vacatures-content-block .accordion .item .content').hide();
      jQuery('#vacatures-content-block .accordion .item.'+name+' .content').show();
   }
   else {
      jQuery('#vacatures-content-block .accordion .item').removeClass('active');
      jQuery('#vacatures-content-block .accordion .item .content').hide();
   }
}
