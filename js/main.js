$(document).ready(function(){
    // Включаем скроллеры для скриншотов текущих проектов
    $('div.scrollable').scrollable({vertical:true, size: 1});
    
    // Список тегов для того с чем я сеичас работаю
    var taglist = ('javascript,prototype,jquery,script.aculo.us,extjs,xajax,' +  
                  'vrml,vml,xml,xslt,xsl-fo,fop,canvas,mysql,air,' + 
                  'sqlite,oracle,photoshop,xmlrpc,pdf,wml,php5,oop,' +  
                  'ooa,magento,zend framework,cakephp,orm,propel orm,' + 
                  'activerecord,ruby,simplexml,domxml,svg,svn,cvs,' + 
                  'trac,mvc,patterns,phpunit,phpdocumentor,soap,wsdl,' +  
                  'curl,sockets,comet,gd2,mbstring,imagemagic,sap bi,' + 
                  'sap erp,abap/4,delphi,wordpress,umi.cms,jabber,' + 
                  'memcache,apc,eaccelerator,c++,asm,pascal,aptana,' + 
                  'netbeans,mod_rewrite,zlib,adodb,pdo,pop3,smtp,' + 
                  'xdebug,yaml,парсинг,юзабилити,интерфейсы,dokuwiki,' + 
                  'uml2,blueprint,codemirror,json,xss,jsonp,xhr,' + 
                  'ajax,xmlhttprequest,apache,lighttpd,nginx,regexp,' + 
                  'opera,firefox,ie,chrome,ietester,safari,' + 
                  'оптимизация,ruby on rails,google gears,prism,wiki,' +  
                  'css,xhtml,html,http,i18n,ftp,sql,unidiff,' + 
                  'captcha,scrf,geoip,html5,openid,acl,xcache,rest,' + 
                  'smarty,jspacker,nodejs,mongodb').split(',').sort(function(a, b){
                      // перемешиваем список
                      return (Math.random()>0.5)?1:-1;
                  });
    
    // Создаем из списка тегов html 
    var taglist_html = $.map(taglist, function(n){
        return '<a href="http://ru.wikipedia.org/wiki/' + n + '" target="_blank">' + n + '</a>';
    }).join(', ');
    
    // Добавляем сразу все, чтобы было без лишних тормозов
    $('#taglist').append(
        '<h3><em>Скорее всего, я сейчас работаю с чем-то из этого</em></h3>' + 
        '<p class="quiet small">' + 
            taglist_html + 
        '</p>'
    );
    
    // Чтобы память не утекала 
    taglist = null;
    taglist_html = null;
 
});