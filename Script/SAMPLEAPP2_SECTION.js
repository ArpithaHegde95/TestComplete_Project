﻿//USEUNIT COMMON_OBJ
//USEUNIT COMMONFILES
//USEUNIT MAINWND_OBJ
//USEUNIT ONENOTE_FUNCTIONALITY_TC
//USEUNIT TAB_OBJ

function Setting_Title_SampleApplication2(titleName)
{
  var main_wnd=GetMainWindow();
  var tab_name=GetTabOption2();
    if(tab_name.Exists==true)
    {
       tab_name.Click();
       Log.Message("Sample Application2 is present and clicked");
       var one_note=main_wnd.FindChild(Array("Visible","WndClass"),Array(true,"OneNote::DocumentCanvas"),5)
       var page_title=one_note.FindChild(Array("Visible","Name"),Array(true,"UIAObject(\"Page_title\")"),5)
       page_title.SetValue(titleName);
    }
    else
    {
      Log.Error("Sample Application2 is not present and not clicked");
    }
}

function Display_DateTime_SampleApplication2()
{
       var main_wnd=GetMainWindow()
       var date_time=main_wnd.FindChild(Array("Visible","Name"),Array(true,"UIAObject(\"Page_date_and_time\")"),10)
       var data=date_time.Text
       Log.Message(data)    
}