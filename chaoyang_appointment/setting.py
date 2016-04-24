# encoding=utf-8
'''
Created on 2016/4/23

@author: 'ay'
'''


kGuohu = '297edff83cf6b763013cf634a2f80006'
kDiya = '297edff83cf6b763013cf64554e40010'
kPassoword = '123456'

kGuohuInfo_ = {
    'p_Appointment_app_1': u'X京房权证朝字第1356644',  # 不动产产权证号

    'slwq': 'C',  # 网签合同号类型
#    'wqhth': '1230890',  # 网签合同号
    'p_Appointment_app_3': '00139702',  # 完税凭证号

    'p_Appointment_app_5': u'闫红',  # 卖方姓名或名称
    'p_Appointment_app_6': 'sfz',  # 卖方证件类别  说明：#身份证（sfz），其它（qt）
    'p_Appointment_app_7': '110108196408138425',  # 卖方证件号码

    'p_Appointment_app_12': u'瞿秋婷',  # 买方姓名或名称
    'p_Appointment_app_13': 'sfz',  # 买方证件类别  说明：#身份证（sfz），其它（qt）
    'p_Appointment_app_14': '500109198708200081',  # 买方证件号码

    'p_Appointment_phonenumber': '15210962350', # 手机
    'p_Appointment_testmsgtemp': kPassoword,  # 密码
    'p_Appointment_testmsgtempnext': kPassoword, # 确认密码
    'j_captcha_response': u'蛤蛤'  # 验证码随便设
}


kGuohuInfo = {
    'p_Appointment_app_1': u'Xxxxxx156894',  # 不动产产权证号

    'slwq': 'C',  # 网签合同号类型
#    'wqhth': '1230890',  # 网签合同号
    'p_Appointment_app_3': '0018888',  # 完税凭证号

    'p_Appointment_app_5': u'提交',  # 卖方姓名或名称
    'p_Appointment_app_6': 'sfz',  # 卖方证件类别  说明：#身份证（sfz），其它（qt）
    'p_Appointment_app_7': '150108195806031239',  # 卖方证件号码

    'p_Appointment_app_12': u'失败',  # 买方姓名或名称
    'p_Appointment_app_13': 'sfz',  # 买方证件类别  说明：#身份证（sfz），其它（qt）
    'p_Appointment_app_14': '440103198305120517',  # 买方证件号码

    'p_Appointment_phonenumber': '13356897788', # 手机
    'p_Appointment_testmsgtemp': kPassoword,  # 密码
    'p_Appointment_testmsgtempnext': kPassoword, # 确认密码
    'j_captcha_response': u'蛤蛤'  # 验证码随便设
}

kMortgageInfo = {
    'p_Appointment_app_1': '5435345234324234',  # 业务编号

    #'p_Appointment_app_2' : '', # 抵押权方是否个人
    'p_Appointment_app_3': u'洛南',  # 抵押权人
    'p_Appointment_app_4': 'zzjgdm',  # 抵押权人证件类型  说明：组织机构代码（zzjgdm）,营业执照（yyzzh）,其它（qt）
    'p_Appointment_app_5': '150108195806031239',  # 抵押权人证件号码

    'p_Appointment_app_6': u'洛东',  # 抵押权人委托代理人
    'p_Appointment_app_7': 'sfz',  # 抵押权人委托代理人证件类型  说明：#身份证（sfz），其它（qt）
    'p_Appointment_app_8': '150108195806031247',  # 抵押权人委托代理人证件号码

#    'p_Appointment_app_9': '',  # 抵押方是否个人
    'p_Appointment_app_10': u'洛北',  # 抵押人
    'p_Appointment_app_11': 'sfz',  # 抵押人证件类型  说明：#身份证（sfz），其它（qt）
    'p_Appointment_app_12': '440103198305120517',  # 抵押人证件号码

    'p_Appointment_app_13': u'洛西',  # 抵押人委托代理人
    'p_Appointment_app_14': 'sfz',  # 抵押人委托代理人证件类型  说明：#身份证（sfz），其它（qt）
    'p_Appointment_app_15': '440103198305120568',  # 抵押人委托代理人证件号码

    'p_Appointment_phonenumber': '15245801122', # 手机

    'p_Appointment_testmsgtemp': kPassoword,  # 密码
    'p_Appointment_testmsgtempnext': kPassoword, # 确认密码
    'j_captcha_response': u'蛤蛤'  # 验证码随便设
}

kJSScriptInjection = '''
var myScript= document.createElement("script");
myScript.type = "text/javascript";
myScript.src="http://127.0.0.1:8000/save.js";
document.body.appendChild(myScript);
'''