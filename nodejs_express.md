#EXPRESS

#app.METHODS
1. app.all
`app.all(path, callback[, callback...])`
`[Like the standard app.METHOD() methods, expects it matches all HTTP verbs];`

2. app.get
`app.get(name)`
`[Returns the value of name app setting, where name is one of the string in app setting table];`
like this:
app.get('foobar');
// => undefined;

app.set('foobar', 'main page');
app.get('foobar');
// => main page;

`app.get(path, callback[, callback...])`
`[Routes HTTP GET requests to the specified path with the specified functions];`
path can be: {
    a string representing a path, 
    a path pattren, 
    a reqular expression pattren to match paths,
    an array of combination of all of the above
}
callback function can be: {
    a middleware function,
    a series of middleware functions (separeted by commas),
    an array of middleware functions,
    a combination of all of the above
}
like this:
app.get('/', function(req, res){
    res.send('GET REQUEST');
});

3. app.post
`app.post([path], callback [, callback...])`
`[Routes HTTP POST requests to the specified path with the specified functions];`
Almost the same as app.get;

4. app.use
`app.use([path], callback [, callback...])`
`[Mounts the spectified middleware function at the specified path];`
`and the middleware function is executed when the base of the requested path matchs the [path];`
path can be: {
    same as app.get
}
callback can be: {
    same as app.get
}

5. app.render
`app.render(view, [locals], callback)`
`[Returns the rendered HTML of view via the callback function];`
`it accepts an optional parameter that is an object containing local variables for the view;`
`its like res.render(), expect it cannot send the rendered view to the client on its own;`

#req.METHODS
1. req.body
`[Contains key-value pairs of data submitted to request body];`
`By default its undefined, and it can be populated when use a body-parsing middleware such as body-parser;`

2. req.query
`[Contains query strings], if there is no query string, its a empty object;`

#res.METHODS
1. res.render
`res.render(view, [, locals] [, callback])`
`[Renders a view and sends the rendered HTML string to client];`
Options parameters: {
    locals: an object whose properties define local variables of the view;
    callback: a callback function, if provided, it will returns both the possible error and rendered string;
              but not perform an automated response;
}
Must-have parameters: {
    view: is a string that is the file path of the view file to render;
          can be absolute path or path relatived;
}

2. res.send
`res.send([body])`
`[Sends the HTTP response];`
`The body parameter can be a buffer object, a string, or a array;`
like these:
res.send(new Buffer('foobar'));
res.send({foo: 'bar'});
res.send('<p> some html </p>');
res.status(404).send('PAGE NOT FOUND');
res.status(500).send(error: 'ENCOUNTER ERROR');

3. res.json
`res.json([body])`
`[Sends a json response];`
`This method sends a response(with a correct content-type) that is the [parameters converted to JSON use JSON.stringfy()];`
`The parameter [can be any JSON type], including string, boolean, array, object, or number;`
`Has the same function as [send a object or an array to res.send()];`
`And you can use it to [convert other values to json], such as null and undefined, although these are not valid json;`
use it like this:
res.json(null);
res.json({foo: 'bar'})
res.status(500).json({error: 'error mess'})

4. res.redirect
`res.redirect([status,] path)`
`[Redirect to the URL derived from the specified path], with specified status (a positive integet that correspond to HTTP status code);`
use it like this:
res.redirect('/foo/bar');
res.redirect('http://fooobar.com');
res.redirect(300, 'http://fooobar.com');
res.redirect('../login');

5. res.end
`res.end([data], [, encoding])`
`Ends the response process;`
`[Use it to quickly end the response without any data];`
`if need to response with data, use res.json() or res.send();`