//even pada saat link 
$('.Page-scroll').on('click', function(e){

    //ambil isi a href
    var tujuan = $(this).attr('href');
    // tangkap elemet ybs
    var elementTujuan = $(tujuan);
    
    
    //pindah scroll dan animasi scroll
    $('html,body').animate({
        scrollTop: elementTujuan.offset().top - 50 
    },600,'swing');


    e.preventDefault();

});


// parallax
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    //parallax gambar 
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });
    //parallax judul 
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });
    // parallax paragraf
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });

    //portfolio
    if(wScroll > $('.portfolio').offset().top -270){
        $('.portfolio .thumbnail').addClass('muncul');
    }
});
