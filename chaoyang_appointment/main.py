# encoding=utf-8
from splinter import Browser
from setting import *
import time


class SBWebSite():
    browser = Browser()

    def __init__(self, index_url, server_id):
        self.index = index_url
        self.server_id = server_id
    def __del__(self):
        # self.browser.quit()
        pass

    def locate_select_page(self):
        self.browser.visit(self.index)
        print self.browser.url

        next_btn = self.browser.find_by_xpath(r'.//a[@href="http://fwjy1.bjchy.gov.cn/yyfh.appointment.do?m=add"]')
        print next_btn
        next_btn.click()

        alert = self.browser.get_alert()
        if not alert:
            return

        alert.accept()

        # try again
        next_btn = self.browser.find_by_xpath(r'.//a[@href="http://fwjy1.bjchy.gov.cn/yyfh.appointment.do?m=add"]')
        print next_btn
        next_btn.click()

    def pageSelect(self):
        self.browser.select('p_Appointment_server_id', self.server_id)

        valid_pic = self.browser.find_by_xpath(r'.//input[@id="checkCode"]').first
        print valid_pic.value
        valid_code = self.browser.find_by_xpath(r'.//input[@id="j_captcha_response"]').first
        valid_code.fill(valid_pic.value)

        next_btn = self.browser.find_by_name('p_Appointment_app_person_button').first
        next_btn.click()

    def skipAgreementPage(self):
        self.browser.execute_script('document.getElementById("iknow").disabled = false;')
        time.sleep(20)
        next_btn = self.browser.find_by_xpath('.//input[@id="iknow"]').first
        next_btn.click()

    def set_input_value(self, id):
        value = getattr(self.info, 'app'+str(id), None)
        print id
        if not value :
            print 'invalid value'
            return
        try :
            input = self.browser.find_by_id('p_Appointment_app_' + str(id)).first
            input.fill(value)
        except :
            input = self.browser.find_by_name('p_Appointment_app_' + str(id)).first
            input.fill(value)

    def submitReservation(self):
        if self.server_id == kGuohu :
            return self.submitReservationGuohu()
        elif self.server_id == kDiya :
            return self.submitReservationDiya()
        else:
            return None

    def getValidDates(self):
        options = self.browser.find_by_xpath('.//select[@id="p_Appointment_app_date"]//option')
        valid_date = []
        for option in options :
            if not option['value'] :
                continue
            valid_date.append(option['value'])
        return valid_date

    def selectRecentDate(self):
        dates = self.getValidDates()
        if len(dates) > 0 :
            self.browser.select('p_Appointment_app_date', dates[0])

        # 看看上午还有号没，有的话默认预约上午的
        am_span = self.browser.find_by_xpath('.//span[@id="amsy"]')
        available_count = filter(unicode.isdigit, am_span.text)
        print 'am available count ' + str(available_count)
        if available_count != 0:
            return

        #上午没有的话预约下午
        self.browser.find_by_id('pm').first.check()

    def submibForm(self):
        pass

    def submitReservationGuohu(self):
        self.selectRecentDate()

        temp = self.browser.find_by_id('wqhth').first
        temp.fill('12345678')
        self.browser.fill_form(kGuohuInfo)

        self.browser.execute_script(kJSScriptInjection)
        time.sleep(1)
        #self.browser.execute_script('doSaveGuohu()')

    def submitReservationDiya(self):
        self.selectRecentDate()

        self.browser.fill_form(kMortgageInfo)

        self.browser.execute_script(kJSScriptInjection)
        #time.sleep(5)
        #self.browser.execute_script('doSaveDiya()')

if __name__ == '__main__':
    # web = SBWebSite('http://fwjy1.bjchy.gov.cn/yyfh.appointment.do?m=add')
    web = SBWebSite('http://fwjy.bjchy.gov.cn/yuyue.html', kDiya)

    web.locate_select_page()
    web.pageSelect()
    web.skipAgreementPage()
    web.submitReservation()

    pass
