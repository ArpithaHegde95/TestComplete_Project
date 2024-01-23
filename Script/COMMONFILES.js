
//Function to open the application
function OpenApplication()
{
   var process_name=TestedApps.ONENOTE.Run();
   ExplicitDelay(10000, "Wait until application is opened");
   if(process_name.Exists==true)
   {
    Log.Message("Onenote application is present and it is opened");
   }
   else
   {
    Log.Error("Onenote application is not present and it is not opened")
   }
}

//Function to close the application
function Closing_Project(wndname)
{
  var wnd=Sys.FindChild(Array("Visible","WndCaption"),Array(true,wndname),5)
  wnd.Close();
}

//Function for Explicit delay
function ExplicitDelay(intTimeout, strMessage)
{
    aqUtils.Delay(intTimeout, strMessage);
}




