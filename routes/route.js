exports.home=function(req,res)
{
	res.render('home',{title:'I Love My City !',
					headline:'I belive that My city is lovely and wonderful city and always rejoy us'
			 });
}

exports.city=function(req,res)
{
	var cityName=req.params.city;
	var title,heading;
	var imageNo=[1,2,3,4];
	if(cityName==='Bangalore')
	{
		title="Bangalore";heading="Bangalore:Where love is in the air";
	}
	else if(cityName==='Ramamurthynagar')
	{
		title="Ramamurthynagar";heading="RamamurthyNagar:Good Player you can found here";
	}
	else if(cityName==='TinFactory')
	{
		title="TinFactory";heading="TinFactory:Buzz,Beautiful arctitecture and statue";
	}
	else if(cityName==='SilkBoard')
	{
		title="SilkBoard";heading="Silk Board:Sparkling,Still,Food,Gorgeous";
	}else if(cityName==='Marathahalli')
	{
		title="Marathahalli";heading="Marathahalli:Come to Marathahalli to become someone new";
		imageNo.push(5);
		imageNo.push(6);
	} 
	res.render('city',{title:title,headline:heading,city:cityName,numberOfImages:imageNo});
}
