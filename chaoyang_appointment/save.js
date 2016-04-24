function getValue(key){
	element = document.getElementById(key)
	if( element == null ){
		element = document.getElementsByName(key)[0]
	}
	return element
}

function doSaveGuohu() {
	//替换特殊字符及验证数据库关键字
	checkInput();
		//验证IP只能预约一次
		var a_1 = document.getElementById("slwq").value;
		var a_2 = document.getElementById("wqhth").value;
		var yybh = a_1+a_2;;
		document.getElementById("yybh").value=yybh;
	 var ifflag  =  ifCreateToday();
        if(ifflag=='0'){
       
		}else if(ifflag=='1'){
			confirm("此IP地址已成功预约，不得重复使用该IP地址。", "确认", "goIndex");			
			return;
		}else if(ifflag=='2'){
			confirm("系统繁忙请您稍后再试。", "确认", "goIndex");	
			return;
		}else if(ifflag=='3'){
			confirm("该业务类型在本周已成功预约，请重新预约。", "确认", "goIndex");	
			return;
		}else if(ifflag=='4'){ 
			confirm("填写的业务编号已成功预约，请不要重复预约。", "确认", "goIndex");	
			return; 
		}
	var frm = window.document.frm;
	var valcode = document.getElementById("info").value;
	var qyh = document.getElementsByName('p_Appointment_app_3')[0].value;
	if(qyh.length<7){
		alert("完税凭证号不得少于7位数字！");
		return false;
	}
	//网签合同号
	var wq1 = document.getElementById("slwq").value;
	var wq2 = document.getElementById("wqhth").value;
/**	if(wq2.length<6){
		alert("网签合同号至少为6位数字！");
		return false;
	}
*/
	if(wq1==""||wq1==null){
		alert("请正确填写网签合同号！");
		return false;
	}
	if(wq2==""||wq2==null){
		alert("请正确填写网签合同号！");
		return false;
	}
	var wq3 = wq1+wq2;
	document.getElementById("p_Appointment_app_2").value = wq3;
	
	var rv = getSelectedText("sx");
	document.getElementById("p_Appointment_app_4").value=rv;
	if("2"==rv){
		var se8 = document.getElementById("p_Appointment_app_8").value;
		var se9 = document.getElementById("p_Appointment_app_9").value;
		var se10 = document.getElementById("p_Appointment_app_10").value;
	
		//去空格
		se8=trimKg(se8);
		se9=trimKg(se9);
		se10=trimKg(se10);
		if(se8==null||se9==null||se10==null||se8==""||se9==""||se10==""){
			alert("卖方为单位时，卖方委托代理人信息为必填项!");
			return;
		}
		
		
	}
		var rv = getSelectedText("s");
	document.getElementById("p_Appointment_app_11").value=rv;
	if("2"==rv){
		var se15 = document.getElementById("p_Appointment_app_15").value;
		var se16 = document.getElementById("p_Appointment_app_16").value;
		var se17 = document.getElementById("p_Appointment_app_17").value;
		se15=trimKg(se15);
		se16=trimKg(se16);
		se17=trimKg(se17);
		if(se15==null||se16==null||se17==null||se15==""||se16==""||se17==""){
			alert("买方为单位时，买方委托代理人信息为必填项!");
			return;
		}
		
		
	}
	
	var se1 = getValue("p_Appointment_app_1").value;
	var se2 = getValue("p_Appointment_app_2").value;
	var se3 = getValue("p_Appointment_app_3").value;
	var se5 = getValue("p_Appointment_app_5").value;
	var se6 = getValue("p_Appointment_app_6").value;
	var se7 = getValue("p_Appointment_app_7").value;
	var se12 = getValue("p_Appointment_app_12").value;
	var se13 = getValue("p_Appointment_app_13").value;
	var se14 = getValue("p_Appointment_app_14").value;
	se1=trimKg(se1);
	se2=trimKg(se2);
	se3=trimKg(se3);
	se5=trimKg(se5);
	se6=trimKg(se6);
	se7=trimKg(se7);
	se12=trimKg(se12);
	se13=trimKg(se13);
	se14=trimKg(se14);	
		
	if(se1==null||se2==null||se3==null||se5==null||se6==null||se7==null||se12==null||se13==null||se14==null||se1==""||se2==""||se3==""||se5==""||se6==""||se7==""||se12==""||se13==""||se14==""){
		alert("请填写必填项信息!");
		return;
	}
		
	//取SELECT文本值用
	document.getElementById("server_id").value=document.getElementById("p_Appointment_server_id").value;
	var service_id = document.getElementById("p_Appointment_server_id").value;
	var app_date = document.getElementById("p_Appointment_app_date").value;

	//var md = document.getElementById("p_Appointment_testmsgtemp").value;
	//var sss = md5(md);
	document.getElementById("p_Appointment_testmsg").value = sss;
	//var app_agree = document.getElementById("agree").checked;
	if (service_id == null || service_id == "") {
		alert("【预约业务类型】不能为空！");
		return false;
	} else if (app_date == null || app_date == "") {
		alert("【预约日期】不能为空！");
		return false;
	} 
	
	var app1=frm.p_Appointment_app_1.value;//不动产产权证号
	var app2=frm.p_Appointment_app_2.value;//网签合同号
	var app3=frm.p_Appointment_app_3.value;//契税票号
	var app4=frm.p_Appointment_app_4.value;//卖方是否个人
	var app5=frm.p_Appointment_app_5.value;//卖方姓名或名称
	var app6=frm.p_Appointment_app_6.value;//卖方证件类别
	var app7=frm.p_Appointment_app_7.value;//卖方证件号码
	
	var app8=frm.p_Appointment_app_8.value;//卖方委托代理人姓名
	var app9=frm.p_Appointment_app_9.value;//卖方委托代理人证件类别
	var app10=frm.p_Appointment_app_10.value;//卖方委托代理人证件号码
	
	var app11=frm.p_Appointment_app_11.value;//买方是否个人
	var app12=frm.p_Appointment_app_12.value;//买方姓名或名称
	var app13=frm.p_Appointment_app_13.value;//买方证件类别
	var app14=frm.p_Appointment_app_14.value;//买方证件号码
	
	var app15=frm.p_Appointment_app_15.value;//买方委托代理人姓名
	var app16=frm.p_Appointment_app_16.value;//买方委托代理人证件类别
	var app17=frm.p_Appointment_app_17.value;//买方委托代理人证件号码

	
	var phonenumber=frm.p_Appointment_phonenumber.value;
	var testmsg=frm.p_Appointment_testmsgtemp.value;
	
		
	//验证证件号码是否重复
	if(ifChongfu(app7,app10,app14,app17)==false){
		alert("证件号码不能重复！");
	   return false;
   }
	

	if(checktelephone(phonenumber)==false){
		alert("请填写正确的手机号！");
		return false;
	}else if((testmsg==null||trimKg(testmsg)==""||trimKg(testmsg).length<6)){
		alert("请输入6位个人密码,不能包含空格！");
		return false;
	}//老验证码验证（js验证）
	else if(validateCheckCode()==false){
		alert("请输入正确的验证码！");
		return false;
	//新验证码验证（java验证）
	/*else if(valcode==0){
		alert("请输入正确的验证码！");
		return false;*/
	}
	/*
	else if("1"==validateCheckCodeByFront()){
		alert("请输入正确的验证码！");
		return ;
	}
	*/
	else{

		  if(app6=='sfz'){
		   if(isApply2(app7)==false){
			   return false;
		   }
		   
	      }
		  if(app6=='jgz'||app6=='gaz'||app6=='hz'||app6=='qt'||app6=='zzjgdm'||app6=='yyzzh'){
			if(isApply(app7)==false){
				return false;
			}
		  }
		  if(app9=='sfz'){
		   if(isApply2(app10)==false){
			   return false;
		   }
	      }
		  if(app9=='jgz'||app9=='gaz'||app9=='hz'||app9=='qt'||app9=='zzjgdm'||app9=='yyzzh'){
			if(isApply(app10)==false){
				return false;
			}
		  }
		  if(app13=='sfz'){
		    if(isApply2(app14)==false){
		    	return false;
		    }
	      }
		  if(app13=='jgz'||app13=='gaz'||app13=='hz'||app13=='qt'||app13=='zzjgdm'||app13=='yyzzh'){
			if(isApply(app14)==false){
				return false;
			}
		  }
		  
		  if(app16=='sfz'){
		   flag4= isApply2(app17);
	      }
		  if(app16=='jgz'||app16=='gaz'||app16=='hz'||app16=='qt'||app16=='zzjgdm'||app16=='yyzzh'){
			flag4= isApply(app17);
		  }
		  
			var md = document.getElementById("p_Appointment_testmsgtemp").value;
		    var mdnext = document.getElementById("p_Appointment_testmsgtempnext").value;
		    if(md!=mdnext){
		    	alert("两次输入的个人密码不一致，请重新输入！");
		    }else{
		     var sss = md5(md);
	        document.getElementById("p_Appointment_testmsg").value = sss;
	        document.getElementById("p_Appointment_app_date").value=app_date; 
	        frm.p_Appointment_app_person_button.disabled=true;
	        frm.submit();
		    }

	}
	
}

function doSaveDiya() {
	//替换特殊字符及验证数据库关键字
	checkInput();
	var frm = window.document.frm;
	var valcode = getValue("info").value;
	//getValue("p_Appointment_temp1").value=getValue("p_Appointment_server_id").value;
	//alert($('#p_Appointment_server_id').text()); 
	//取SELECT文本值用
	
	var app1=frm.p_Appointment_app_1.value;//业务编号
	var app2=frm.p_Appointment_app_2.value;//抵押权方是否个人
	var app3=frm.p_Appointment_app_3.value;//抵押权人
	var app4=frm.p_Appointment_app_4.value;//抵押权人证件类型
	var app5=frm.p_Appointment_app_5.value;//抵押权人证件号码
	var app6=frm.p_Appointment_app_6.value;//抵押权人委托代理人
	var app7=frm.p_Appointment_app_7.value;//抵押权人委托代理人证件类型
	
	var app8=frm.p_Appointment_app_8.value;//抵押权人委托代理人证件号码
	var app9=frm.p_Appointment_app_9.value;//抵押方是否个人
	var app10=frm.p_Appointment_app_10.value;//抵押人
	
	var app11=frm.p_Appointment_app_11.value;//抵押人证件类型
	var app12=frm.p_Appointment_app_12.value;//抵押人证件号码
	var app13=frm.p_Appointment_app_13.value;//抵押人委托代理人
	var app14=frm.p_Appointment_app_14.value;//抵押人委托代理人证件类型
	
	var app15=frm.p_Appointment_app_15.value;//抵押人委托代理人证件号码
	
	var app16=frm.p_Appointment_app_16.value;
	
		
	//--------zht 2015年2月3日 限制含“盘古”、“政泉”信息的不能预约。--star--------
	 var res = /盘古|政泉/;
	 if(res.test(app3)){
	 	alert("预约信息填写有误,请检查并修改后再次提交。");
		return false;
	 }
	 if(res.test(app10)){
	 	alert("预约信息填写有误,请检查并修改后再次提交。");
		return false;
	 }
	//--------zht 2015年2月3日 限制含“盘古”、“政泉”信息的不能预约。---end--------
	
	
	
	
	
	
	var yybh = getValue("p_Appointment_app_1").value;
	getValue("yybh").value=yybh;
	//验证IP只能预约一次
	 var ifflag  =  ifCreateToday();
        if(ifflag=='0'){
       
		}else if(ifflag=='1'){
			confirm("此IP地址已成功预约，不得重复使用该IP地址。", "确认", "goIndex");			
			return;
		}else if(ifflag=='2'){
			confirm("系统繁忙请您稍后再试。", "确认", "goIndex");
			return;
		}else if(ifflag=='3'){
			confirm("该业务类型在本周已成功预约，请重新预约。", "确认", "goIndex");	
			return;
		}else if(ifflag=='4'){ 
			confirm("填写的业务编号已成功预约，请不要重复预约。", "确认", "goIndex");	
			return; 
		}
   if(ifChongfu(app5,app8,app12,app15)==false){
	   alert("证件号码不能重复！");
	   return false;
   }
	
	

	
	
	
	if(app2=="2"){
		if(app1==""||app1==null){
			alert("抵押权人为单位时，业务编号不能为空！");
			return false;
		}
		if(isApplytow(app1)==false){
				 return false;
			 }
	}
	if(app2=="1"){
		if(app16==""||app16==null){
			alert("抵押权人为个人时，不动产产权证号不能为空！");
			return false;
		}
		if(isApplytow(app16)==false){
				 return false;
			 }
		
	}
	
	var s3 = app3;
	var s4 = app4;
	var s5 = app5;
	
	var s10 = app10;
	var s11 = app11;
	var s12 = app12;

	
	//去空格
	s3=trimKg(s3);
	s4=trimKg(s4);
	s5=trimKg(s5);
	s10=trimKg(s10);
	s11=trimKg(s11);
	s12=trimKg(s12);
	
	
	if(s3==null||s3==""||s4==null||s4==""||s5==null||s5==""||s10==null||s10==""||s11==null||s11==""||s12==null||s12==""){
		alert("抵押权人和抵押人为必填项!");
		return;
	}
	var rv = getSelectedText("sx");
	getValue("p_Appointment_app_2").value=rv;
	var rvs = getSelectedText("s");
	getValue("p_Appointment_app_9").value=rvs;
	if('2'==rv){
		var s1 = getValue("p_Appointment_app_1").value;
		var s2 = getValue("p_Appointment_app_6").value;
		
		//去空格
	    s1=trimKg(s1);
	    s2=trimKg(s2);
		
		if(s1==null||s1==""||s2==null||s2==""){
			alert("抵押权人为单位时，业务编号为必填项!");
			return;
		}
		if(trimKg(app7)==""||trimKg(app8)==""){
			alert("抵押权人为单位时，抵押权人委托代理人证件为必填项!");
			return;
		}
	
		if(app1.length<7){
		
			alert("预约信息填写有误！请检查并修改后再次提交。");
			return false;
		}
		/*
		if(app1>13500000){
			alert("预约不成功");
			return false;
		}*/

	}
	if('1'==rv){
		//个人
		if(trimKg(app4)==""||trimKg(app5)==""){
			alert("抵押权人为个人时，抵押权人证件为必填项!");
			return;
		}
	}
	
	if('2'==rvs){
		var s1 = getValue("p_Appointment_app_13").value;
		//去空格
	    s1=trimKg(s1);
		if(s1==null&&s1==""){
			alert("抵押人为单位时，抵押人委托代理人为必填项!");
			return;
		}
		if(trimKg(app14)==""||trimKg(app15)==""){
			alert("抵押人为单位时，抵押人委托代理人证件为必填项!");
			return;
		}
	}
	
	if('1'==rvs){
		//个人
		if(trimKg(app11)==""||trimKg(app12)==""){
			alert("抵押人为个人时，抵押人证件为必填项!");
			return;
		}
	}
	
	getValue("server_id").value=getValue("p_Appointment_server_id").value;
	var service_id = getValue("p_Appointment_server_id").value;
	var app_date = getValue("p_Appointment_app_date").value;


	//var md = getValue("p_Appointment_testmsgtemp").value;
	//var sss = md5(md);
	//getValue("p_Appointment_testmsg").value = sss;
	//var app_agree = getValue("agree").checked;
	if (service_id == null || service_id == "") {
		alert("【预约业务类型】不能为空！");
		return false;
	} else if (app_date == null || app_date == "") {
		alert("【预约日期】不能为空！");
		return false;
	}
	
	var phonenumber=frm.p_Appointment_phonenumber.value;
	var testmsg=frm.p_Appointment_testmsgtemp.value;
	var testmsgnext=frm.p_Appointment_testmsgtempnext.value
	if(checktelephone(phonenumber)==false){
		alert("请填写正确的手机号！");
		return false;
	}else if((testmsg==null||trimKg(testmsg)==""||trimKg(testmsg).length<6)){
		alert("请输入6位个人密码,不能包含空格！");
		return false;
	}
	else if((testmsgnext==null||trimKg(testmsgnext)=="")){
		alert("再次输入个人密码不能为空！");
		return false;
		
	}
	//老验证码验证（js验证）
	else if(validateCheckCode()==false){
		alert("请输入正确的验证码！");
		return false;
	}
	/*
	else if("1"==validateCheckCodeByFront()){
		alert("请输入正确的验证码！");
		return ;
	}
	*/
	else{
			
		  if(app4=='sfz'){
		   if(false==isIdCardNo(app5)){
			  return false;
		   }
	      }
		  
		  if(app4=='jgz'||app4=='gaz'||app4=='hz'||app4=='qt'||app4=='zzjgdm'||app4=='yyzzh'){
			
			
		  }
		  if(app7=='sfz'){
		    if(false==isIdCardNo(app8)){
		    	return false;
		    }
		  
	      }
		  if(app7=='jgz'||app7=='gaz'||app7=='hz'||app7=='qt'||app7=='zzjgdm'||app7=='yyzzh'){
			
			 
		  }
		  if(app11=='sfz'){
		     if(false==isIdCardNo(app12)){
		    	 return false;
		     }
		     
	      }
		  if(app11=='jgz'||app11=='gaz'||app11=='hz'||app11=='qt'||app11=='zzjgdm'||app11=='yyzzh'){
			
			
		  }
		  if(app14=='sfz'){
			 if(false==isIdCardNo(app15)){
				 return false;
			 }
		  
	      }
		  if(app14=='jgz'||app14=='gaz'||app14=='hz'||app14=='qt'||app14=='zzjgdm'||app14=='yyzzh'){
			 
			
		  } 

			var md = getValue("p_Appointment_testmsgtemp").value;
		    var mdnext = getValue("p_Appointment_testmsgtempnext").value;
		    if(md!=mdnext){
		    	alert("两次输入的个人密码不一致，请重新输入！");
		    }else{
		     var sss = md5(md);
	        getValue("p_Appointment_testmsg").value = sss;
	        getValue("p_Appointment_app_date").value=app_date;    
	        frm.p_Appointment_app_person_button.disabled=true;
	        frm.submit();
		    }

	}
}