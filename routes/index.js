
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Assignment' });
};

exports.getMsg = function(req, res){
	json_responses = {"statusCode" : 200, "name":req.body.name};
	res.send(json_responses);
}

exports.calc = function(req, res){
	console.log(req.body);
	var n1 = req.body.num1;
	var n2 = req.body.num2;
	var op = req.body.op;
	if(op == "add"){
		var result = n1 + n2;
		json_responses = {"statusCode" : 200, "res":result};
		
	}else if(op == "divide"){
		var result = n1 / n2;
		json_responses = {"statusCode" : 200, "res":result};
		
	}
	res.send(json_responses); 
}