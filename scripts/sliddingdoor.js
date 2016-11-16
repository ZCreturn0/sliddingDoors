// JavaScript Document
window.onload=function(){

	var box = document.getElementById("container");
	
	//����
	var imgs = box.getElementsByTagName("img");
	
	//����ͼƬ���
	var wid = imgs[0].offsetWidth;
	
	//ͼƬ¶�����
	var expose = 160;
	
	var boxWidth = wid + (imgs.length-1)* expose;
	
	box.style.width = boxWidth + 'px';
	
	function setInitPos()
	{
		for(var i = 1;i < imgs.length;i++)
		{
			imgs[i].style.left = wid + (i-1) * expose + 'px';
		}
	}
	setInitPos();
	
	//�ƶ�����
	var moveDis = wid - expose;
	
	for(var i = 0; i < imgs.length ; i++)
	{
		(function(i)
		{
			imgs[i].onmouseover = function()
			{
				setInitPos();
				for(var j = 1; j <= i; j++)
				{
					imgs[j].style.left = parseInt(imgs[j].style.left,10) - moveDis + 'px';
				}
			};
		})(i);	
	}
	

};