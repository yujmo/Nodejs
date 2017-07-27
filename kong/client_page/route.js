function route(postData,handle,response,request,postHTML){
    handle(postData,response,request,postHTML);
}

exports.route = route;
