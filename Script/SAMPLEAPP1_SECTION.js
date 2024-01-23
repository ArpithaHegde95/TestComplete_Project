﻿
//USEUNIT COMMON_OBJ
//USEUNIT COMMONFILES
//USEUNIT MAINWND_OBJ
//USEUNIT ONENOTE_FUNCTIONALITY_TC
//USEUNIT TAB_OBJ

function SampleApplication1_Title(titleName)
{
    var main_wnd=GetMainWindow();
    var tab_name=GetTabOption1();
    if(tab_name.Exists==true)
    {
       tab_name.Click();
       Log.Message("Sample Application is present and clicked");
       var window1=main_wnd.FindChild(Array("Visible","WndClass"),Array(true,"OneNote::DocumentCanvas"),5);
       var pagetitle_tab=window1.FindChild(Array("Visible","Name"),Array(true,"UIAObject(\"Page_title\")"),5);
       pagetitle_tab.SetValue(titleName);
    }
    else
    {
       Log.Error("Sample Application is not present and not clicked")
    }
}

function FileAttactment_Verification_SampleApplication1()
{
       var main_wnd=GetMainWindow()
       var excel_file=main_wnd.FindChild(Array("Visible","Name"),Array(true,"UIAObject(\"Embedded_file_EXCEL_FILE_xlsx\")"),10)
       if(excel_file.Exists==true)
       {
         Log.Message("Excel file  is present")
       }
       else
       {
         Log.Error("Excel file  is not present")
       }
       var word_doc=main_wnd.FindChild(Array("Visible","Name"),Array(true,"UIAObject(\"Embedded_file_WORD_DOCUMENT_docx\")"),10)
       if(word_doc.Exists==true)
       {
         Log.Message("Word document is present")
       }
       else
       {
         Log.Error("Word document is not present")
       }
       var json_file=main_wnd.FindChild(Array("Visible","Name"),Array(true,"UIAObject(\"Embedded_file_JSON_FILE_json\")"),10)
       if(json_file.Exists==true)
       {
         Log.Message("JSON file  is present")
       } 
       else
       {
         Log.Error("JSON file is not present")
       }
       var pdf_file=main_wnd.FindChild(Array("Visible","Name"),Array(true,"UIAObject(\"Embedded_file_PDF_FILE_pdf\")"),10)
       if(pdf_file.Exists==true)
       {
         Log.Message("PDF file  is present")
       } 
       else
       {
         Log.Error("PDF file is not present")
       }
}

